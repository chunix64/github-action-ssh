import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getSystemInfo } from "@/api/polling";

import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';

import ProgressBar from "@/components/ProgressBar";
import MonitorBar from "@/components/SystemMonitor/MonitorBar";

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

  return (
    <div className={cx("wrapper")}>
      <MonitorBar label="CPU" value={data?.cpu?.averageUsage} />
      <MonitorBar label="RAM" value={data?.memory?.ram?.percent} Icon={DnsRoundedIcon} />
      <MonitorBar label="SWAP" value={data?.memory?.swap?.percent} Icon={SwapHorizontalCircleRoundedIcon} />
      <MonitorBar label="DISK" value={data?.disk?.percent} Icon={StorageRoundedIcon} />
    </div>
  )
}

export default SystemMonitor;
