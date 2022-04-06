import React from "react";
// import NotFound from "../../assets.png";
import logo192 from "../../assets/notFound4.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export const NotFound = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div class="wrap-notFound">
        <div class="notFound">
          <div>
            <div className="notFound-image">
              <img src={logo192} alt="" />
            </div>
            <p>
              <span>Oops! </span>A wild Snorlax has blocked your path!
            </p>
            <button className="buttonHome" onClick={goHome}>
              GO HOME
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
