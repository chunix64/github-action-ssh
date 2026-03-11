import classNames from "classnames/bind";

import styles from "./ServiceCard.module.scss";
const cx = classNames.bind(styles);

function ServiceCard({ service }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{service.host}</div>
      <div className={cx("services")}>
        <span className={cx("service")}>
          ssh: {service.ssh.url}:{service.ssh.port}
        </span>
        <span className={cx("service")}>
          miniserve: {service.miniserve.url}:{service.miniserve.port}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
