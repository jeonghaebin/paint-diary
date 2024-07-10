import React from "react";

const Footer = (props) => {
  const { setIsWrite } = props;

  return (
    <div className="footer">
      <img
        className="write"
        src="./img/펜.png"
        onClick={() => setIsWrite(true)}
      ></img>
      <img className="read" src="./img/일기보기.png"></img>
    </div>
  );
};

export default Footer;
