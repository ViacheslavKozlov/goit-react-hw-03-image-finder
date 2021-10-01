import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <Loader type="BallTriangle" color="#0a121634" height={100} weidht={100} timeout={15000} />
    </>
  );
};

export default Spinner;
