import React from "react";
import styles from './FoodList.module.css';
import FoodItem from "./FoodItem";

export default function FoodList(jsonData, tier, sortOrder){
    let jsonArray = Object.values(jsonData);
    console.log("Food list");

    //Populate food list by selected tier or lower
    let outputArray = [];
    for(let i = 0; i < jsonArray.length; i++){
        if(jsonArray[i].Tier <= tier)
            outputArray.push(jsonArray[i]);
    }

    //Sort the Array
    if (sortOrder === "HP")
        outputArray.sort(HPcompare)
    else if (sortOrder === "STAM")
        outputArray.sort(STAMcompare)
    else if (sortOrder === "SUM")
        outputArray.sort(SUMcompare)
    
    //Return the data from the output array
    return (
        <div className={styles.listStyle}>
        {outputArray.map(foodItem => {
            return FoodItem(foodItem);
        })}
        </div>
    )
}

//Sort by HP
function HPcompare(a, b){
    if(a.HP < b.HP)
        return 1;
    if(a.HP > b.HP)
        return -1;
    return 0;
}

//Sort by Stamina
function STAMcompare(a, b){
    if(a.STAM < b.STAM)
        return 1;
    if(a.STAM > b.STAM)
        return -1;
    return 0;
}

//Sort by HP + Stamina
function SUMcompare(a, b){
    let aSum = a.HP + a.STAM;
    let bSum = a.HP + b.STAM;

    if(aSum < bSum)
        return 1;
    if(aSum > bSum)
        return -1;
    return 0;
}


//Returns all the possible methods that a object has, used for Andrews debugging
function getAllMethods(obj) {
    return Object.keys(obj)
        .filter((key) => typeof obj[key] === 'function')
        .map((key) => obj[key]);
}