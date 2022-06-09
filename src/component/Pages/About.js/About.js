import React from 'react';
import './About.css';




const About = () => {
    return (
     <div className='py-24'>
         <h1 className='text-white font-bold  text-3xl text-center'>ABOUT <span className='text-primary font-bold'>ME</span></h1>


<div class="hero  flex justify-center">

<div class="hero-content flex-col lg:flex-row-reverse img-style">
   
   
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6'>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>2+</h1>
        <h1 className='text-primary  text-3xl text-center'>Years of  Experience</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>310+</h1>
        <h1 className='text-primary  text-3xl text-center'>Happy Clients</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>100+</h1>
        <h1 className='text-primary  text-3xl text-center'>Project Completed</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>10+</h1>
        <h1 className='text-primary  text-3xl text-center'>Answer Won</h1>

        </div>



       
  
    </div>





    <div className=''>
        <div className='p-6'>
        <p className='text-white font-bold text-2xl mb-2'> PERSONAL INFO</p>
        <p className='text-white'> Name : <span className='text-primary font-bold'>  Mozahidul Islam</span></p>
        <p className='text-white'> Age : <span className='text-primary font-bold'> 20</span></p>
        <p className='text-white'> Adress : <span className='text-primary font-bold'>  Sylhet,Bangladesh</span></p>
        <p className='text-white'> email : <span className='text-primary font-bold'>  mozahidwebmin11d10@gmail.com</span></p>
        <p className='text-white'> skill : <span className='text-primary font-bold'>   Front-end developer</span></p>
        <p className='text-white'> Language : <span className='text-primary font-bold'>   English,Hindi,Bangladeshi</span></p>
        <button class="btn outer-shadow hover-in-shadow btn-primary button-one-style mt-6 px-12">my CV</button>

        
        
        </div>
        
       
    </div>

















 

</div>


</div>
     </div>
    
    );
};

export default About;