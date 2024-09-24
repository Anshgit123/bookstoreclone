import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import {Link} from "react-router-dom";

function Course() {
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
            list.map((item) => (
                <Cards key={item.id} item={item} />
            ))

        }
    </div>
  </div>
  </>
  );
}

export default Course;