import React, { Component } from 'react';

import DonutChart from '../../components/Charts/DonutChart/DonutChart';
import BarsChart from '../../components/Charts/BarsChart/BarsChart';
import DashboardTable from '../../components/DashboardTable/DashboardTable';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';

class PageDashboard extends Component {

    state = {
        pageTitle: null,

        chartData1: null,
        chartData2: null,
        termsData: {
            term1: 85.52,
            term2: 25.48,
            term3: 33.68,
            term4: 16.99
        },

        tableData: null,
        tableError: null,
        isLoading: false,

        pagination: {
            current: 1,
            limit: 5,
            total: 10
        }
    };

    // Create dataset for bars charts
    createChartDataset() {
        const keysArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        let chartData1 = [];
        let chartData2 = [];

        keysArray.forEach(key => {
            chartData1[key] = +Math.random().toFixed(2);
            chartData2[key] = +Math.random().toFixed(2);
        });

        this.setState({
            chartData1: Object.assign({}, chartData1),
            chartData2: Object.assign({}, chartData2)
        });
    }

    // Get data from external source
    getTableData(page = this.state.pagination.current, limit = this.state.pagination.limit) {
        const _start = (page - 1) * limit;
        console.log('_start: ', _start);
        const requetUrl = `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_start=${_start}`;

        this.setState({isLoading: true});

        fetch(requetUrl).then((response) => {
            if (response.statusText !== 'OK') {
                this.setState({tableData: null, tableError: 'Error getting users data', isLoading: false});
                console.log(response);
                return
            }
            return response.json();
        })
        .then(data => {
            if (data.length < 1) {
                this.setState({tableData: null, tableError: 'No user data to show', isLoading: false});
                return
            }

            this.setUserData(data);
        });
    }

    // Parse data to valid format and update state
    setUserData(data) {
        // Parse data
        const userData = data.map(user => {
            const randomDate = new Date(2020, 2, 29, Math.round(Math.random() * 23), Math.round(Math.random() * 59));

            const randomStatus = Math.random() > 0.5 ? 'open' : 'sent';

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                time: randomDate,
                phone: user.phone,
                city: user.address.city,
                status: randomStatus
            }
        });
        // Update state
        this.setState({tableData: userData, tableError: null, isLoading: false});
    }

    // Extract search params in array
    getSearchParams() {
        if (!this.props.location.search) return null;

        // Remove leading "?". Split search string by "&"
        const searchItemsArray = this.props.location.search.slice(1).split('&');

        // Create array of key - vaules
        let searchArray = [];
        searchItemsArray.forEach(item => {
            const splitedItem = item.split('=');
            searchArray[splitedItem[0]] = splitedItem[1];
        });

        // Return search object
        return Object.assign({}, searchArray);
    }

    // Mount lifecicle Hook
    componentDidMount() {
        // Set chartbar dataset
        this.createChartDataset();

        // Get page from route
        const searchParams = this.getSearchParams();

        // Get data for table
        const startPage = (!!searchParams && !!searchParams.p) ? +searchParams.p : 1;
        const startPagination = {
            ...this.state.pagination,
            current: startPage
        }
        this.setState({pagination: startPagination});
        this.getTableData(startPage);
    }

    // Update lifecicle hook
    componentDidUpdate(prevProps, prevState) {
        // Get new page title
        if (this.props.location.state && this.props.location.state.sectionTitle !== this.state.pageTitle) {
            this.setState({pageTitle: this.props.location.state.sectionTitle});
        }

        // Get page from route
        const searchParams = this.getSearchParams();

        if (searchParams && searchParams.p && +searchParams.p !== this.state.pagination.current) {
            // Update current page
            const newPagination = {
                ...this.state.pagination,
                current: +searchParams.p
            }
            this.setState({pagination: newPagination});

            // Get table data
            this.getTableData(+searchParams.p);
        }

    }

    render() {
        console.log(this.getSearchParams());
        // Create terms list
        let termsList = [];
        for (let term in this.state.termsData) {
            const index = Math.floor(Math.random() * 100000);
            termsList.push((
                <li className="p-t-2 p-b-2" key={index}>
                    <span className="text-grey text-uppercase m-r-3">{term}</span>
                    <span className="m-l-3">{this.state.termsData[term]}</span>
                </li>
            ));
        }

        // Users table content
        let tableContent = <p className="p-t-3 p-b-3 text-center">No users to show</p>;
        if (this.state.isLoading) {
            tableContent = <Loading />
        } else {
            if (this.state.tableData) {
                tableContent = <DashboardTable data={this.state.tableData} />;
            } else {
                if (this.state.tableError) {
                    tableContent = <p className="p-t-3 p-b-3 text-center">{this.state.tableError}</p>
                }
            }
        }


        return (
            <main className="dashboard-content">
                <header className="section-header flex-container flex-items-center flex-content-between">
                    <h2 className="section-title h4">{this.state.pageTitle ? this.state.pageTitle : 'Data overview'}</h2>
                    <div className="section-overview">
                        <div className="overview-progress" />
                        <p className="overview-info text-grey"><span className="text-dark">643</span> <small> insertions needed to complete</small></p>
                    </div>
                </header>
                <div className="main-content-container">
                    <section className="results-info-section top-section-container flex-container flex-items-stretch">
                    <div className="result-info-container first-info flex-content two-fifth p-a-5">
                        <h4 className="inner-title h6 m-b-4">General results</h4>
                        <div className="statics-chart-container chart-primary flex-container">
                        <div className="two-third p-r-5 bar-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">9401</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <BarsChart classname="m-t-2" data={this.state.chartData1} color="#0077FF"/>
                        </div>
                        <div className="one-third donut-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">9401</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <DonutChart value={+Math.random().toFixed(2)} color="#0077FF" />
                        </div>
                        </div>
                    </div>
                    <div className="result-info-container second-info flex-content two-fifth p-a-5">
                        <h4 className="inner-title h6 m-b-4">Ratings by category</h4>
                        <div className="statics-chart-container chart-secondary flex-container">
                        <div className="two-third p-r-5 bar-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">3900</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <BarsChart classname="m-t-2" data={this.state.chartData2} color="#F0166D"/>
                        </div>
                        <div className="one-third donut-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">3900</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <DonutChart value={+Math.random().toFixed(2)} color="#F0166D" />
                        </div>
                        </div>
                    </div>
                    <div className="flex-content one-fifth p-a-5">
                        <ul className="terms-list fs-7 fw-semibold text-center">
                            {termsList}
                        </ul>
                    </div>
                    </section>
                    <section className="bottom-section-container p-a-5">
                        <h4 className="section-title fs-5 fw-bold m-b-4">Support Request</h4>
                        <div className="table-container">
                            {tableContent}
                        </div>
                    </section>
                </div>
                <footer className="section-footer flex-container flex-content-between flex-items-center">
                    <Pagination pagination={this.state.pagination} />
                </footer>
            </main>

        );
    }
}

export default PageDashboard;