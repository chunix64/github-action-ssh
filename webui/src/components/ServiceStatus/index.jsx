import classNames from "classnames/bind";

import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import styles from "./ServiceStatus.module.scss";
const cx = classNames.bind(styles);

function ServiceStatus({ serviceName = "unknown", status = -1, Icon = PsychologyAltRoundedIcon}) {
  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <Icon/>
        <span className={cx('text')}>{serviceName}</span>
      </div>
      <div className={cx('status')}>
        Status: {status}
      </div>
    </div>
  )
}

export default ServiceStatus;
