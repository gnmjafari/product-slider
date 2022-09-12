 
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import React, { Component, useEffect, useState } from "react";
 import Slider from "react-slick";
 import './productdata.jsx'
 import { AiFillStar } from "react-icons/ai";
 import './sliderproduct.css'
import { Productdata } from './productdata.jsx';
import Samplenextarrow from '../slider/SampleNextArrow.jsx';
import SamplePrevArrow from '../slider/SamplePrevArrow.jsx';


const Sliderproduct = () =>{

   const [product, setproduct] = useState([]);

   useEffect( ()=>{
      setproduct(Productdata)
   },[product])

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <Samplenextarrow/> ,
      prevArrow: <SamplePrevArrow/>
    };
    


    return(

      <div className='contianer-product'>

         <Slider {...settings}>
            {product.map((item,index) =>{ 
               return(
                  <div className='product' key={index}>
                     <img src={item.image} alt="" />
                     <div className="info">
                        <h1> {item.titel} </h1>
                        <span><AiFillStar/> {item.rate}</span>
                        <p>هزارتومان {item.price} </p>
                        <button>+</button>
                     </div>
                  </div>
               )})}
         </Slider>
      </div>
    
    )
} 


export default Sliderproduct