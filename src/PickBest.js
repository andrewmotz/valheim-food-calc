import React from "react";
import sortJSONtoArray from "./FoodSorter.js";
import styles from "./PickBest.module.css";

export default function PickBest({pickBestFoodItems, parameters}){
    let jsonArray = sortJSONtoArray(parameters[1], parameters[0]);

    //"Pick for me" button click handler
    function onPickBestClick(){
        pickBestFoodItems(jsonArray[0],jsonArray[1],jsonArray[2])
    }

    return (
        <>
            <div className={styles.buttonText} onClick={onPickBestClick}>Pick for Me</div>
        </>
    )
    
}

