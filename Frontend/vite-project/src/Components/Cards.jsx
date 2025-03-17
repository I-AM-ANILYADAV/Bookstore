import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3 flex justify-center">
      <div className="card w-80 bg-base-100 shadow-md hover:scale-105 duration-200  ">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-52 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary text-xs">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline text-lg font-bold">
              ${item.price}
            </div>
            <button className="cursor-pointer px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
