import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import chart from './BarsChart.module.css';

const BarsChart = props => {
    const chartRef = useRef();

    const chartClasses = `${chart.barChart} ${props.classname}`;

    let chartContent = <p className="fs-5 text-grey text-center">Sin datos disponibles</p>;
    // Check for data
    if (props.data) {
        chartContent = [];
        // Create bars for chart
        for (let key in props.data) {
            const index = Math.floor(Math.random() * 1000000);

            let percentage = props.data[key] * 100;
            if (props.data[key] <= 0) percentage = 0;
            if (props.data[key] >= 1) percentage = 100;

            chartContent.push((
                <div className={chart.chartItem} key={index}>
                    <span className={chart.bar} style={{height: `${percentage}%`}} />
                    <span className="fs-7 text-grey-light m-t-1">{key.charAt(0)}</span>
                </div>
            ));
        }
    }

    // Set chart color
    useEffect(() => {
        if (props.color) {
            chartRef.current.style.setProperty("--chart-color", props.color);
        }
    }, [props.color]);

    return  <div className={chartClasses} ref={chartRef}> {chartContent} </div>;
};

BarsChart.propTypes = {
    classname: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.objectOf(PropTypes.number)
    /* Number in data must be between 0 and 1 */
};

export default BarsChart;