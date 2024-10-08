import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() =>{
    const getBook = async() => {
      try {
     const res = await axios.get("http://localhost:4001/book");
     console.log(res.data);
     setBook(res.data);

      } catch (error) {
        console.log(error);

      }
    };
getBook();
  },[]);
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-600'> Here! :) </span></h1>
        <p className='mt-12 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt sit laborum provident nemo vitae dolorum repudiandae consequatur quia harum. Corporis odio magnam laborum? Quia alias facilis optio aut dignissimos.
        </p>
        <Link to='/'> 
          <button className='bg-pink-500 mt-7 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-150'>
          Back</button>
        </Link>
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
        {
            book.map((item) => (
                <Cards key={item.id} item={item} />
            ))

        }
    </div>
  </div>
  </>
  );
}

export default Course;