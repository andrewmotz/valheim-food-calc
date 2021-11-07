import React, { useState } from "react";
import TierIcon from "./TierIcon";
import styles from "./TierSelector.module.css";


export default function TierSelector({setTier, currentTier}){
    const [selectedTiers, setSelectedTier] = useState([true, false, false, false]);

    function onTierSelect(tier){
        let newSlectedTiers = [false, false, false, false];
        newSlectedTiers[tier-1] = true;
        setSelectedTier(newSlectedTiers);
    }

    return (
        <div className={styles.container}>
            <TierIcon setTier={setTier} onTierSelect={onTierSelect} tier={1} isSelected={selectedTiers[0]}/>
            <TierIcon setTier={setTier} onTierSelect={onTierSelect} tier={2} isSelected={selectedTiers[1]}/>
            <TierIcon setTier={setTier} onTierSelect={onTierSelect} tier={3} isSelected={selectedTiers[2]}/>
            <TierIcon setTier={setTier} onTierSelect={onTierSelect} tier={4} isSelected={selectedTiers[3]}/>
        </div>
    )
}