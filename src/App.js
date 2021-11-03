// import './App.css';
import React, {useState} from "react";
import FoodList from "./FoodList";
import SelectedFood from "./SelectedFood";


function App() {
  let jsonFile = require("./FoodItems.json");

  const [selectedItems, setSelectedItems] = useState([]);
  const [parameters, setParameters] = useState([4, "NONE"]); // To be implemented
  
  function addFoodItemClickHandler(foodobject){
    console.log(selectedItems);
    console.log("boop");
    if(selectedItems.length < 3 && !selectedItems.includes(foodobject)){
      setSelectedItems([...selectedItems,foodobject]);
    }
  }

  function removeFoodItemClickHandler(foodobject){
    let index = 0;
    // let tempFoodItem = null;
    for(let i = 0; i < selectedItems.length; i++){
      if(selectedItems[i] === foodobject)
        index = i;
    }
    selectedItems[index] = selectedItems[selectedItems.length - 1];
    selectedItems.pop();
    console.log(selectedItems);
    setSelectedItems([...selectedItems]);
  }

  // Temporary
  // console.log(jsonFile)
  // const asArray = Object.values(jsonFile)
  // console.log(FoodItem(jsonFile, "Flour"));
  // Temp

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      <SelectedFood selectedItems={selectedItems} removeFoodItemClickHandler={removeFoodItemClickHandler} jsonFile={jsonFile}/>
      { FoodList(jsonFile, parameters, addFoodItemClickHandler) }
    </>
  );
}

export default App;
