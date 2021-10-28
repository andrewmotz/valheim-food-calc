// import './App.css';
import FoodItem from "./FoodItem";


function App() {
  // Temp
  let jsonFile = require("./FoodItems.json")
  console.log(jsonFile)
  // const asArray = Object.values(jsonFile)
  console.log(FoodItem(jsonFile, "Flour"));
  // Temp

  return (
    <>
      <h1> Hello world </h1>
      { FoodItem(jsonFile, "Blueberries") }
    </>
  );
}

export default App;
