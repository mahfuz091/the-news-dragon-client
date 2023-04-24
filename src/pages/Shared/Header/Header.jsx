import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className='text-center mt-4'>
        <img src={logo} alt='' />
        <p className='text-secoundary'>
          <small>Jaournalism is a fear or favior</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
