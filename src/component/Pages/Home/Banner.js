import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (



        <div className='min-h-screen'>
            <div class="hero   flex justify-center p-12">

                <div class="hero-content flex-col lg:flex-row-reverse img-style">
                <div className='px-16 img-style'>
                        <img className='w-48' src="https://i.ibb.co/0Qc3S1n/mozahid-mozahid.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="" />

                    </div>
                  
                  
                  
                 
                 <div className='px-16 mt-16'>
                        <h1 class="text-3xl font-bold text-white">HI, I'M MOZAHID</h1>
                        <h2 class="text-2xl font-bold text-primary mt-2 mb-2">Front-End Developer</h2>
                        <p class=" text-1xl mt-2 mb-2   text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores?</p>
                        <Link to="/about"><button class="btn outer-shadow hover-in-shadow btn-primary button-one-style">ABOUT ME</button>
                        </Link>
                    </div>

                


                  

                </div>


            </div>





        </div>


    );
};

export default Banner;