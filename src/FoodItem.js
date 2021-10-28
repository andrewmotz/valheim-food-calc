import React from "react";
import styles from './FoodIcon.module.css';


export default function FoodItem(jsonData, itemName){
    console.log(jsonData);

    let foodObject = jsonData[itemName];
    
    return (
        <div className={styles.foodIcon}>
            <p>Name: {foodObject.Name}</p>
            <img src={foodObject.FileName} alt= {foodObject.Name}/>
            <p>Health: {foodObject.HP}</p>
            <p>Sum: { foodObject.HP + foodObject.STAM} </p>
            <p>Stamina: {foodObject.STAM}</p>
        </div>
    )
}