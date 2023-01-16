import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './style.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

function App() {
  return (
    <div className="App">
       <Router>
          <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
