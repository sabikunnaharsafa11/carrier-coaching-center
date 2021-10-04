import React from 'react';

const Course = (props) => {
    const {name, price, coursetime, img} = props.course;
    return (
        <div>
      <div className="card course-card course-section d-flex justify-content-center ounded-20px">
      <img className="img-desigen  rounded-20px" src={img} alt="" />
      <div className="mt-4">
       <h4>{name}</h4>
        <h5>${price}</h5>
        <p>{coursetime}</p>
         <div className="mb-3">
         <button type="button" class="btn btn-dark">Details</button>
      </div>      
         </div>
      </div>      
      </div>
    
    );
};

export default Course;