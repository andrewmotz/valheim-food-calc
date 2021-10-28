import React from "react";
import styles from './FoodIcon.module.css';


export default function FoodItem(jsonData, itemName){
    console.log(jsonData);

    //Gets the object from the JSON file based off the name
    let foodObject = jsonData[itemName];
    
    return (
        <div className={styles.foodIcon}>
            <p className= {styles.itemName}>{foodObject.Name}</p>
            <img src={foodObject.FileName} alt= {foodObject.Name}/>
            <div className = {styles.stats}>
                <p className={styles.health}>{foodObject.HP}</p>
                <p className={styles.healthStamina}>{foodObject.HP + foodObject.STAM} </p>
                <p className={styles.stamina}>{foodObject.STAM}</p>
            </div>
        </div>
    )
}