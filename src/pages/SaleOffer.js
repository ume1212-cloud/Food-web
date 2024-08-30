import React from "react";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Screen3 = () => {

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '45vh', 
    };
  
    // const topPaneStyle = {
    //   flex: 1,
    //   padding: '20px',
    //   backgroundColor: '#f0f0f0',
    //   boxSizing: 'border-box',
    // };
  
    const bottomPanesStyle = {
      display: 'flex',
      flex: 2, 
    };
  
    const paneStyle = {
      flex: 1,
      padding: '5px',
      boxSizing: 'border-box',
    };
  
    const leftPaneStyle = {
      ...paneStyle,
      
    };
  
    const rightPaneStyle = {
      ...paneStyle,
      backgroundColor:'#e6e6fa'
    };
  
    // Responsive styles using media queries
    const responsiveStyle = {
      '@media (max-width: 768px)': {
        containerStyle: {
          flexDirection: 'column',
        },
        bottomPanesStyle: {
          flexDirection: 'column', 
        },
      },
    };
  
    return (
        <div className="container">
          <div className="row">
            
            <div className="col-md-6 mb-6">

              <div className="position-relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbPwbc7RZVnr2q9LTKU8HFvvy-F8F8bvt6A&s"
                  className="img-fluid"
                  alt="Healthy food"
                  style={{ backgroundColor: '#e6e6fa' , width:'460px',height:'250px'}}
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center text-white"
                  style={{ color: 'white' }}
                >
                  <h4>Healthy food</h4>
                  <p>Up to 70% off</p>
                  <button className="btn btn-danger" style={{ backgroundColor: 'orangered' }}>
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-6">
              <div className="position-relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx0PZyzHfgIiWLw45uFVc5XSzGLIvsj2cWw&s"
                  className="img-fluid"
                  alt="Delicious food"
                  style={{ backgroundColor: '#e6e6fa', width:'460px',height:'250px' }}
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center text-white"
                  style={{ color: 'white', left: '30%' }}
                >
                  <h4>Delicious Food</h4>
                  <p>Up to 50% off</p>
                  <button className="btn btn-danger" style={{ backgroundColor: 'orangered' }}>
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Screen3;