import React from 'react'
import "../App.css"

const Nav = () => {
  return (
   <div className="navbar">
     <div >
  <p id='logo'>QTrip</p>
  </div>
 <div className="navv">
 <p>Home</p>
  <p>Reservation</p>
  <p style={{color:"orange"}}>Login Here</p>
  <button id="btnn">Register</button>
 </div>

   </div>

  )
}

export default Nav
