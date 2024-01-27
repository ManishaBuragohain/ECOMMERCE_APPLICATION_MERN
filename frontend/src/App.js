import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { mobile } from "../src/responsive";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;