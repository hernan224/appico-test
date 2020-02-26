import React, { Component } from 'react';

import DonutChart from '../../components/Charts/DonutChart/DonutChart';
import BarsChart from '../../components/Charts/BarsChart/BarsChart';

class PageDashboard extends Component {

    state = {
        chartData1: null,
        chartData2: null,
        termsData: {
            term1: 85.52,
            term2: 25.48,
            term3: 33.68,
            term4: 16.99
        },
        tableData: null,
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

    componentDidMount() {
        // Set chartbar dataset
        this.createChartDataset();
    }

    render() {

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

        return (
            <main className="dashboard-content">
                <header className="section-header flex-container flex-items-center flex-content-between">
                    <h2 className="section-title h4">Data overview</h2>
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
                            <DonutChart value={0.75} color="#0077FF" />
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
                            <DonutChart value={0.48} color="#F0166D" />
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
                        <table className="dashboard-table table-stripless">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Time</th>
                            <th>Phone number</th>
                            <th>City</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-dark">Cecilia Welch</td>
                            <td>heather_keeling@gottlieb.ca</td>
                            <td>01:06AM</td>
                            <td>215-593-5846</td>
                            <td>South Mariane</td>
                            <td><span className="label status-label btn btn-solid btn-primary btn-small">Sent</span></td>
                            </tr>
                            <tr>
                            <td className="text-dark">Sara Glover</td>
                            <td>heather_keeling@gottlieb.ca</td>
                            <td>01:06AM</td>
                            <td>215-593-5846</td>
                            <td>South Mariane</td>
                            <td><span className="label status-label btn btn-solid btn-primary btn-small">Sent</span></td>
                            </tr>
                            <tr>
                            <td className="text-dark">Edgar Greer</td>
                            <td>heather_keeling@gottlieb.ca</td>
                            <td>01:06AM</td>
                            <td>215-593-5846</td>
                            <td>South Mariane</td>
                            <td><span className="label status-label btn btn-lined btn-grey btn-small">Open</span></td>
                            </tr>
                            <tr>
                            <td className="text-dark">Minerva Massey</td>
                            <td>heather_keeling@gottlieb.ca</td>
                            <td>01:06AM</td>
                            <td>215-593-5846</td>
                            <td>South Mariane</td>
                            <td><span className="label status-label btn btn-lined btn-grey btn-small">Open</span></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </section>
                </div>
                <footer className="section-footer flex-container flex-content-between flex-items-center">
                    <p className="section-data-view text-grey">Showing <span className="text-dark">1</span> to <span className="text-dark">20</span> of 25 elements</p>
                    <div className="section-pagination text-grey flex-container flex-content-end flex-items-center">Page <span className="label btn btn-solid btn-primary btn-small m-r-1 m-l-1">1</span> ... <button className="btn btn-lined btn-grey btn-small m-r-1 m-l-1">10</button></div>
                </footer>
            </main>

        );
    }
}

export default PageDashboard;