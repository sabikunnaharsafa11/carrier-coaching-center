import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className="banner-container mt-5 ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 mt-4 fw-bold">
         <h4>Well come To Carrier Coaching</h4>
        <h2>Carrier Coaching Is Best In<br/> Coaching Center </h2>
            <p className="text-black text-center fw-normal mt-2 ms-5 ">
           Welcome to our page we think you passed the some time with very very good <br/>fellings.you gain some advice and some tricky Question from this website.
            </p>
            <button className="mt-1 btn btn-dark">Read More</button>
          </div>
          <div className="col-md-6">
          <img  src="https://p.kindpng.com/picc/s/701-7017847_laptop-rental-product-girl-with-laptop-png-transparent.png" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;