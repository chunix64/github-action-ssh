import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import classNames from "classnames/bind";

import styles from "./SearchBar.module.scss";

const cx = classNames.bind(styles);

function SearchBar() {
	return (
		<div className={cx("wrapper")}>
			<input className={cx("bar")} type="text" placeholder="Search" />
			<div className={cx("icon")}>
				<SearchRoundedIcon />
			</div>
		</div>
	);
}

export default SearchBar;
