import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

import SystemMonitor from "@/components/SystemMonitor"
import Uptime from "@/components/Uptime"
import ServiceStatus from "@/components/ServiceStatus"
import ServiceList from "@/components/ServiceList"

function fakeCpu() {
  const [cpuUsage, setCpuUsage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(id);
  }, [])
  return {averageUsage: cpuUsage}
}

function fakeRamDisk() {
  const [ramUsage, setRamUsage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setRamUsage(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(id);
  }, [])
  return {usedPercent: ramUsage}
}

function Home() {
  var cpu = fakeCpu();
  var ram = fakeRamDisk();
  var swap = fakeRamDisk();
  var disk = fakeRamDisk();

  return (
    <div className={cx("wrapper")}>
      <SystemMonitor cpu={cpu} ram={ram} swap={swap} disk={disk}/>
      <div className={cx('widgets')}>
        <Uptime startTime={1773112200} endTime={1773237400}/>
        <ServiceStatus serviceName="Miniserve" status={1}/>
      </div>
      <ServiceList/>
    </div>
  )
}

export default Home;
