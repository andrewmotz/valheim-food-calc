import React from "react";
import styles from './FoodIcon.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
// import StyledProgressbar from "./StyledProgressar";

const HEALTHSTYLES = {
    background: {
      fill: "#3e98c7"
    },
    text: {
      fill: "#FF0"
    },
    path: {
      stroke: "#FF0000",
      strokeLinecap: "BUTT"
    },
    trail: { stroke: "transparent" }
  }

  const STAMINASTLYES = {
    background: {
      fill: "#3e98c7"
    },
    text: {
      fill: "#FF0"
    },
    path: {
      stroke: "#EBFF19",
      strokeLinecap: 'butt'
    },
    trail: { stroke: "transparent" }
  }


export default function FoodItem(jsonData, itemName){
    console.log(jsonData);

    //Gets the object from the JSON file based off the name
    let foodObject = jsonData[itemName];
    
    return (
        <div className={styles.foodIcon}>
            <p className= {styles.itemName}>{foodObject.Name}</p>
            <div className={styles.progressBars}>
                <CircularProgressbar value = {foodObject.HP} maxValue={100} minValue={0} 
                    counterClockwise={true} circleRatio={.5} styles={HEALTHSTYLES}/>
                {/* <StyledProgressbar value = {5} maxValue={100} minValue={0} counterClockwise={true} circleRatio={.5}/> */}
                <CircularProgressbar value = {foodObject.STAM} maxValue={50} circleRatio={.5} styles= {STAMINASTLYES}/>
            </div>
            <img src={foodObject.FileName} alt= {foodObject.Name}/>
            <div className = {styles.stats}>
                <p className={styles.health}>{foodObject.HP}</p>
                <p className={styles.healthStamina}>{foodObject.HP + foodObject.STAM} </p>
                <p className={styles.stamina}>{foodObject.STAM}</p>
            </div>
        </div>
    )
}