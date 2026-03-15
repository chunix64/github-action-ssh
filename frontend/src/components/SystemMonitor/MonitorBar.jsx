import classNames from "classnames/bind";

import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import ProgressBar from "@/components/ProgressBar";
import { formatBytesPair } from "@/utils/bytes";

import styles from "./SystemMonitor.module.scss";
const cx = classNames.bind(styles);

function MonitorBar({
  Icon = MemoryRoundedIcon,
  label = "U/K",
  value,
  suffix = "%",
  precision = 2,
  usedBytes = 0,
  totalBytes = 0,
  isDetail = false,
}) {
  const { used, total } = formatBytesPair(usedBytes, totalBytes, precision);
  
  if (!value) {
    value = 0;
  }

  return (
    <div className={cx("bar")}>
      <div className={cx("text")}>
        <div className={cx("base")}>
          <Icon />
          <span className={cx("label")}>{label}</span>
          <span className={cx("value")}>
            {value?.toFixed(precision)}
            {suffix}
          </span>
        </div>
        <div className={cx('detail')}>
          {
            isDetail && (
              <>
                <span className={cx("used")}>{used}</span>
                <span className={cx("seperator")}>/</span>
                <span className={cx("total")}>{total}</span>
              </>
            )
          }
        </div>
      </div>
      <ProgressBar value={value} />
    </div>
  );
}

export default MonitorBar;
