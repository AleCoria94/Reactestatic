
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Rutas from './routes'
import {CartContextProvider} from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>

         <Navbar/>
      <Rutas/>
      <Footer/>
      </CartContextProvider>
     
      
    </div>
  );
}

export default App;
