import classNames from "classnames/bind";

import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import MonitorBar from "@/components/SystemMonitor/MonitorBar";

import styles from "./SystemMonitor.module.scss";
const cx = classNames.bind(styles);

function SystemMonitor({ systemInfo }) {
  return (
    <div className={cx("wrapper")}>
      <MonitorBar label="CPU" value={systemInfo?.cpu?.averageUsage} />
      <MonitorBar
        label="RAM"
        value={systemInfo?.memory?.ram?.percent}
        Icon={DnsRoundedIcon}
      />
      <MonitorBar
        label="SWAP"
        value={systemInfo?.memory?.swap?.percent}
        Icon={SwapHorizontalCircleRoundedIcon}
      />
      <MonitorBar
        label="DISK"
        value={systemInfo?.disk?.percent}
        Icon={StorageRoundedIcon}
      />
    </div>
  );
}

export default SystemMonitor;
