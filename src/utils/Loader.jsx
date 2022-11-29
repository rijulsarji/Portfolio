import React from 'react'
import loading from "../Images/loading.png";
import "../App.css";

const Loader = () => {
  return (
    <div>
      <img src={loading} alt="loading" />
    </div>
  )
}

export default Loader