import './App.css';
import Dataa from './components/Dataa';
import Navbar from './components/Navbar.js'
import data from './data.js'
function App() {
  const dataa= data.map(item=> 
    {return(
      <div>
    <Dataa 
      key={item.title}
      {...item}/>
      <hr></hr>
      </div>
      )
    })
  return (
    <div className="App">
      <Navbar />
      {dataa}
    </div>
  );
}

export default App;
