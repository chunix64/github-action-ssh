import classNames from "classnames/bind";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

import SystemMonitor from "@/components/SystemMonitor"
import Uptime from "@/components/Uptime"
import ServiceStatus from "@/components/ServiceStatus"
import ServiceList from "@/components/ServiceList"

function Home() {
  return (
    <div className={cx("wrapper")}>
      <SystemMonitor/>
      <div className={cx('widgets')}>
        <Uptime/>
        <ServiceStatus serviceName="Miniserve" status={1}/>
      </div>
      <ServiceList/>
    </div>
  )
}

export default Home;
