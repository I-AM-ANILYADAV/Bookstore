import React from 'react';
import Cards from './Cards';
import List from '../../public/List.json';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5 py-10">
        <div className="mt-28 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We are delighted to have you <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12 ">
            Step into a world of endless stories, knowledge, and imagination.
            Whether you're a passionate reader, a student looking for academic resources, or someone
            searching for a perfect gift, our bookstore offers a curated collection of books across all genres.
            <br /><br />
            Visit us today and discover the joy of reading! 📖✨
          </p>
          <Link to="/">
          <button className =" mt-6 bg-pink-500 text-white px-4 py-4 rounded-md hover:bg-blue-500">Back</button>
          </Link>
          
        </div>
        <div className ="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
           List.map((item)=>(
            <Cards key={item.id} item={item}/>
           ))
    }
          
        </div>
      </div>
      
    </>
  );
}

export default Course;