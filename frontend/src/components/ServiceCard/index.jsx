import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import classNames from "classnames/bind";

import styles from "./ServiceCard.module.scss";

const cx = classNames.bind(styles);

function ServiceCard({ service }) {
	const group = [
		{ key: "dashboard", label: "dashboard", Icon: DashboardRoundedIcon },
		{ key: "ssh", label: "ssh", Icon: TerminalRoundedIcon },
		{ key: "miniserve", label: "miniserve", Icon: StorageRoundedIcon },
		{ key: "others", label: "unknown", Icon: MiscellaneousServicesRoundedIcon },
	];

	return (
		<div className={cx("wrapper")}>
			<div className={cx("title")}>{service?.provider}</div>
			<div className={cx("services")}>
				{group.flatMap(({ key, label, Icon }) =>
					service?.[key]?.map((item, index) => {
						let url = `${item.url}:${item.port}`;

						if (key === "ssh") {
							if (item.port === 22 || !item.port) {
								url = item.url;
							}
						} else {
							if (item.port === 80 || item.port === 443 || !item.port) {
								url = item.url;
							}
						}

						return (
							<div key={`${key}-${index}`} className={cx("service")}>
								<Icon />
								<span className={cx("text")}>
									{label}:{" "}
									{key === "ssh" ? (
										[url]
									) : (
										<a className={cx("link")} href={url}>
											{url}
										</a>
									)}
								</span>
							</div>
						);
					}),
				)}
			</div>
		</div>
	);
}

export default ServiceCard;
