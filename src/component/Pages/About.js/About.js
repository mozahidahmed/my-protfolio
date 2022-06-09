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
        <h1 className='text-primary font-bold  text-3xl text-center'>1+</h1>
        <h1 className='text-primary  text-3xl text-center'>Years of  Experience</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>100+</h1>
        <h1 className='text-primary  text-3xl text-center'>Happy Clients</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>10+</h1>
        <h1 className='text-primary  text-3xl text-center'>Project Completed</h1>

        </div>
        <div className='p-6 card-style'>
        <h1 className='text-primary font-bold  text-3xl text-center'>5+</h1>
        <h1 className='text-primary  text-3xl text-center'>Answer Won</h1>

        </div>



       
  
    </div>





    <div className=''>
        <div className='p-6'>
        <p className='text-white font-bold text-2xl mb-2'> PERSONAL INFO</p>
        <p className='text-white text-2xl'> Name : <span className='text-primary  text-1xl'>  Mozahidul Islam</span></p>
        <p className='text-white text-2xl'> Age : <span className='text-primary  text-1xl'> 20</span></p>
        <p className='text-white text-2xl'> Adress : <span className='text-primary  text-1xl'>  Sylhet,Bangladesh</span></p>
        <p className='text-white text-2xl'> email : <span className='text-primary  text-1xl'>  mozahidwebmin11d10@gmail.com</span></p>
        <p className='text-white text-2xl'> skill : <span className='text-primary  text-1xl'>   Front-end developer</span></p>
        <p className='text-white text-2xl'> Language : <span className='text-primary  text-1xl'>   English,Hindi,Bangladeshi</span></p>
        <button class="btn outer-shadow hover-in-shadow btn-primary button-style mt-6 px-12">my CV</button>

        
        
        </div>
        
       
    </div>

















 

</div>


</div>
     </div>
    
    );
};

export default About;