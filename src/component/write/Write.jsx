const Write = (props) => {
  const { setPaint, setIsWrite } = props;

  const exitBtn = () => {
    setPaint(0);
    setIsWrite(false);
  };

  const toPaint = () => {
    setPaint(1);
  };

  const todayYear = () => {
    const now = new Date(); // 현재 날짜 및 시간
    return now.getFullYear();
  };

  const todayMonth = () => {
    const now = new Date(); // 현재 날짜 및 시간
    return now.getMonth() + 1;
  };

  const todayDay = () => {
    const now = new Date(); // 현재 날짜 및 시간
    return now.getDate();
  };

  const todayDate = () => {
    return todayYear() + "년 " + todayMonth() + "월 " + todayDay() + "일";
  };

  const manuscript = new Array(4).fill(new Array(8).fill(""));

  return (
    <div className="write_div">
      <div className="exit_div">
        <div onClick={exitBtn}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3469 27.215C30.7627 27.6308 30.9963 28.1948 30.9963 28.7828C30.9963 29.3708 30.7627 29.9348 30.3469 30.3506C29.931 30.7664 29.3671 31 28.779 31C28.1909 31 27.6269 30.7664 27.2111 30.3506L15.5 18.6365L3.78519 30.3469C3.36936 30.7627 2.80538 30.9963 2.21731 30.9963C1.62925 30.9963 1.06526 30.7627 0.649436 30.3469C0.233609 29.9311 6.1963e-09 29.3672 0 28.7791C-6.1963e-09 28.1911 0.233609 27.6271 0.649436 27.2113L12.3642 15.5009L0.653125 3.78681C0.237298 3.37101 0.0036892 2.80706 0.00368921 2.21903C0.00368921 1.63099 0.237298 1.06704 0.653125 0.651242C1.06895 0.23544 1.63293 0.00184415 2.221 0.00184414C2.80907 0.00184414 3.37305 0.23544 3.78888 0.651242L15.5 12.3654L27.2148 0.649397C27.6306 0.233595 28.1946 -9.79663e-09 28.7827 0C29.3708 9.79663e-09 29.9347 0.233595 30.3506 0.649397C30.7664 1.0652 31 1.62915 31 2.21718C31 2.80521 30.7664 3.36916 30.3506 3.78497L18.6358 15.5009L30.3469 27.215Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="write_content">
        <div className="input_title">제목</div>
        <div>
          <input
            className="write_title"
            type="text"
            placeholder={todayDate() + " 일기"}
          />
        </div>
        <div className="input_date">
          <div>
            <div className="input_title">연</div>
            <div>
              <input
                className="write_year"
                type="text"
                placeholder={todayYear()}
              />
            </div>
          </div>
          <div>
            <div className="input_title">월</div>
            <div>
              <input
                className="write_month"
                type="text"
                placeholder={todayMonth()}
              />
            </div>
          </div>
          <div>
            <div className="input_title">일</div>
            <div>
              <input
                className="write_month"
                type="text"
                placeholder={todayDay()}
              />
            </div>
          </div>
        </div>
        <div className="input_title">장소</div>
        <div>
          <input className="write_title write_location" type="text" />
        </div>
        <div className="input_title">내용</div>
        <div className="write_diary">
          {manuscript.map((row, r) => (
            <div>
              {row.map((col, c) => (
                <input className="write_manuscript" type="text" />
              ))}
            </div>
          ))}
        </div>
        <button className="to_paint" onClick={toPaint}>
          그리기
        </button>
      </div>
    </div>
  );
};

export default Write;
