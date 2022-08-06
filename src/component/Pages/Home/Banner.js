import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Type from './Type';


const Banner = () => {
    return (



        <div className='banner py-12'>
            <div class="hero   flex justify-center p-12">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div className='px-16'>
                        <i class="fa-brands fa-free-code-camp text-primary text-9xl"></i><br></br>
                        <i class="fa-solid fa-code text-primary text-9xl  "></i>

                    </div>




                    <div className='px-16 mt-16'>
                        <h1 class="text-2xl font-bold text-white">hi, there</h1>
                        <h1 class="text-2xl font-bold text-white">I'M MOZAHIDUL ISLAM</h1>
                        <h2 class="text-2xl font-bold text-primary mt-2 mb-2"><Type></Type></h2>
                        <p class=" text-1xl mt-6   text-white">I enjoy learn new skills and implementin then in real life.I like programming</p>
                        <a href="https://drive.google.com/file/d/1XrqqYECAIGSQqbtYTv2jSvlUu3T5lFAd/view?usp=sharing"><button class="px-6 py-2 btn-style button-one-style mt-6 text-white">DOWNLOAD RESUME</button></a>

                    </div>

                </div>


            </div>
        </div>




    );
};

export default Banner;