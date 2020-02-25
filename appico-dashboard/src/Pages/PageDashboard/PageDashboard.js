import React, { Component } from 'react';

class PageDashboard extends Component {
    render() {
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
                            <div className="bar-chart m-t-2">
                            <div className="chart-item">
                                <span className="bar" style={{height: '60%'}} />
                                <span className="fs-7 text-grey-light m-t-1">a</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '35%'}} />
                                <span className="fs-7 text-grey-light m-t-1">b</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '80%'}} />
                                <span className="fs-7 text-grey-light m-t-1">c</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '100%'}} />
                                <span className="fs-7 text-grey-light m-t-1">d</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '23%'}} />
                                <span className="fs-7 text-grey-light m-t-1">e</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '37%'}} />
                                <span className="fs-7 text-grey-light m-t-1">f</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '59%'}} />
                                <span className="fs-7 text-grey-light m-t-1">g</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '25%'}} />
                                <span className="fs-7 text-grey-light m-t-1">h</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '93%'}} />
                                <span className="fs-7 text-grey-light m-t-1">i</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '81%'}} />
                                <span className="fs-7 text-grey-light m-t-1">j</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '15%'}} />
                                <span className="fs-7 text-grey-light m-t-1">k</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '75%'}} />
                                <span className="fs-7 text-grey-light m-t-1">l</span>
                            </div>
                            </div>
                        </div>
                        <div className="one-third donut-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">9401</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <div className="donut-chart">
                            <svg viewBox="0 0 40 40" className="donut">
                                <circle className="donut-ring" cx={20} cy={20} r="15.91549430918954" />
                                <circle className="donut-segment" cx={20} cy={20} r="15.91549430918954" />
                            </svg>
                            </div>
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
                            <div className="bar-chart m-t-2">
                            <div className="chart-item">
                                <span className="bar" style={{height: '60%'}} />
                                <span className="fs-7 text-grey-light m-t-1">a</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '35%'}} />
                                <span className="fs-7 text-grey-light m-t-1">b</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '80%'}} />
                                <span className="fs-7 text-grey-light m-t-1">c</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '100%'}} />
                                <span className="fs-7 text-grey-light m-t-1">d</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '23%'}} />
                                <span className="fs-7 text-grey-light m-t-1">e</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '37%'}} />
                                <span className="fs-7 text-grey-light m-t-1">f</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '59%'}} />
                                <span className="fs-7 text-grey-light m-t-1">g</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '25%'}} />
                                <span className="fs-7 text-grey-light m-t-1">h</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '93%'}} />
                                <span className="fs-7 text-grey-light m-t-1">i</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '81%'}} />
                                <span className="fs-7 text-grey-light m-t-1">j</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '15%'}} />
                                <span className="fs-7 text-grey-light m-t-1">k</span>
                            </div>
                            <div className="chart-item">
                                <span className="bar" style={{height: '75%'}} />
                                <span className="fs-7 text-grey-light m-t-1">l</span>
                            </div>
                            </div>
                        </div>
                        <div className="one-third donut-chart-container">
                            <p className="chart-general-info">
                            <span className="h4">3900</span> <span className="text-grey fs-7">Followers</span>
                            </p>
                            <div className="donut-chart">
                            <svg viewBox="0 0 40 40" className="donut">
                                <circle className="donut-ring" cx={20} cy={20} r="15.91549430918954" />
                                <circle className="donut-segment" cx={20} cy={20} r="15.91549430918954" />
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex-content one-fifth p-a-5">
                        <ul className="terms-list fs-7 fw-semibold text-center">
                        <li className="p-t-2 p-b-2">
                            <span className="text-grey text-uppercase m-r-3">Term 1</span>
                            <span className="m-l-3">85.08</span>
                        </li>
                        <li className="p-t-2 p-b-2">
                            <span className="text-grey text-uppercase m-r-3">Term 2</span>
                            <span className="m-l-3">1.76</span>
                        </li>
                        <li className="p-t-2 p-b-2">
                            <span className="text-grey text-uppercase m-r-3">Term 3</span>
                            <span className="m-l-3">33.42</span>
                        </li>
                        <li className="p-t-2 p-b-2">
                            <span className="text-grey text-uppercase m-r-3">Term 4</span>
                            <span className="m-l-3">75.11</span>
                        </li>
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