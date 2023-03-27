import './App.css';
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Data from "./Data"

function App() {

  const newArray = Data.map(item =>{
    return(
        <Card 
          key={item.id}
          item={item}
        />
    )
})

  return (
    <div className="App">
      <Navbar />
      <div className='Main-Card'>
        {newArray}
      </div>
    </div>
  );
}

export default App;

