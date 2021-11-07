import React from "react";
import styles from "./TierIcon.module.css";

export default function TierIcon({setTier, onTierSelect, tier, isSelected}){
    let imgClass = isSelected? "visible" : "invisible";

    function onTierClick(){
        console.log("boop");
        setTier(tier);
        onTierSelect(tier);
    }

    return (
        <div onClick={onTierClick} className={styles.main}>
            <p>{tier}</p>
            <img className={imgClass} src="tier_icon.png" alt="Tier Icon"/>
        </div>
    )
}