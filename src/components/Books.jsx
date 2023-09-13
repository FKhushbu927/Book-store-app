import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingPage from './LoadingPage';

const Books = () => {
    const { books } = useLoaderData();
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
          return <LoadingPage/>
    }

    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {books.map(book => (
                   <Book
                         
                   book = {book}
                   key = {book.isbn13}
                   
                   >

                   </Book>
                ))}
            </div>
        </div>
    );
};

export default Books;