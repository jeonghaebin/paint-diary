const Paint = (props) => {
  const { setPaint, setIsWrite } = props;

  const exitBtn = () => {
    setPaint(0);
    setIsWrite(false);
  };

  const toComplete = () => {
    setPaint(2);
  };

  const paint_content = [
    { src: require("../../image/paint_example_1.png"), selected: false },
    { src: require("../../image/paint_example_2.png"), selected: false },
    { src: require("../../image/paint_example_3.png"), selected: false },
    { src: require("../../image/paint_example_4.png"), selected: false },
  ];

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
      <div className="paint_content">
        <div className="keyword_div">
          <div className="keyword">
            <input
              className="keyword_input"
              type="text"
              value={"#놀이공원#맑음#롤러코스터"}
            />
          </div>
          <div className="new_paint">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 43.3334C21.1611 43.3334 17.0625 41.6542 13.7042 38.2959C10.3459 34.9376 8.66669 30.839 8.66669 26.0001C8.66669 21.1612 10.3459 17.0626 13.7042 13.7042C17.0625 10.3459 21.1611 8.66675 26 8.66675C28.4917 8.66675 30.875 9.18097 33.15 10.2094C35.425 11.2379 37.375 12.7097 39 14.6251V8.66675H43.3334V23.8334H28.1667V19.5001H37.2667C36.1111 17.4779 34.5309 15.889 32.526 14.7334C30.5211 13.5779 28.3458 13.0001 26 13.0001C22.3889 13.0001 19.3195 14.264 16.7917 16.7917C14.2639 19.3195 13 22.389 13 26.0001C13 29.6112 14.2639 32.6806 16.7917 35.2084C19.3195 37.7362 22.3889 39.0001 26 39.0001C28.7806 39.0001 31.2903 38.2056 33.5292 36.6167C35.7681 35.0279 37.3389 32.9334 38.2417 30.3334H42.7917C41.7806 34.1612 39.7222 37.2848 36.6167 39.7043C33.5111 42.1237 29.9722 43.3334 26 43.3334Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="paints">
          {paint_content.map((paint) => (
            <div className={paint.selected ? "paint selected" : "paint"}>
              <img src={paint.src} />
            </div>
          ))}
        </div>
        <button className="to_complete" onClick={toComplete}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default Paint;
