import React, { useState, useRef } from "react";
import styles from "./SortPrefernceList.module.css";

export default function SortPreference({sortSelection}){
    const dropDownRef = useRef(null);
    const [active, setActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Health");

    //Toggles the dropdown
    function dropDownPressed(){
        setActive(!active);
        console.log("boop");
    }

    //Set prefernce to heatlh
    function setSortHealth(){
        sortSelection("HP");
        setSelectedSort("Health");
    }
    //Set prefernce to Stamina
    function setSortStamina(){
        sortSelection("STAM");
        setSelectedSort("Stamina");
    }
    //Set prefernce to HP+STAM
    function setSortSUM(){
        sortSelection("SUM");
        setSelectedSort("HP+STAM");
    }
    //Set prefernce to Alphabetical
    function setSortName(){
        sortSelection("NAME");
        setSelectedSort("Name");
    }

    return (
        <div ref={dropDownRef} className="DropDownContainer">
            <div onClick={dropDownPressed}>
                { selectedSort }
            </div>

            {active && //runs if active is true
                <ul className={styles.listItems}>
                    <li onClick={setSortHealth}>Health</li>
                    <li onClick={setSortStamina}>Stamina</li>
                    <li onClick={setSortSUM}>HP+STAM</li>
                    <li onClick={setSortName}>A-&gt;Z</li>
                </ul>
            }
        </div>
    )
}