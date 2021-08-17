import React, { useState, useEffect } from "react";
import { GiSandsOfTime } from "react-icons/gi";
let timeIntervalId;
export default function Timer({ gameOver, sendTime }) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
  }, [time]);

  console.log(timeIntervalId);
  return (
    <div style={{ color: "white", fontSize: 20, background: "maroon" }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        <GiSandsOfTime />
      </span>
      {time}
    </div>
  );
}



//Below is some stuff to edit the timer. 


// const BoardHead = props =>{
//   let minutes = Math.floor(props.time / 60);
//   let seconds = props.time - minutes * 60 || 0;

//   let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//   let time = `${minutes}:${formattedSeconds}`;
//   let status = <FcBusinessman />
//   props.status === "running" || props.status === "waiting" ? (
//       <i className="icon ion-happy-outline" />
//   ) : (
//       <i className="icon ion-sad-outline" />
//   );

//   return (
//       <div className="board-head">
//           <div className="flag-count">{props.flagCount}</div>
//           <button className="reset" onClick={props.reset}>
//           {status}
//           </button>
//           <div className="timer">{time}</div>
//       </div>
//   );
// };

// BoardHead.propTypes = {
//   time: PropTypes.number.isRequired,
//   flagsUsed: PropTypes.number.isRequired
// };

// export default BoardHead;