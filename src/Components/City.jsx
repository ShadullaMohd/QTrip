import React, { useEffect, useState } from 'react';
import "../App.css";
import Loader from './Loader';
import { useNavigate, useParams } from 'react-router-dom';
import SubHome from './SubHome';

const City = () => {
  const [city, setCity] = useState([]);
  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=${id}`)
      .then((res) => res.json())
      .then((res2) => {
        setCity(res2);
      })
      .catch((error) => console.error('Error fetching data:', error)); 
  }, [id]); 

  return (
    <div>
    <SubHome/>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 g-4 p-4">
        {city.length > 0 ? ( 
          city.map((item) => (
            <div className="col city-card" key={item.id} onClick={() => navigate(`/adventures/${item.id}`)}>
              <div className="card">
                <div>
                <img id='city-img' src={item.image} className="card-img-top" alt={item.name} />
                <p id='category'>{item.category}</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="body" >
                  <h5 id='h' className="card-title">{item.name}</h5>
                
                  <h5 className="card-title">Duration</h5>
                
                </div>
                <div className="body"  >
                  <p className="card-text d-inline">₹{item.costPerHead}</p>
                  <p className="card-text">{item.duration} Hours</p>
                </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
          <Loader/>
          </div>
        )}
      </div>
    </div>
  );
}

export default City;