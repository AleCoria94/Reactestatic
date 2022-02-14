
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer titulo ="Probando este componente"/>
      <Footer/>
      
    </div>
  );
}

export default App;
