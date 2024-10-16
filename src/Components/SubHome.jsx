import React from 'react'

const SubHome = () => {
  return (
    <div>
        <div id="sub-main-div">
                    <div>
                        <p id="explore">Explore all adventures</p>
                        <p id="list">Here's a list of places that you can explore in city</p>
                    </div>
                   
                    <hr></hr>
                    <div id="filter-div"  >
                        <p>Filter | </p>
                        <p className="box">Filter by duration</p>
                        <p>clear</p>
                        <p className="box">Add Category</p>
                        <p>clear</p>
                        <input placeholder="Search Adventures"></input>
                        <p>clear</p>
                    </div>
               <hr></hr>
                    </div>
    </div>
  )
}

export default SubHome
