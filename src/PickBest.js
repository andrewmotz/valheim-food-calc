import React from "react";
import sortJSONtoArray from "./FoodSorter.js";

export default function PickBest({pickBestFoodItems, parameters}){
    let jsonArray = sortJSONtoArray(parameters[1], parameters[0]);


    function onPickBestClick(){
        pickBestFoodItems(jsonArray[0],jsonArray[1],jsonArray[2])
    }

    return (
        <>
            <div onClick={onPickBestClick}>Pick for Me</div>
        </>
    )
    
}

