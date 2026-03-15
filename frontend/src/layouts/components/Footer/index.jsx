import HomeRepairServiceRounded from "@mui/icons-material/HomeRepairServiceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import TextSnippetRounded from "@mui/icons-material/TextSnippetRounded";
import classNames from "classnames/bind";
import { NavLink } from "react-router";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const navbarItems = [
	{
		to: "/",
		title: "Home",
		icon: HomeRoundedIcon,
	},
	{
		to: "/toolbox",
		title: "Toolbox",
		icon: HomeRepairServiceRounded,
	},
	{
		to: "/logs",
		title: "Logs",
		icon: TextSnippetRounded,
	},
	{
		to: "/terminal",
		title: "Terminal",
		icon: TerminalRoundedIcon,
	},
	{
		to: "/settings",
		title: "Settings",
		icon: SettingsRounded,
	},
];

function Footer() {
	return (
		<footer className={cx("wrapper")}>
			<nav className={cx("navbar")}>
				{navbarItems.map((item, index) => {
					const Icon = item.icon;
					return (
						<NavLink
							className={({ isActive }) => cx("nav-item", { active: isActive })}
							to={item.to}
							key={index}
						>
							<div className={cx("icon")}>
								<Icon />
							</div>
							<span className={cx("title")}>{item.title}</span>
						</NavLink>
					);
				})}
			</nav>
		</footer>
	);
}

export default Footer;
