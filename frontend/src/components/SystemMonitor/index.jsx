import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getSystemInfo } from "@/api/polling";

import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ProgressBar from "@/components/ProgressBar";

import styles from "./SystemMonitor.module.scss";
const cx = classNames.bind(styles);

function SystemMonitor() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const interval = setInterval(async () => {
      setData(await getSystemInfo());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log(data);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("cpu", "bar")}>
        <div className={cx("text")}>
          <MemoryRoundedIcon/>
          <span className={cx('label')}>CPU:</span>
          <span className={cx('value')}>{data?.cpu?.averageUsage}%</span>
        </div>
        <ProgressBar value={data?.cpu?.averageUsage} />
      </div>
      <div className={cx("ram", "bar")}>
        <div className={cx("text")}>
          <DnsRoundedIcon/>
          <span className={cx('label')}>RAM:</span>
          <span className={cx('value')}>{data?.memory?.ram?.percent}%</span>
        </div>
        <ProgressBar value={data?.memory?.ram?.percent} />
      </div>
      <div className={cx("swap", "bar")}>
        <div className={cx("text")}>
          <SwapHorizontalCircleRoundedIcon/>
          <span className={cx('label')}>Swap:</span>
          <span className={cx('value')}>{data?.memory?.swap?.percent}%</span>
        </div>
        <ProgressBar value={data?.memory?.swap?.percent} />
      </div>
      <div className={cx("disk", "bar")}>
        <div className={cx("text")}>
          <StorageRoundedIcon/>
          <span className={cx('label')}>Disk:</span>
          <span className={cx('value')}>{data?.disk?.percent}%</span>
        </div>
        <ProgressBar value={data?.disk?.percent} />
      </div>
    </div>
  )
}

export default SystemMonitor;
