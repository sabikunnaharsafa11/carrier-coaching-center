import React from 'react';

const Footer = () => {
    return (
        <body className="d-flex flex-column"> 
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white">
        <div className="d-flex justify-content-center">
                        <div className="m-3"><i class="fab fa-facebook"></i></div>
                        <div className="m-3"><i class="fab fa-github"></i></div>
                        <div className="m-3"><i class="fab fa-pinterest"></i></div>
                        <div className="m-3"><i class="fab fa-youtube"></i></div>
                    </div>             
          <div className="container text-center ">
            <small>Copyright &copy;Safa Coaching Center</small>
          </div>
        </footer>
      </body>
    );
};

export default Footer;