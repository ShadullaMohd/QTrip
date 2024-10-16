import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function Adventures() {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res2) => {
        setDetails(res2);
        // console.log(details);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="content">
      <div className="content">
        <div>
          <h1>{details.name}</h1>
          <p>{details.subtitle}</p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide img-box" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {details.images && details.images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h3>About the Experience</h3>
        <p>{details.content}</p>
      </div>
    </div>
  );
}

export default Adventures;
