import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Menu2= () => {
    const [data, setData] = useState([]); // State to hold fetched data

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
                    // Use slice(0, 4) to get only the firsat 4 items
                    data.slice(0, 4).map((item, index) => (
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
    );
};

export default Menu2;