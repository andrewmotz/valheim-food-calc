import React, { useState } from "react";
import TierIcon from "./TierIcon";
import styles from "./TierSelector.module.css";


export default function TierSelector({setTier}){
    const [selectedTiers, setSelectedTier] = useState([true, false, false, false]);
    
    return (
        <div className={styles.container}>
            <TierIcon setTier={setTier} tier={1} isSelected={true}/>
            <TierIcon setTier={setTier} tier={2} isSelected={false}/>
            <TierIcon setTier={setTier} tier={3} isSelected={false}/>
            <TierIcon setTier={setTier} tier={4} isSelected={false}/>
        </div>
    )
}