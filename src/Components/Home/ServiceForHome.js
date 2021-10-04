import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const ServiceForHome = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
         <h1>Chose Your Course</h1>

<div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-3 g-4"> 
            {
                courses.slice(0,3).map(course =><Course 
                    key={courses.id}
                    course={course}
                     ></Course>)
            }
             </div> 
            </div> 
                 
            </div> 
          </div>
  
     </div>



    );
};

export default  ServiceForHome;