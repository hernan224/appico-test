import React from 'react';
import PropTypes from 'prop-types';

import DonutChart from '../../../components/Charts/DonutChart/DonutChart';
import BarsChart from '../../../components/Charts/BarsChart/BarsChart';

const DashboardChartsSection = props => {
    const componentClasses = `statics-chart-container flex-container ${props.classname ? props.classname : ''}`;

    return (
        <div className={componentClasses}>
            <div className="two-third p-r-5 bar-chart-container">
                <p className="chart-general-info">
                <span className="h4">{props.totalvalue}</span> <span className="text-grey fs-7">Followers</span>
                </p>
                <BarsChart classname="m-t-2" data={props.barschartvalue} color={props.chartscolor}/>
            </div>
            <div className="one-third donut-chart-container">
                <p className="chart-general-info">
                <span className="h4">{props.totalvalue}</span> <span className="text-grey fs-7">Followers</span>
                </p>
                <DonutChart value={props.donutchartvalue} color={props.chartscolor} />
            </div>
        </div>
    );
};

DashboardChartsSection.propTypes = {
    classname: PropTypes.string,
    totalvalue: PropTypes.number,
    donutchartvalue: PropTypes.number,
    barschartvalue: PropTypes.object,
    chartscolor: PropTypes.string
};

export default DashboardChartsSection;