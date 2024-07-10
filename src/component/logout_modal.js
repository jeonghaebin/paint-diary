import React from "react";

const Modal = () => {
  return (
    <><div className="modal">
      <img className="logout_img" src="./img/logoutmention.png"></img>
    </div><div className="logout_text">
        <div className="lg_set">설정</div>
        <div className="lg">
          <a href="#">로그아웃</a>
        </div>
      </div></>
  );
};

export default Modal;
