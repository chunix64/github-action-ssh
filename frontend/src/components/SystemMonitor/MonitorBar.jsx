import classNames from "classnames/bind";

import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import ProgressBar from "@/components/ProgressBar";

import styles from "./SystemMonitor.module.scss";
const cx = classNames.bind(styles);

function MonitorBar({ Icon = MemoryRoundedIcon, label = "U/K", value, suffix = "%", precision = 2 }) {
  return (
    <div className={cx('bar')}>
      <div className={cx("text")}>
        <Icon/>
        <span className={cx('label')}>{label}</span>
        <span className={cx('value')}>{value.toFixed(precision)}{suffix}</span>
      </div>
      <ProgressBar value={value} />
    </div>
  )
}

export default MonitorBar;
