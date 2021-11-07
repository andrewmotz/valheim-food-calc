import React, {useState} from "react";
import FoodList from "./FoodList";
import PickBest from "./PickBest";
import SelectedFood from "./SelectedFood";
import SortPreference from "./SortPreference";
import StatBar from "./StatBar";


function App() {
  let jsonFile = require("./FoodItems.json");

  //Reacts fancy state usage, kinda black magic to me but needed in order for stuff to update on page
  const [selectedItems, setSelectedItems] = useState([]); //Can set the default selected items, current set to nothing
  const [parameters, setParameters] = useState([4, "HP"]); // Default sort tier, default sorting preference
  const [totalStats, setStats] = useState([50,75]);
  
  //Called when a item is clicked on in the food list
  function addFoodItemClickHandler(foodobject){
    console.log(selectedItems);
    console.log("boop");
    if(selectedItems.length < 3 && !selectedItems.includes(foodobject)){
      setSelectedItems([...selectedItems,foodobject]);
    }
  }

  function pickBestFoodItems(food1, food2, food3){
    setSelectedItems([food1, food2, food3]);
  }

  //Called when items are clicked on in the selected items list
  function removeFoodItemClickHandler(foodobject){
    let index = 0;
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

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      <div>
        <StatBar color="RED" statValue={50} maxStatSum={100} min={75}/>
        <StatBar color="Yellow" statValue={50} maxStatSum={100} min={75}/>
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
