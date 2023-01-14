import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Team from './Pages/Team';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/team" exact element={<Team/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
