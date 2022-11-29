import React from 'react'
import loading from "../Images/loading.json";
import "../App.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="loader">
      {/* <img src={loading} alt="loading" /> */}
      <Player
        autoplay
        loop
        src={loading}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}

export default Loader