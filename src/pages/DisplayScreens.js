
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import SaleOffe from './SaleOffer';
import Menu1 from './Menu1';
import Menu2  from './Menu2';
import Sidebardata from './Sidebardata';
import  Footer from '../components/Footer';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RatingReview = ({ rating, setRating }) => {
        const [data, setData] = useState([]);
        const fetchApiData1 = async (url) => {
                 try {
                 const res = await fetch(url);
                 const result = await res.json();
                   setData(result.recipes); 
                 } catch (error) {
                   console.log('Error fetching data from API 1:', error);
                  }
                  };
  
 
        useEffect(() => {
               const API = 'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image';
               fetchApiData1(API);
   
               }, []);

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-2">
                  <Sidebardata/>
      </div>

         
 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="col-md-10" >
          <br/>

         <div style={{textAlign:'left',backgroundColor:'white'}}>
             <span style={{color:'red'}}>Feature</span> Best-quality
             <span style={{marginLeft:'10px'}}>Restaurant</span>
         </div>

        <Container fluid>
        <Row className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>
        <div className="col-12 text-start bg-white py-2">
         <br />
        <div className="row row-cols-1 row-cols-md-5 g-3" style={{ backgroundColor: "white" }}>
                   {data.length > 0 ? (
                    // Use slice(10, 14) to get only the first 4 items
                    data.slice(6,10).map((item, index) => (
                        <div key={index} className="col-md-3 col-sm-6 col-12 text-center mb-4">
                            <img src={item.image} alt={item.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                            <p className="mt-3" style={{ fontSize: '15px' }}>{item.name}</p>
                            <button className="btn btn-danger">Book Now</button>
                        </div>
                    ))
                ) : (
                    <li>Loading...</li>
                )}
            </div>
    
    </div>
  </Row>
</Container>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////
                          ROW CHANGE
 /////////////////////////////////////////////////////////////////////////////////////////////////// */}

<br/>
<div style={{textAlign:'left',backgroundColor:'white'}}>
  <span style={{color:'red'}}>Feature</span> Best-quality
  <span style={{marginLeft:'10px'}}>Restaurant</span>
</div>

<Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>
  {data.length > 0 ? (
                    // Use slice(10, 14) to get only the first 4 items
                    data.slice(2,6).map((item, index) => (
                        <div key={index} className="col-md-3 col-sm-6 col-12 text-center mb-4">
                            <img src={item.image} alt={item.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                            <p className="mt-3" style={{ fontSize: '15px' }}>{item.name}</p>
                            <button className="btn btn-danger">Book Now</button>
                            <div style={{ textAlign: 'center',fontSize:'10px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  cursor: 'pointer',
                  color: rating >= star ? 'gold' : 'gray',
                  fontSize: '35px',
                  display: 'inline-block',
                  fontSize:'15px'
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
                        </div>
                    ))
                ) : (
                    <li>Loading...</li>
                )}
  </Row>
</Container>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////
                          ROW CHANGE
 /////////////////////////////////////////////////////////////////////////////////////////////////// */}
<br/>

<Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'nowrap', backgroundColor:'#e6e6fa', overflowX: 'auto', paddingBottom: '10px' }}>
<SaleOffe/>
  </Row>
</Container>
 {/* ///////////////////////////////////////////////////////////////////////////////////////////////////
                          ROW CHANGE
 /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      
<br/>

<Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'nowrap', backgroundColor: 'white', overflowX: 'auto', paddingBottom: '10px' }}>
      <Menu1/>
  </Row>
</Container>  
 {/* ///////////////////////////////////////////////////////////////////////////////////////////////////
                          ROW CHANGE
 /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      
      <br/>


<Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'nowrap', backgroundColor: 'white', overflowX: 'auto', paddingBottom: '10px' }}>
      <Menu2/>
  </Row>
</Container> 


        </div>

     
</div></div>  
  );
};

const DisplayScreens = () => {
  const [rating, setRating] = useState(0);

  return <RatingReview rating={rating} setRating={setRating} />;
};

export default DisplayScreens;










