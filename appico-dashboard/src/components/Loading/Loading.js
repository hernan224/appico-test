import React, {useEffect, useRef} from 'react';

import loading from './Loading.module.css';

const Loading = (props) => {
    const loaidngRef = useRef();

    // Set loading color
    useEffect(() => {
        if (props.color) {
            loaidngRef.current.style.setProperty("--loading-color", props.color);
        }
    }, [props.color]);

    return (
        <div className={loading.ldsContainer}>
            <div className={loading.ldsGrid} ref={loaidngRef}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;