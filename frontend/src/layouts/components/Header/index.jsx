import classNames from "classnames/bind";
import { NavLink } from "react-router";

import config from "@/config";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
	const userMenu = [
		// {
		//   to: "/home",
		//   title: "Home"
		// }
	];

	return (
		<header className={cx("wrapper")}>
			<nav className={cx("nav")}>
				<div className={cx("brand")}>
					<NavLink to={config.routes.home}>Github action ssh</NavLink>
				</div>
				<div className={cx("menu")}>
					{userMenu.map((item, index) => (
						<NavLink to={item.to} key={index}>
							{item.title}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	);
}

export default Header;
