import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { getUptime, getRemainingTime } from "@/utils/time.js";

import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import TimerOffRoundedIcon from '@mui/icons-material/TimerOffRounded';
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
      <div className={cx('title')}>
        <TimerRoundedIcon/>
        <span className={cx('label')}>Uptime</span>
      </div>
      <span className={cx('value')}>{getUptime(startTime, now)}</span>
    </div>
    <div className={cx('time-remain')}>
      <div className={cx('title')}>
        <TimerOffRoundedIcon/>
        <span className={cx('label')}>Remaining</span>
      </div>
      <span className={cx('value')}>{getRemainingTime(endTime, now)}</span>
    </div>
  </div>)
}

export default Uptime;
