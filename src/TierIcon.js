import React from "react";
import styles from "./TierIcon.module.css";

export default function TierIcon({setTier, tier, isSelected}){
    function onTierClick(){
        console.log("boop");
        setTier(tier);
    }

    return (
        <div onClick={onTierClick} className={styles.main}>
            <p>{tier}</p>
            <img src="tier_icon.png" alt="Tier Icon"/>
        </div>
    )
}