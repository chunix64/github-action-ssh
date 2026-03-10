import classNames from "classnames/bind";

import ProgressBar from "@/components/ProgressBar";

import styles from "./SystemMonitor.module.scss";
const cx = classNames.bind(styles);

/*
 TODO:
 cpu = {
  averageUsage: 88,
  // multi-threads
  usages: [
    99,
    56,
    36,
    77
  ],
  frequencies: [
    2200,
    3300,
    4545,
    2432,
  ]
  info: {
    name: ...
    frequency: ...
  }
 }

TODO:
ram: {
  totalBytes: 99999,
  usedBytes: 333,
}

swap: {
  totalBytes: 99999,
  usedBytes: 333,
}

disk: {
  totalBytes: 99999,
  usedBytes: 333,
}
 */

function SystemMonitor({cpu, ram, swap, disk}) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cpu", "bar")}>
        <span className={cx("text")}>CPU: {cpu?.averageUsage}%</span>
        <ProgressBar value={cpu?.averageUsage}/>
      </div>
      <div className={cx("ram", "bar")}>
        <span className={cx("text")}>RAM: {ram?.usedPercent}%</span>
        <ProgressBar value={ram?.usedPercent}/>
      </div>
      <div className={cx("swap", "bar")}>
        <span className={cx("text")}>Swap: {swap?.usedPercent}%</span>
        <ProgressBar value={swap?.usedPercent}/>
      </div>
      <div className={cx("disk", "bar")}>
        <span className={cx("text")}>Disk: {disk?.usedPercent}%</span>
        <ProgressBar value={disk?.usedPercent}/>
      </div>
    </div>
  )
}

export default SystemMonitor;
