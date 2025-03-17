import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch('/List.json')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "Free");
        setFilterData(filtered);
        console.log(filtered);
      })
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5">
        <div>
          <h1 className="font-semibold text-xl pd-2">Free Offered Course</h1>
          <p>"Welcome to our bookstore! Explore a wide range of books and learn 
          something new every day. With easy browsing, secure shopping, 
          and great recommendations, your reading journey starts here!"</p>
        </div> 
    
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;