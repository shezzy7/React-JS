
import './App.css'
import Lottery from './Lottery';
function App() {
let winCond =(ticket)=>{
    return ticket.every(()=> ticket[0]===0);
}
  return (
    <>
      <h1>Lottery Game</h1>
      <Lottery n={4} winCond={winCond}/>
      {/* passing function as prop */}
    </>
  )
}

export default App
