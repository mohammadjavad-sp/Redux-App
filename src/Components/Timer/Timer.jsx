import { useEffect, useState } from "react";

const Timer = () => {
  const initialTime = {
    days: 365,
    hours: 24,
    minutes: 60,
    seconds: 60,
  };
  const getSavedTime = () => {
    try {
      const savedTime = localStorage.getItem("timeLeft");
      return savedTime ? JSON.parse(savedTime) : initialTime;
    } catch (error) {
      return initialTime;
    }
  };
  const [timeLeft, setTimeLeft] = useState(getSavedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    setTimeLeft((prevTime) => {
      let { days, hours, minutes, seconds } = prevTime;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 59;
        minutes--;
      } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
      } else if (days > 0) {
        seconds = 59;
        minutes = 59;
        hours = 23;
        days--;
      }

      const updatedTime = { days, hours, minutes, seconds };      
      localStorage.setItem("timeLeft", JSON.stringify(updatedTime));
      return updatedTime;
    });
  };

  return (
    <>
      <div className="flex gap-14 mb-10">
        <div className="bg-[#DE2545] flex items-center justify-center text-white rounded-2xl size-[70px] shadow-lg shadow-[#DE2545] text-center">
          {timeLeft.seconds}
          <br />
          ثانیه
        </div>
        <div className="bg-[#DE2545] flex items-center justify-center text-white rounded-2xl size-[70px] shadow-lg shadow-[#DE2545] text-center">
          {timeLeft.minutes}
          <br />
          دقیقه
        </div>
        <div className="bg-[#DE2545] flex items-center justify-center text-white rounded-2xl size-[70px] shadow-lg shadow-[#DE2545] text-center">
          {timeLeft.hours}
          <br />
          ساعت
        </div>
        <div className="bg-[#DE2545] flex items-center justify-center text-white rounded-2xl size-[70px] shadow-lg shadow-[#DE2545] text-center">
          {timeLeft.days}
          <br />
          روز
        </div>
      </div>
    </>
  );
};

export default Timer;
