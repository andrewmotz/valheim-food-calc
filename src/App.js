import React, {useState} from "react";
import FoodList from "./FoodList";
import PickBest from "./PickBest";
import SelectedFood from "./SelectedFood";
import SortPreference from "./SortPreference";
import StatBar from "./StatBar";
import sortJSONtoArray from "./FoodSorter.js";


function App() {
  let jsonFile = require("./FoodItems.json");

  //Reacts fancy state usage, kinda black magic to me but needed in order for stuff to update on page
  const [selectedItems, setSelectedItems] = useState([]); //Can set the default selected items, current set to nothing
  const [parameters, setParameters] = useState([4, "HP"]); // Default sort tier, default sorting preference
  const [totalStats, setStats] = useState([0,0]);
  
  //Called when a item is clicked on in the food list
  function addFoodItemClickHandler(foodobject){
    updateTotalStats('+',foodobject);
    if(selectedItems.length < 3 && !selectedItems.includes(foodobject)){
      setSelectedItems([...selectedItems,foodobject]);
    }
  }

  function pickBestFoodItems(food1, food2, food3){
    addThreeToStats(food1, food2, food3);
    setSelectedItems([food1, food2, food3]);
  }

  //Called when items are clicked on in the selected items list
  function removeFoodItemClickHandler(foodobject){
    let index = 0;
    updateTotalStats('-',foodobject);
    // let tempFoodItem = null;
    for(let i = 0; i < selectedItems.length; i++){
      if(selectedItems[i] === foodobject)
        index = i;
    }
    selectedItems[index] = selectedItems[selectedItems.length - 1]; // TODO FIX
    selectedItems.pop();
    console.log(selectedItems);
    setSelectedItems([...selectedItems]);
  }

  //Called by the dropdown list to set the new sorting preference
  function sortSelection(newSortPref){
    let newParameters = [...parameters];
    newParameters[1] = newSortPref;
    setParameters(newParameters);
  }

  //Used to update the totalStats
  function updateTotalStats(addOrSub, foodObject){
    let newTotalStats = [...totalStats];
    if(addOrSub === '+'){
      newTotalStats[0] += foodObject.HP;
      newTotalStats[1] += foodObject.STAM;
    } 
    else {
      newTotalStats[0] -= foodObject.HP;
      newTotalStats[1] -= foodObject.STAM;
    }
    setStats(newTotalStats);
  }
  function addThreeToStats(food1, food2, food3){
    let newTotalStats = [0,0];
    newTotalStats[0] += food1.HP;
    newTotalStats[1] += food1.STAM;
    newTotalStats[0] += food2.HP;
    newTotalStats[1] += food2.STAM;
    newTotalStats[0] += food3.HP;
    newTotalStats[1] += food3.STAM;
    setStats(newTotalStats);
  }

  //Find the largest possible value for health and stamina for the bars
  let maxTotalHP = 0;
  let maxTotalSTAM = 0;
  let jsonArrayHP = sortJSONtoArray("HP");
  let jsonArraySTAM = sortJSONtoArray("STAM");

  maxTotalHP = jsonArrayHP[0].HP + jsonArrayHP[1].HP + jsonArrayHP[2].HP;
  maxTotalSTAM = jsonArraySTAM[0].STAM + jsonArraySTAM[1].STAM  + jsonArraySTAM[2].STAM ;

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      <div>
        <StatBar color="RED" statValue={totalStats[0]} maxStatSum={maxTotalHP} min={50}/>
        <StatBar color="Yellow" statValue={totalStats[1]} maxStatSum={maxTotalSTAM} min={75}/>
        {/* <progress value="50" max="200"/> */}
      </div>
      <SelectedFood selectedItems={selectedItems} removeFoodItemClickHandler={removeFoodItemClickHandler} jsonFile={jsonFile}/>
      <div>
        <SortPreference sortSelection={sortSelection}/>
        <PickBest pickBestFoodItems={pickBestFoodItems} parameters={parameters} />
      </div>
      { FoodList(jsonFile, parameters, addFoodItemClickHandler) }
    </>
  );
}

export default App;