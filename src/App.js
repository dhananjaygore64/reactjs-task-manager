import './App.css';
import About from './About'
import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
