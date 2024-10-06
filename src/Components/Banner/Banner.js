import React from 'react';
import img from './../../images/images1.png'


const Banner = () => {
    return (
        <div>
          
        <div className="container mt-5 ">
      <div>
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 mt-2 ">
         <h5 className='fs-4 text' >Well come To  <span className='text-danger '>Carrier Coaching</span> </h5>
         
        <h2 className='text-black fs-2 fw-bold mt-4'>Carrier Coaching Is Best <br/>In Coaching Center </h2>
            <p className=" text-danger-emphasis   text mt-3 ">
           Welcome to our page we think you passed the some time<br/> with very very good fellings.you gain some advice and some<br/> tricky Question from this website.
            </p>
            <button className="mt-1 btn btn-dark">Read More</button>
          </div>
          <div className="col-md-6">
          <img className="w-200 h-200" src={img} alt="..."></img>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;