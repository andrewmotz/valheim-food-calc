import React from "react";
import styles from './FoodIcon.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';

//style object for the health bar
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

  //style object for the stamina bar
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


export default function FoodItem(foodObject, largestHP, largestSTAM){
    
    return (
        <div className={styles.foodIconContainer}>
            <p className= {styles.itemNameCSS}>{foodObject.Name}</p>

            <div className={styles.foodIcon}>
              {/* Div for the progress bars */}
                <div className={styles.progressBars}>
                    <CircularProgressbar value = {foodObject.HP} maxValue={largestHP} 
                        counterClockwise={true} circleRatio={.5} styles={HEALTHSTYLES} strokeWidth={5}/>
                    <CircularProgressbar value = {foodObject.STAM} maxValue={largestSTAM} 
                        circleRatio={.5} styles= {STAMINASTLYES} strokeWidth={5}/>
                </div>

                <img src={foodObject.FileName} alt= {foodObject.Name}/>

                {/* HP, SUM, and Stamina Numbers */}
                <div className = {styles.stats}>
                    <p className={styles.health}>{foodObject.HP}</p>
                    <p className={styles.healthStamina}>{foodObject.HP + foodObject.STAM} </p>
                    <p className={styles.stamina}>{foodObject.STAM}</p>
                </div>
            </div>
        </div>
    )
}