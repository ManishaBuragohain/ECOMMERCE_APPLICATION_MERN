import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { mobile } from "../src/responsive";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  // const user = true;
  // if (user) {
  //   navigate("/");
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductList />} /> */}

          <Route path="products/:category" element={<ProductList />} />
          <Route path="/carts" element={<Cart />} />
          {/* <Route path="/login" element={user ? <Link to="/" /> : <Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
