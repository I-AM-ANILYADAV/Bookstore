import React from 'react';
import banner from '../../public/Banner.jpg';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col md:flex-row my-10 items-center">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight">
              Hello, welcome here to learn something <span className="text-pink-500">new every day!!!</span>
            </h1>
            <p className="text-xl text-white-700">
              "Welcome to our bookstore! Explore a wide range of books and learn something new every day. With easy browsing, secure shopping, and great recommendations, your reading journey starts here!"
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <label className="relative w-full md:w-auto">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </label>
              <button className="btn btn-secondary px-6 py-2 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition duration-200">Subscribe</button>
            </div>
            <div className="validator-hint hidden text-red-500">Enter a valid email address</div>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={banner} className="w-3/4 md:w-2/3 h-auto rounded-lg shadow-lg mt-4 md:mt-0" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;