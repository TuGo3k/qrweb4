import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MapComponent from './components/MapComponent';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
    // <MapComponent />
  );
}

export default App;
