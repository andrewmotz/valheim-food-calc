import React, { useState, useRef, useEffect } from "react";
import styles from "./SortPrefernceList.module.css";

export default function SortPreference({sortSelection}){
    const dropDownRef = useRef(null);
    const [isActive, setActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Health");

    //Code that looks if the user clicked out of the dropdwon and closes it if true
    useEffect(()=>{
        //code that runs once the page is clicked
        const pageClickEvent = (e) =>{
            //If not click on the dropdown, toggled the isActive state
            if(dropDownRef.current != null && !dropDownRef.current.contains(e.target)){
                setActive(!isActive);
            }
        }
        //Add event listener once dropdown is clicked
        if(isActive){
            window.addEventListener('click', pageClickEvent);
        }
        //Remove the event listener when the dropdown is closed
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive])

    //Toggles the dropdown
    function dropDownPressed(){
        setActive(!isActive);
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
        <div ref={dropDownRef} className={styles.DropDownContainer}>
            <div onClick={dropDownPressed}>
                { selectedSort }
            </div>

            {isActive && //runs if active is true
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