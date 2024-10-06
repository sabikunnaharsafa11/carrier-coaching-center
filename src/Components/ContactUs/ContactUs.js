import React from 'react';

const ContactUs = () => {
    return (
        <div>
           <div className="container contact-form bg-secondary w-50 mb-5 mt-5">
                <form method="post">
                    <h3 className="text-drak text-center fw-bold pt-5">Contact With Us</h3>
                    <div className="row d-flex justify-content-center pt-5">
                        <div className="col-md-6">
                            <div className=" p-2">
                            <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className=" p-2">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                            </div>

                            <div className=" p-2">
                            <input type="password" class="form-control" id="exampleInputPassword1"   placeholder="Your Password"/>
                            </div>

                            <div className=" p-2">
                                <textarea name="text" className="form-control message" placeholder="Your Message *" ></textarea>

                            <div className=" pt-3  justify-content-center pb-5">
                                <button type="button " className=" fw-bold btn btn-dark ">Submit </button>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            
                            </div> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;