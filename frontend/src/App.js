import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path="/"  element={<HomeScreen />} />
          <Route path="/product/:id"  element={<ProductScreen />} />
          <Route path="/cart"  element={<CartScreen />} />
        </Routes>
      </main>
      
    </Router>
  )
}

export default App;
