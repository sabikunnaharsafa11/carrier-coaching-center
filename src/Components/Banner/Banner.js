import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className="banner-container mt-5 ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
         <h4>Well come To Carrier Coaching</h4>
        <h2>Carrier Coaching Is Best In Coaching Center </h2>
            <p className="text-black text-center mt-2">
           Welcome to our page we think you passed the some time with very very good fellings.you gain some <br/>advice and some tricky Question from this website.
            </p>
            <button className="mt-1 btn btn-danger">Read More</button>
          </div>
          <div className="col-md-6">
          <img src="https://qph.fs.quoracdn.net/main-qimg-f6dee1b5714fceb98873e76c0a437387" class="d-block w-100" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;