import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'


function Freebook() {
  const [book, setBook] = useState([])
  useEffect(() =>{
    const getBook = async ()=>{
      try{
      const res = await axios.get("http://localhost:3000/book")
      const data = res.data.filter((data) =>data.category ==="Free")
      console.log(data);
      setBook(data)
      }catch(error){
        console.log("Error:",error)
      }
    }
    getBook();
  },[])

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
          <p>"Step into a world of stories, knowledge, and imagination . Whether you’re an avid reader, a student, or someone looking for the perfect gift, our bookstore offers a diverse collection of books across various genres. From timeless classics and bestsellers to academic resources and rare finds, we have something for everyone."</p>
        </div> 
    
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;