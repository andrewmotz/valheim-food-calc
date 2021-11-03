import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList(jsonData, tier, sortOrder){
    let jsonArray = Object.values(jsonData);
    console.log("Food list");

    console.log(getAllMethods(jsonData));
    console.log();
    
    return (
        jsonArray.map(foodItem => {
            return FoodItem(jsonData, foodItem);
        })
    )
}


//Returns all the possible methods that a object has
function getAllMethods(obj) {
    return Object.keys(obj)
        .filter((key) => typeof obj[key] === 'function')
        .map((key) => obj[key]);
}