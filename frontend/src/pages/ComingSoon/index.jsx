import classNames from "classnames/bind";

import styles from "./ComingSoon.module.scss";
const cx = classNames.bind(styles);

function ComingSoon() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img")}>
        <img
          src="/assets/img/Page_Under_Construction.png"
          alt="Coming Soon ..."
        />
      </div>
      <span className={cx("text")}>
        This page is currently under construction. It will be available soon.
      </span>
    </div>
  );
}

export default ComingSoon;
