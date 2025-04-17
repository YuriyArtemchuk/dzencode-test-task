import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./TopMenu.scss";
import { FaClock } from "react-icons/fa";

const socket = io("http://localhost:3000");

const TopMenu = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    // Обновление времени
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    socket.on("sessionCount", (count) => {
      console.log("Сессий активно:", count);
      setSessionCount(count);
    });

    return () => {
      clearInterval(timer);
      socket.off("sessionCount");
    };
  }, []);

  const formattedDay = (date) =>
    date.toLocaleDateString("en-EN", { weekday: "long" });

  const formattedDate = (date) =>
    date.toLocaleDateString("en-EN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formattedTime = (date) =>
    date.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <header>
      <div className="wrapper">
        <div className="left_wrapper">
          <div className="logo-block">
            <img src="/logo-image.png" alt="logo" className="logo" />
            <div className="name">INVENTORY</div>
          </div>

          <div className="search-wrapper">
            <input type="text" placeholder="Search" id="search"></input>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="date-block">
            <div className="day">{formattedDay(currentTime)}</div>
            <div className="date-time">
              {formattedDate(currentTime)}
              <span className="time-block">
                <FaClock className="clock-icon" />
                {formattedTime(currentTime)}
              </span>
            </div>
          </div>
        </div>
        <div className="session-count">Active session: {sessionCount}</div>
      </div>
    </header>
  );
};

export default TopMenu;
