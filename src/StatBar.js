import React from "react";
import ProgressBar  from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./StatBar.module.css";


export default function StatBar({color,statValue,maxStatSum,min}){

    let classColor = styles.progressBarRed;

    if(color === "Yellow"){
        console.log("yellow");
        classColor = styles.progressBarYellow;
    }
    
    return (
        <div className={styles.barStyles}>
            <ProgressBar className={classColor} now={min + statValue} max={maxStatSum + min} min={min}/>
            <div>
                { min + statValue}
            </div>
        </div>
        
    )
}