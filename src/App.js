import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Itemlistcontainer from './Components/Itemlistcontainer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Itemlistcontainer titulo ="Probando este componente"/>
      <Footer/>
      
    </div>
  );
}

export default App;
