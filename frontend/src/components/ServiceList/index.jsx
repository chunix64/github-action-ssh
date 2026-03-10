import classNames from "classnames/bind";

import ServiceCard from "@/components/ServiceCard"
import styles from "./ServiceList.module.scss";
const cx = classNames.bind(styles);

const fakeServices = [
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
  {
    host: "ngrok",
    ssh: {
      url: "0.tcp.ngrok.io",
      port: 18651,
    },
    miniserve: {
      url: "https://c786-135-232-216-69.ngrok-free.app",
      port: 1312,
    }
  },
]

function ServiceList() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('links')}>
        {fakeServices.map((item, index) => {
          return <ServiceCard service={item} key={index}/>
        })}
      </div>
    </div>
  )
}

export default ServiceList;
