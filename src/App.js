
import './App.css';
import Nav from './components/nav';
import Product from './components/products';
import Phone from './components/electronics'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Apparel from './components/apparel';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Product/>} />
            <Route path="phone" element={<Phone/>} />
            <Route path="apparel" element={<Apparel/>} />
          </Route>
        </Routes>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
