import classNames from "classnames/bind";

import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
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

function SystemMonitor({ cpu, ram, swap, disk }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cpu", "bar")}>
        <div className={cx("text")}>
          <MemoryRoundedIcon/>
          <span className={cx('label')}>CPU:</span>
          <span className={cx('value')}>{cpu?.averageUsage}%</span>
        </div>
        <ProgressBar value={cpu?.averageUsage} />
      </div>
      <div className={cx("ram", "bar")}>
        <div className={cx("text")}>
          <DnsRoundedIcon/>
          <span className={cx('label')}>RAM:</span>
          <span className={cx('value')}>{ram?.usedPercent}%</span>
        </div>
        <ProgressBar value={ram?.usedPercent} />
      </div>
      <div className={cx("swap", "bar")}>
        <div className={cx("text")}>
          <SwapHorizontalCircleRoundedIcon/>
          <span className={cx('label')}>Swap:</span>
          <span className={cx('value')}>{swap?.usedPercent}%</span>
        </div>
        <ProgressBar value={swap?.usedPercent} />
      </div>
      <div className={cx("disk", "bar")}>
        <div className={cx("text")}>
          <StorageRoundedIcon/>
          <span className={cx('label')}>Disk:</span>
          <span className={cx('value')}>{disk?.usedPercent}%</span>
        </div>
        <ProgressBar value={disk?.usedPercent} />
      </div>
    </div>
  )
}

export default SystemMonitor;
