import React from 'react';

 const Starrating = ({ rating, setRating })=> {
  return (
    <div> <div style={{ textAlign: 'center', fontSize: '10px' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star} // use the star as a unique key
        style={{
          cursor: 'pointer',
          color: rating >= star ? 'gold' : 'gray',
          fontSize: '15px',
          display: 'inline-block',
        }}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ))}
  </div></div>
  )
}
export default Starrating;
