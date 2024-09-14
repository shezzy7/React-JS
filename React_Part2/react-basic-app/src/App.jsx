import "./App.css";
import Object from "./Object.jsx";
import Array from "./Array.jsx";
import Conditional from "./Conditional.jsx";
import DynamicComStyling from "./DynamicComStyling.jsx";
import Activity1 from "./Activity1.jsx";

// // import Title from "./Title.jsx";
function App(){
  let obj2 = {title : "McLaren" , price : 100000};
  let arr1 = [<li>"Hi-tech"</li>,<li>"Dureable"</li>,<li>"Fast"</li>];
  let arr2 = ["shezzy","goodo","Iman"];
  return (
  <div>

    <h1>helloe</h1>
    {/* <Object obj = {{title:"Ferrari" , price : 5000}} /> we can pass objects to our props like this directly  */}
     {/* we can also pass object already created into our props by their name in this way */}
    <Object  obj2 = {obj2} obj3 = {{title : "Ferrari" , price : 200000}}/>
    {/* Rendering array */}
    <Array arr1 = {arr1} />
    {/* Rendering array using map function */}
    {/* In this method we pass simple array without converting its items to list items and convert them in lists in file which will accept it */}
    <Array arr1 = {arr2}/>

    {/* conditional staements */}
    <div >
      <h1>Conditions</h1>
        <Conditional title = "Phone" price = {1200000} />
        <Conditional title = "Laptop" price = {50000} />
        <Conditional title = "Pen" price = {60} />
    </div>
    <div>
      <h2>Dynamic Styling Component</h2>
      <DynamicComStyling title = "Car" price={1500000} />
      <DynamicComStyling title = "Bike" price={75000} />
      <DynamicComStyling title = "VagonR" price={575000} />
    </div>

    <div>
      <h1>Activity 1</h1>
      <Activity1 userName="Shezzy" textColor="orange"/>
      <Activity1 userName="Goodo" textColor="pink"/>
    </div>
  </div>
  );
}
export default App;