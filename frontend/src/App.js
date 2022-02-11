import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route exact path="/" component={HomeScreen} />
          <Route  exact path="/product/:id" component={ProductScreen} />
          <Route  exact path="/cart" component={CartScreen} />
        </Routes>
      </main>
      
    </Router>
  )
}

export default App;
