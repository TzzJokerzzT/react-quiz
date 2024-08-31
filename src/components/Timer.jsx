import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    ///Cleanup function
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className="timer">
      <span>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    </div>
  );
};

export default Timer;
