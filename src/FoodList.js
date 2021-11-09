import React from "react";
import styles from './FoodList.module.css';
import FoodItem from "./FoodItem";
import sortJSONtoArray from "./FoodSorter.js";

export default function FoodList(jsonData, parameters, foodItemClickHandler){
    let jsonArray = Object.values(jsonData);
    let largestHP = 0;
    let largestSTAM = 0;
    
    //Create a sorted array based off set sort parameter
    let outputArray = sortJSONtoArray(parameters[1], parameters[0]);

    //Loop through the json to find largest HP/STAM values
    for(let i = 0; i < jsonArray.length; i++){
        //Find the largest HP and Stamina values to set the hp/stam bars limit
        if(jsonArray[i].HP > largestHP)
            largestHP = jsonArray[i].HP;

        if(jsonArray[i].STAM > largestSTAM)
            largestSTAM = jsonArray[i].STAM;
    }

    //Return the data from the output array
    return (
        <div className={styles.listStyle}>
        {outputArray.map(foodItem => {
            return FoodItem(foodItem, largestHP, largestSTAM, foodItemClickHandler);
        })}
        </div>
    )
}

//Returns all the possible methods that a object has, used for Andrews debugging
// function getAllMethods(obj) {
//     return Object.keys(obj)
//         .filter((key) => typeof obj[key] === 'function')
//         .map((key) => obj[key]);
// }