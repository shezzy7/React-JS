
import './App.css';
import Event from './Event';
function sayHello(){
  console.log("Hello , Goodo");

}
function handleMouseOver(){
  console.log("Mouse Over called");
}
function App() {
  return (
    <>
      
      <button onClick={sayHello}>Say Hello!</button>
      <button onMouseOver={handleMouseOver}>MouseOver here</button>
      {/* when calling a function in events we don't need to add parantheses with function name as it will directly execute it with doing any action and also after applying this event the function will not be called again,so we don't need to add () with name of function while calling it in an event */}

      {/* Event Object */}
      <Event />
      
    </>
  )
}

export default App
