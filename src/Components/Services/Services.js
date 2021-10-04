import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setservices(data))
    },[])

    return (
        <div>
            <h2>All Course</h2>
           <h2> Course: {services.length}</h2>  
           <div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-3 g-4"> 
            {
                services.map(service=><Course 
                    key={services.id}
                    course={service}
                     ></Course>)
            }
             </div> 
            </div> 
                 
            </div> 
          </div>
        </div>
    );
};

export default Services;