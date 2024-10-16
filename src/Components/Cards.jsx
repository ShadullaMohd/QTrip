import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';

const Cards = () => {
  const [api, setApi] = useState([]);
  const { id } = useParams();
  let [cityName, setCityName] = useState("");
  let [filteredApi, setFilteredApi] = useState([]);
  // console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
      .then((res) => res.json())
      .then((res2) => {
        setApi(res2);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const filteredData = api.filter((item) => item.city.toLowerCase().includes(cityName.toLowerCase()));
    setFilteredApi(filteredData);
  }, [api, cityName]);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <>
      <div className='bgimg' style={{ height: "70vh", width: "100%" }}>
        <div className='home-div'>
          <h1>Welcome to QTrip</h1>
          <p>Explore the world with fantastic places to venture around</p>
          <input value={cityName} onChange={handleInputChange} placeholder='Search a City ' />
          {cityName.length > 0 && (
            <ul type="none">
              {filteredApi.map((item, i) => (
                <li style={{cursor:"pointer" , backgroundColor:"white", color:"black"}} key={item.id} onClick={() => navigate(`/city/${item.id}`)} >
                  {item.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        {api.length > 0 ? (
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 g-4 m-5" id='container'>
            {api.map((item, i) => (
              <div key={item.id} className="col " onClick={() => navigate(`/city/${item.id}`)}>
                <div className="card cards">
                  <div className="card-body">
                    <img className='card-img' src={item.image} alt='img' />
                    <div className='title'>
                      <h5 className="card-title">{item.city}</h5>
                      
                    </div>
                    <div className='title'>
                      
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Cards;