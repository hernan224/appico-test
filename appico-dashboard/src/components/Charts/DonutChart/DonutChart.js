import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import donut from './DonutChart.module.css';

const DonutChart = (props) => {
    const chartRef = useRef();
    // Change chart percentage
    useEffect(() => {
        let chartPercentage = props.value * 100;
        if (props.value >= 1) chartPercentage = 100;
        if (props.value <= 0) chartPercentage = 0;
        chartRef.current.style.setProperty("--percentage-on", chartPercentage);
        chartRef.current.style.setProperty("--percentage-off", (100 - chartPercentage));

    }, [props.value]);

    // Set chart color
    useEffect(() => {
        if (props.color) {
            chartRef.current.style.setProperty("--chart-color", props.color);
        }
    }, [props.color]);

    return (
        <div className={donut.donutChart} ref={chartRef}>
            <svg viewBox="0 0 40 40" className={donut.donut}>
                <circle className={donut.donutRing} cx={20} cy={20} r="15.91549430918954" />
                <circle className={donut.donutSegment} cx={20} cy={20} r="15.91549430918954" />
            </svg>
        </div>
    );
};

DonutChart.propTypes = {
    value: PropTypes.number.isRequired,
    /* Value must be between 0 and 1 */
    color: PropTypes.string
}

export default DonutChart;