import React from "react";
import FoodItem from "./FoodItem";
import styles from "./SelectedFood.module.css";

export default function SelectedFood({selectedItems, removeFoodItemClickHandler, jsonFile}){
    let jsonArray = Object.values(jsonFile);
    let largestHP = 0;
    let largestSTAM = 0;

    for(let i = 0; i < jsonArray.length; i++){
        //Find the largest HP and Stamina values to set the hp/stam bars limit
        if(jsonArray[i].HP > largestHP)
            largestHP = jsonArray[i].HP;

        if(jsonArray[i].STAM > largestSTAM)
            largestSTAM = jsonArray[i].STAM;
    }

    return (
        <>
        <div className={styles.main}>
            {selectedItems.map(foodItem => {
                return FoodItem(foodItem, largestHP, largestSTAM, removeFoodItemClickHandler);
            })}
        </div>
        </>
    )
}