import React from 'react';

const ContactEmail = () => {
    return (
        <div className='mt-12 mb-6'>

            <h4 className='text-xl text-white text-center font-bold'>S E N T  <span className='text-primary font-bold'>M A I L</span></h4>
       
            <form  action="https://formsubmit.co/tavecis329@game4hr.com" method="POST" className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                <input placeholder="n a m e " class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <input placeholder="e m a i l " class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <textarea placeholder="w  r i t e m a s  s a g e " class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <button className='btn w-full max-w-xs' type="submit">Sent Mail</button>
            </form>

        </div>
    );
};

export default ContactEmail;