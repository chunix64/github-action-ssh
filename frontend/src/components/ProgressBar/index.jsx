import classNames from "classnames/bind";

import styles from "./ProgressBar.module.scss";

const cx = classNames.bind(styles);

function ProgressBar({ value, min = 0, max = 100 }) {
	const percentage = ((value - min) / (max - min)) * 100;
	return (
		<div className={cx("wrapper")}>
			<div className={cx("bar")}>
				<div className={cx("fill")} style={{ width: `${percentage}%` }} />
			</div>
		</div>
	);
}

export default ProgressBar;
