
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RatingReview = ({ rating, setRating }) => {
  return (
    <div className="d-flex flex-nowrap" style={{ gap: '10px', whiteSpace: 'nowrap', backgroundColor: 'white' }}>
      <div className="text-center">
        <img
          src="https://media.istockphoto.com/id/1494273340/photo/pizza-with-pepperoni-arugula-ketchup-tomatoes-and-cheese-in-a-plate-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=kF0TcNtpkCEZQHrQqz9u1r6_HipIM7OUcWc0Vbmw8Rc="
          alt="Pizza"
          className="img-fluid"
          style={{ height: '50px' }}
        />
      </div>
    </div>
  );
};

const Menu1 = () => {
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]); // Moved data state to App

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result.recipes); // Assuming the API returns { recipes: [...] }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const API = 'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image';
    fetchApiData(API);
  }, []);

  return (
    <div className="container my-4">
            <div className="row justify-content-center">
                {data.length > 0 ? (
                    // Use slice(0, 4) to get only the first 4 items
                    data.slice(5, 9).map((item, index) => (
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
          <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
          <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
    </div>
                        
                    ))
                ) : (
                    <li>Loading...</li>
                )}
            </div>
        </div>
        )};

export default Menu1;