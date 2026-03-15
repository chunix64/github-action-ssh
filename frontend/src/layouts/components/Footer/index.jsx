import { NavLink } from "react-router";
import classNames from "classnames/bind";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeRepairServiceRounded from "@mui/icons-material/HomeRepairServiceRounded";
import TextSnippetRounded from "@mui/icons-material/TextSnippetRounded";
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import SettingsRounded from "@mui/icons-material/SettingsRounded";

import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

const navbarItems = [
  {
    to: "/home",
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
          var Icon = item.icon;
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
