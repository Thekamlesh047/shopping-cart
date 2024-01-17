import Card from "./components/Cards/Card.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className=" flex flex-col">
      <Navbar/>
    <Routes>
        <Route path="/" element={<Card/>} />
        <Route path="/card" element={<Card />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
