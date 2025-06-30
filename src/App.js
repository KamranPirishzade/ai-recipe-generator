import './App.css';
import {BrowserRouter
   as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Catalog from './components/Catalog';
import Meal from './components/Meal';
import Ai from './components/Ai';
import List from './components/List';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Login from './components/Login'
import Signup from './components/Signup';
import { useAuth } from './AuthContext';


 

function App() {
    const { isLoggedIn, logout } = useAuth();
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/meals" element={<Catalog/>}/>
        <Route path='/meals/:id' element={<Meal/>}/>
        <Route path='/ai-recipe-maker' element={<Ai/>}/>
        <Route path='/list' element={isLoggedIn?<List/>:<Signup/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>       
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
