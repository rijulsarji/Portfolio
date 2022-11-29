import React from 'react'
import loading from "../Images/loading.png";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader">
      {/* <img src={loading} alt="loading" /> */}
      <lottie-player
        src="https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        controls
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Loader