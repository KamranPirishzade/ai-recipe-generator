import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Catalog from './components/Catalog';
import Meal from './components/Meal';
import Ai from './components/Ai';
import List from './components/List';
import Pricing from './components/Pricing';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/meals" element={<Catalog/>}/>
        <Route path='/meals/:id' element={<Meal/>}/>
        <Route path='/ai-recipe-maker' element={<Ai/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
