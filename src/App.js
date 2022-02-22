
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Rutas from './routes'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rutas/>
      <Footer/>
      
    </div>
  );
}

export default App;
