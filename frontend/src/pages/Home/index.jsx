import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getSystemInfo } from "@/api/polling";
import ServiceList from "@/components/ServiceList";
import ServiceStatus from "@/components/ServiceStatus";
import SystemMonitor from "@/components/SystemMonitor";
import Uptime from "@/components/Uptime";

import config from "@/config";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const system_info_interval = config?.app?.system_info_interval ?? 0;

function Home() {
	const [systemInfo, setSystemInfo] = useState(null);

	useEffect(() => {
		const fetchSystemInfo = async () => {
			setSystemInfo(await getSystemInfo());
		};

		fetchSystemInfo();

		if (system_info_interval > 0) {
			const interval = setInterval(fetchSystemInfo, system_info_interval);
			return () => clearInterval(interval);
		}
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
