import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const booksData = useLoaderData();
    console.log(booksData);
    return (
        <div>
           
        </div>
    );
};

export default Books;