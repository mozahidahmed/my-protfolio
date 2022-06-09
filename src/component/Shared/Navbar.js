import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
     <div className='mt-12 px-12'>
            <nav className='navbar bg-black'>
         <Link to="/home"><i className='fas fa-home '></i><span className='span'>Home</span></Link>
         <Link to="/about"><i className='fas fa-user '></i><span className='span'>About</span></Link>
         <Link to="/education"><i className='fas fa-graduation-cap'></i> <span className='span'>Education</span></Link>
         <Link to="/skill"><i class="fa-solid fa-list-check"></i> <span className='span'>Skill</span></Link>
         <Link to="/project"><i class="fa-regular fa-bars-progress"></i><span className='span'>Project</span></Link>
         <Link to="/contact"> <i class="fa-solid fa-phone-volume"></i><span className='span'>Contact</span></Link>

            
        </nav>
     </div>
        
    );
};

export default Navbar;