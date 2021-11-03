import React, {useState} from "react";
import FoodList from "./FoodList";
import SelectedFood from "./SelectedFood";


function App() {
  let jsonFile = require("./FoodItems.json");

  //Reacts fancy state usage, kinda black magic to me but needed in order for stuff to update on page
  const [selectedItems, setSelectedItems] = useState([]);
  const [parameters, setParameters] = useState([4, "NONE"]); // To be implemented
  
  //Called when a item is clicked on in the food list
  function addFoodItemClickHandler(foodobject){
    console.log(selectedItems);
    console.log("boop");
    if(selectedItems.length < 3 && !selectedItems.includes(foodobject)){
      setSelectedItems([...selectedItems,foodobject]);
    }
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

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      <SelectedFood selectedItems={selectedItems} removeFoodItemClickHandler={removeFoodItemClickHandler} jsonFile={jsonFile}/>
      { FoodList(jsonFile, parameters, addFoodItemClickHandler) }
    </>
  );
}

export default App;
