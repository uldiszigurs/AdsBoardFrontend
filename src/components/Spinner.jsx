import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = props => {
  const { type, color, height, width } = props;
  return <Loader type={type} color={color} height={height} width={width} />;
};

export default Spinner;
