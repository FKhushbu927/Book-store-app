import React from 'react';

const LoadingPage = () => {
    return (

        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <p className='text-7xl text-blue-500 font-thin'>L</p>
            <div className='w-10 h-10 border-4 border-dashed rounded-full animate-spin mt-5 border-blue-800'> 
            
             </div>
             
            <p className='text-7xl font-thin text-blue-500 '>adding...</p>
         
           
        </div>

    );
};

export default LoadingPage;