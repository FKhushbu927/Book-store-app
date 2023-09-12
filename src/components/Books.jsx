import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const {books} = useLoaderData();
    
    return (
        <div className='my-container'>
           <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {books.map(book => (
                    <div className='overflow-hidden relative  transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                              <img 
                              src={book.image} 
                              alt="book-cover" 
                              className='object-cover w-full h-56 md:h-64 xl:h-80'
                              />

                              <div className='bg-black px-6 py-4 bg-opacity-75  opacity-0 hover:opacity-100  inset-0 text-gray-300 transition-opacity duration-200 absolute flex flex-col'>
                                <p>{book.title}</p>
                                 <br />
                                 <p>{book.subtitle.substring(0, 45)}...</p>
                                 <br />
                                 <h4 className='mt-auto font-bold'>Price:{book.price}</h4>

                              </div>
                    </div>
                ))}
           </div>
        </div>
    );
};

export default Books;