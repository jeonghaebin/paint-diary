import React, { useState } from "react";
import Data from "./date";
import Modal from "./logout_modal";

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <div className="moon">
        <div className="small-moon"></div>
        <Data />
      </div>
      <div className="head_logout">
        <div className="logout">
          <img
            className="log"
            onClick={() => {
              setModal(!modal);
              console.log(modal);
            }}
            src="./img/logout.png"
          ></img>
        </div>
        {modal === true ? <Modal /> : null}
      </div>
    </div>
  );
};

export default Header;
