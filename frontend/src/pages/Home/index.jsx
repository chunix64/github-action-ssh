import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import SystemMonitor from "@/components/SystemMonitor";
import Uptime from "@/components/Uptime";
import ServiceStatus from "@/components/ServiceStatus";
import ServiceList from "@/components/ServiceList";

import { getSystemInfo } from "@/api/polling";
import config from "@/config";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

const system_info_interval = config?.app?.system_info_interval ?? 0;

function Home() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      setSystemInfo(await getSystemInfo());
    }, system_info_interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <SystemMonitor systemInfo={systemInfo} />
      <div className={cx("widgets")}>
        <Uptime />
        <ServiceStatus serviceName="Miniserve" status={systemInfo?.miniserve} />
      </div>
      <ServiceList />
    </div>
  );
}

export default Home;
