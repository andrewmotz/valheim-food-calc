import React, {useState} from "react";
import FoodList from "./FoodList";
import SelectedFood from "./SelectedFood";
import SortPreference from "./SortPreference";


function App() {
  let jsonFile = require("./FoodItems.json");

  //Reacts fancy state usage, kinda black magic to me but needed in order for stuff to update on page
  const [selectedItems, setSelectedItems] = useState([]);
  const [parameters, setParameters] = useState([4, "HP"]); // To be implemented
  
  //Called when a item is clicked on in the food list
  function addFoodItemClickHandler(foodobject){
    console.log(selectedItems);
    console.log("boop");
    if(selectedItems.length < 3 && !selectedItems.includes(foodobject)){
      setSelectedItems([...selectedItems,foodobject]);
    }
  }

  function pickBestFoodItems(){
    
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

  function sortSelection(newSortPref){
    let newParameters = [...parameters];
    newParameters[1] = newSortPref;
    setParameters(newParameters);
  }

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      <SelectedFood selectedItems={selectedItems} removeFoodItemClickHandler={removeFoodItemClickHandler} jsonFile={jsonFile}/>
      <div>
        <SortPreference sortSelection={sortSelection}/>
      </div>
      { FoodList(jsonFile, parameters, addFoodItemClickHandler) }
    </>
  );
}

export default App;
