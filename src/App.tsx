import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/:id" element={<Detail />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
