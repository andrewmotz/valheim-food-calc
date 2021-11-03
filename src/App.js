// import './App.css';
import FoodItem from "./FoodItem";
import FoodList from "./FoodList";


function App() {
  let jsonFile = require("./FoodItems.json");
  
  // Temporary
  console.log(jsonFile)
  // const asArray = Object.values(jsonFile)
  console.log(FoodItem(jsonFile, "Flour"));
  // Temp

  return (
    <>
      <h1> Valheim Food Calculator </h1>
      {/* { FoodItem(jsonFile, "Blueberries") } */}
      { FoodList(jsonFile, 2, "None") }
    </>
  );
}

export default App;
