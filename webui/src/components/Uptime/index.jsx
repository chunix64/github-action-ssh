import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { getUptime, getRemainingTime } from "@/utils/time.js";

import styles from "./Uptime.module.scss";
const cx = classNames.bind(styles);

function Uptime({ startTime, endTime }) {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (<div className={cx('wrapper')}>
    <div className={cx('uptime')}>
      <span className={cx('title')}>Uptime</span>
      <span className={cx('value')}>{getUptime(startTime, now)}</span>
    </div>
    <span className={cx('time-remain')}>
      <span className={cx('title')}>Remaining</span>
      <span className={cx('value')}>{getRemainingTime(endTime, now)}</span>
    </span>
  </div>)
}

export default Uptime;
