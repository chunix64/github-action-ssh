import classNames from "classnames/bind";

import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import styles from "./ServiceStatus.module.scss";
const cx = classNames.bind(styles);

function ServiceStatus({ serviceName = "Unknown", status = -1, Icon = PsychologyAltRoundedIcon}) {
  switch (status) {
    case 0:
      status = "Offline"
      break;
    case 1:
      status = "Online"
      break;
    case -1:
      status = "Unknown"
      break;
    default:
      break;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <span className={cx('text')}>{serviceName}</span>
      </div>
      <div className={cx('status')}>
        <span className={cx('text')}>Status: {status}</span>
        <Icon/> 
      </div>
    </div>
  )
}

export default ServiceStatus;
