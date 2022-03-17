import React from "react";
import { Link } from "react-router-dom";


const BrandTitle = () => {
  return (
    <div className="flex-title">
      <div className="fw-bold baseshade-gray">
        <Link to="/home">
          RALLY<span className="baseteal">ALLEY</span>
        </Link>
      </div>
      <p className="fs-07 baseteal">Smashinn Badminton Products your way</p>
    </div>
  );
};

export default BrandTitle