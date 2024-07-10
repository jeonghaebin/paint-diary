import React from "react";

const Sidebar = () => {
  const todayTime = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    let dayOfWeek = week[now.getDay()];

    return todayMonth + "월" + todayDate + "일" + dayOfWeek;
  };

  return (
    <div className="date">
      <div>{todayTime().slice(0, 5)}</div>
      <div>{todayTime().slice(5)}</div>
    </div>
  );
};

export default Sidebar;
