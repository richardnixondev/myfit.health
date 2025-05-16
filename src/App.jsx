import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BMIGeneralView from './pages/BMIGeneralView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMIGeneralView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
