import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
        <Banner></Banner>
         <h2 className="text-center text-black fs-2 fw-bold">Choose Your Course</h2>

<div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4"> 
            {
                courses.slice(2,6).map(course =><Course 
                    key={courses.id}
                    course={course}
                     ></Course>)
            }
             </div> 
            </div> 
                 
            </div> 
          </div>
          <About></About>
  
     </div>



    );
};

export default Home;