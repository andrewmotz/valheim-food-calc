import React from "react";
import ProgressBar  from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./StatBar.module.css";


export default function StatBar({color,statValue,maxStatSum,min}){
    let classColor = styles.progressBarRed;
    let statTextColor = styles.statTextRed;

    // Sets the CSS class for the stat bars and text depending on the color
    if(color === "Yellow"){
        classColor = styles.progressBarYellow;
        statTextColor = styles.statTextYellow;
    }

    return (
        <div className={styles.barStyles}>
            <div className={styles.barContainer}>
                <ProgressBar className={classColor} now={min + statValue} max={maxStatSum + min} min={0}/>
            </div>
            <div className={statTextColor}>
                { min + statValue }
            </div>
        </div>
        
    )
}