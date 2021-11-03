import React from "react";
import styles from './FoodList.module.css';
import FoodItem from "./FoodItem";

export default function FoodList(jsonData, parameters, foodItemClickHandler){
    let jsonArray = Object.values(jsonData);
    let largestHP = 0;
    let largestSTAM = 0;
    let tier = parameters[0];
    let sortOrder = parameters[1];
    let outputArray = [];

    //Loop through the json creating a new array that will be outputed and find largest HP/STAM values
    for(let i = 0; i < jsonArray.length; i++){
        //Populate food list by selected tier or lower
        if(jsonArray[i].Tier <= tier)
            outputArray.push(jsonArray[i]);

        //Find the largest HP and Stamina values to set the hp/stam bars limit
        if(jsonArray[i].HP > largestHP)
            largestHP = jsonArray[i].HP;

        if(jsonArray[i].STAM > largestSTAM)
            largestSTAM = jsonArray[i].STAM;
    }

    // console.log("HP : " + largestHP + " STMA: " + largestSTAM);


    //Sort the Array
    if (sortOrder === "HP")
        outputArray.sort(HPcompare);
    else if (sortOrder === "STAM")
        outputArray.sort(STAMcompare);
    else if (sortOrder === "SUM")
        outputArray.sort(SUMcompare);
    else if (sortOrder === "NAME")
        outputArray.sort(NAMEcompare);

    
    //Return the data from the output array
    return (
        <div className={styles.listStyle}>
        {outputArray.map(foodItem => {
            return FoodItem(foodItem, largestHP, largestSTAM, foodItemClickHandler);
        })}
        </div>
    )
}

//====================Methods===========================
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
    let bSum = b.HP + b.STAM;

    if(aSum < bSum)
        return 1;
    if(aSum > bSum)
        return -1;
    return 0;
}

//Sort by Name
function NAMEcompare(a, b){
    if(a.Name < b.Name)
        return -1;
    if(a.Name > b.Name)
        return 1;
    return 0;
}


//Returns all the possible methods that a object has, used for Andrews debugging
// function getAllMethods(obj) {
//     return Object.keys(obj)
//         .filter((key) => typeof obj[key] === 'function')
//         .map((key) => obj[key]);
// }