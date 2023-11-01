import Contacto from "./Components/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import Nosotros from "./Components/Nosotros";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./Components/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./Components/Checkout";

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/Nosotros" element={<Nosotros />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="/Carrito" element={<Carrito />}/>
        <Route path="/checkout" element={<Checkout />}/>

      </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}




export default App;
