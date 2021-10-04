import React from 'react';
import Home from './Home';

const Banner = () => {
    return (
    <div>
     
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h1 className="title">
              BE THE BASKETBALL <br /> STAR AND SHINE
            </h1>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="mt-3 about-btn">About Us</button>
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

