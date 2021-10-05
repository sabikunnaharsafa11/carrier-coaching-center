import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, price, coursetime, img} = props.course;
    return (
        <div>
      <div className="card course-card course-section d-flex justify-content-center ounded-20px">
      <img className="img-desigen" src={img} alt="" />
      <div className="mt-5 text-center">
       <h4 >{name}</h4>
        <h5 className="text-danger fw-bold">Price: ${price}</h5>
        <p className="fw-normal">coursetime: {coursetime}</p>
         <div className="mt-5">
         <button type="button" class=" btn btn-dark btn1">Details</button>
      </div>      
         </div>
      </div>      
      </div>
    
    );
};

export default Course;