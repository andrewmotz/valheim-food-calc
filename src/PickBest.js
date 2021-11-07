import React from "react";
import sortJSONtoArray from "./FoodSorter.js";

export default function PickBest({pickBestFoodItems, parameters}){
    let sortPref = parameters[1];
    let jsonArray = sortJSONtoArray(sortPref);


    function onPickBestClick(){
        pickBestFoodItems(jsonArray[0],jsonArray[1],jsonArray[2])
    }

    return (
            <div onClick={onPickBestClick}>Pick for Me</div>
    )
    
}

