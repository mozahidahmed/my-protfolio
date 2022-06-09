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
                        <h1 class="text-3xl font-bold text-white">hi, i'm Mozahidul Islam</h1>
                        <h2 class="text-2xl font-bold text-primary mt-2 mb-2">Front-End Developer</h2>
                        <p class=" text-1xl mt-2 mb-2   text-white">I can easily create any web site.I can easily make web site responsive for all devices</p>
                        <a href="https://drive.google.com/file/d/1GVTdNk45JToGXzGnVOedJnN0PjQOX9Ud/view?usp=sharing"><button class="px-6 py-2 btn-primary button-one-style font-bold">DOWNLOAD CV</button></a>   
                        
                    </div>

                


                  

                </div>


            </div>





        </div>


    );
};

export default Banner;