import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    getTime();
    
    return () => clearInterval(interval);
  }, []);

  const getTime = () => {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();

    setHour(date.getHours());
    setMinute(m);
    setSecond(s);
  };


  const createSpikes = () => {
    const spikes = [];
    for (let s = 0; s < 60; s++) {
      spikes.push(
        <div
          key={s}
          className="spike"
          style={{ '--rotate': `${6 * s}deg` }}
          data-i={s}
        ></div>
      );
    }
    return spikes;
  };

  return (
    <div className="clock">
      <div className="seconds" style={{ '--dRotate': `${6 * second}deg` }}>
        {createSpikes()}
      </div>
      <div className="minutes" style={{ '--dRotate': `${6 * minute}deg` }}>
        {createSpikes()}
      </div>
      <div className="minute">{minute}</div>
      <div className="hour">{hour}</div>
    </div>
  );
};

export default Clock;
