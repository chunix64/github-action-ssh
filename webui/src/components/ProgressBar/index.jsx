import classNames from "classnames/bind";

import styles from "./ProgressBar.module.scss";
const cx = classNames.bind(styles);

function ProgressBar({ value, min = 0, max = 100}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx("bar")}>
        <progress value={value} min={min} max={max}>{value}</progress>
      </div>
    </div>
  )
}

export default ProgressBar;
