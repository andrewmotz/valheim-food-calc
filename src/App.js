// import './App.css';
import FoodItem from "./FoodItem";


function App() {
  let jsonFile = require("./FoodItems.json");
  
  // Temporary
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
