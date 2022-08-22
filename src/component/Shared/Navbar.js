
import React from 'react';
import { Link } from 'react-router-dom';
import {
AiFillStar,AiOutlineHome,
AiOutlineFundProjectionScreen,
AiOutlineUser
} from 'react-icons/ai';

import {CgFileDocument} from 'react-icons/cg'
import {CgPhone} from 'react-icons/cg'
import {ImBlog} from 'react-icons/im'
import './Navbar.css';


const Navbar = () => {
    return (
     <div className=''>
         <nav className='navbar nav-style'>
            
         <Link to="/home"><AiOutlineHome className=''></AiOutlineHome><span className='span'>Home</span></Link>
         <Link to="/about"><AiOutlineHome className=''></AiOutlineHome><span className='span'>About</span></Link>
         <Link to="/skill"><CgFileDocument className=''></CgFileDocument> <span className='span'>Skill</span></Link>
         <Link to="/blog"><ImBlog className=''></ImBlog><span className='span'>Blog</span></Link>
         <Link to="/project"><AiOutlineFundProjectionScreen className=''></AiOutlineFundProjectionScreen><span className='span  mx-2'>Project</span></Link>
         

            
        </nav>
     </div>
        
    );
};

export default Navbar;

