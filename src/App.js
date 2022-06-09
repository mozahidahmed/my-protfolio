
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Pages/About.js/About';
import Contact from './component/Pages/Contact/Contact';
import Education from './component/Pages/Education/Education';


import Home from './component/Pages/Home/Home';
import Skill from './component/Pages/Skill/Skill';
import Navbar from './component/Shared/Navbar';
import Project from './component/Pages/Project/Project';







function App() {
  return (
    <div className="px-12">
      
    
    
   
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/skill' element={<Skill></Skill>}></Route>
     <Route path='/education' element={<Education></Education>}></Route>
     <Route path='/project' element={<Project></Project>}></Route>

     <Route path='/contact' element={<Contact></Contact>}></Route>

   </Routes>
   <Navbar></Navbar>
     
    </div>
  );
}

export default App;
