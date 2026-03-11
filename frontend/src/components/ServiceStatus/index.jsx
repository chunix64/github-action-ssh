import classNames from "classnames/bind";

import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import styles from "./ServiceStatus.module.scss";
const cx = classNames.bind(styles);

function ServiceStatus({ serviceName = "Unknown", status = -1, Icon = InfoRoundedIcon }) {
  status = Number(status);

  switch (status) {
    case 0:
      status = "offline"
      break;
    case 1:
      status = "online"
      break;
    case -1:
      status = "unknown"
      break;
    default:
      break;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <Icon/>
        <span className={cx('label')}>{serviceName}</span>
      </div>
      <div className={cx('status', status)}>
        <div className={cx('text')}>
          <span>Status: </span>
          <div className={cx('value')}>
            {status}
            <FiberManualRecordRoundedIcon/>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default ServiceStatus;
