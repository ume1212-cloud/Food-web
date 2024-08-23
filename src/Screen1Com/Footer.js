import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start  text-muted "style={{backgroundColor:'black'}}>
    <br/>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddYvNDRx6H2XmQyTeL_s6TA6-CtdlOuGU6g&s'style={{height:'60px',width:'120px'}}/>
              </h6>
              <p style={{color:'grey'}}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
                Products
              </h6>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Angular</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>React</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Vue</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Laravel</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
                Useful links
              </h6>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Pricing</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Settings</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Orders</a>
              </p>
              <p style={{color:'grey'}}>
                <a href="#!" className="text-reset" style={{color:'grey'}}>Help</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>Contact</h6>
              <p style={{color:'grey'}}><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p style={{color:'grey'}}>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p style={{color:'grey'}}><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p style={{color:'grey'}}><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
        
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
    
      </div>
    </footer>
  );
};

export default Footer;