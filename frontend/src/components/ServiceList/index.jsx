import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import classNames from "classnames/bind";
import { getTunnels } from "@/api/session";
import ServiceCard from "@/components/ServiceCard";

import styles from "./ServiceList.module.scss";

const cx = classNames.bind(styles);

const tunnels = await getTunnels();

function ServiceList() {
	const isEmpty = !tunnels?.length;

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>Tunnels</div>
			<div className={cx("links")}>
				{tunnels?.map((item, index) => {
					return <ServiceCard service={item} key={index} />;
				})}
			</div>
			<div className={cx("message", { hide: !isEmpty })}>
				<WarningRoundedIcon /> No service found
			</div>
		</div>
	);
}

export default ServiceList;
