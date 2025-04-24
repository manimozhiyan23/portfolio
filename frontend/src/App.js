import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Front from './pages/front';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front/>}/>
      </Routes>
    </Router>
  );
}

export default App;
