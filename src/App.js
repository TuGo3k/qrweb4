import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProductCard from './components/ProductCard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
    // <ProductCard />
  );
}

export default App;
