import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {SiLinkedin} from "react-icons/si"
import './About.css';
import Education from '../Education/Education';




const About = () => {
    return (

        <div className='py-12 min-h-screen'>
            <h1 className='text-white font-bold  text-3xl text-center mt-12'>ABOUT  <span className='text-primary font-bold'>ME</span></h1>



  
   




            <div class="hero   flex justify-center">

                <div class="hero-content flex-col lg:flex-row-reverse img-style">
                    
                    <div className='px-16 img-style'>
                        <img className='w-48' src="https://i.ibb.co/7phZ954/mozahid-mozahid.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="" />
                      <div className="flex justify-center mt-2">



                      <a href="https://github.com/mozahidahmed/"><p className='text-2xl text-white style'> <AiFillGithub></AiFillGithub></p></a>

                      <a href="https://www.facebook.com/profile.php?id=100048932201779"><p className='text-2xl text-white style '> <BsFacebook></BsFacebook></p></a>


                      <a href="https://www.linkedin.com/in/mozahid-islam043356241/">
                      <p className='text-2xl text-white style '> <SiLinkedin></SiLinkedin></p>
                      </a>

                    
                      

                      </div>
                    </div>




                    < div className='px-16 mt-12 text-white'>


                        <div>Hello,I'am Mozahidul Islam,from Sylhet Bangladesh
                            I like the world of programming for a Reason.<br></br>
                            <p>Day by day new programming language are discovered</p>
                            <p>I like to learn to new programming language</p>
                            <p>I want to do artificial intelligence research in the future </p>

                            <div className='mt-6'>
                                <p>I love to do</p>
                                <div className='mt-2'>
                                    <div>
                                        <p># Coding</p>
                                    </div>

                                    <p># Reading</p>
                                    <p># Typing</p>
                                    <p># Research</p>
                                </div>

                            </div>



                        </div>


                      <div className='mt-6'>


                     {/* <a href="https://github.com/mozahidahmed"><i class="fa-brands fa-github  text-2xl i-style mx-6"></i></a>

                      <i class="fa-brands fa-facebook text-2xl i-style mx-6 "></i>
                      <Link to="/contact"><i class="fa-solid fa-envelope text-2xl i-style mx-6 "></i></Link>
                         */}

<Link to="/contact"><button class="px-12 py-2 btn-style button-one-style mt-6 text-[20px] text-white">Contact me</button></Link>   




                      </div>
                    </div>






                </div>


            </div>


<Education></Education>


        </div>



    );
};

export default About;