# 🚀 Ubuntu Linux SSH via ngrok GitHub Action

This GitHub Action sets up an Ubuntu Linux environment with SSH access tunneled through **ngrok**, **cloudflared**, serving files with **miniserve**, cleaning up disk space, and adding swap memory.

---

## ⚙️ Features

- 📡 SSH access via ngrok and cloudflared tunnel
- 🌐 Optional HTTP file server with miniserve
- 🧹 Optional disk cleanup to free up space (~78GB → 125GB)
- 💾 Optional swap/virtual RAM extension
- ⏳ SSH session auto-kept alive up to 6 hours

---

## 🛠️ Inputs

| Name               | Type    | Default | Description                                     |
| ------------------ | ------- | ------- | ----------------------------------------------- |
| `SSH_MAX_TIME`     | Choice  | 2       | SSH max session duration in hours (1–6)         |
| `NGROK_AUTH_TOKEN` | String  | —       | Your ngrok API auth token to use ngrok          |
| `START_MINISERVE`  | Boolean | true    | Enable HTTP file server for file sharing        |
| `START_CLEAN_UP`   | Boolean | true    | Run disk cleanup to free space (~4 min runtime) |
| `SWAP_SPACE`       | String  | 16      | Add swap space / virtual RAM in GBs             |

---

## 🚀 Usage

1. Fork this repository
2. From the Actions tab → _Run workflow_
3. Enter your inputs: SSH session duration, ngrok token, and feature toggles
4. After the run, find the ngrok tunnel info in the logs:

```bash
🌐 Miniserve available at: https://<your-ngrok-url>
🔑 Connect with: ssh debuguser@<host> -p <port>
🔑 Connect with: sshpass -p 'password' ssh -o StrictHostKeyChecking=no debuguser@<host> -p <port>
🔑 Default password: password
TUNNEL: <url>
```

5. Connect via SSH or use miniserve for file sharing.

---

## 🔧 What it does internally

- Installs required packages: SSH server, ngrok, cloudflared
- Creates a user `debuguser` with password `password` and SSH key access
- Sets up ngrok tunnels for SSH and HTTP (miniserve)
- Optionally cleans up disk space and adds swap memory
- Keeps the SSH session alive as per your chosen duration

---

## 💡 Notes

- You should fork this repository and set it to private for better security and privacy.
- Cloudflare tunnel is unreliable and buggy. It might fail randomly
- **Password access** is `debuguser` / `password`. Use SSH keys for better security.
- You can cancel the workflow anytime, but SSH session ends when the runner stops.
- `START_MINISERVE` serves your entire filesystem (beware of sensitive data).
- Requires a valid ngrok auth token to create ngrok tunnels.
- The workflow support ngrok auth token as github secret: `secrets.NGROK_AUTH_TOKEN` (optional)
- Why 5h45m instead of 6h?
  Answer: The server is terminated before GitHub does, ensuring the workflow completes successfully and normalizes GitHub activity.

---

## 🧑‍💻 For customization

- Fork and customize `gen_ngrok_config.sh` in your repo to modify ngrok tunnel config (Open more port)

---

## 📝Todos

- Support custom username and password
- Support other tunnels
- Support custom domains
- Support terminal/SSH over web, especially mobile
- Support macOS and Windows SSH
- Add more documentation
- Open all common ports by default
- Finish the WebUI dashboard
- Reponsive the WebUI dashboard properly

## 🔗 External Sources

- [rokibhasansagar/slimhub_actions](https://github.com/rokibhasansagar/slimhub_actions) — Disk cleanup action
- [pierotofy/set-swap-space](https://github.com/pierotofy/set-swap-space) — Swap space setup action

## ⚖️ License

Apache 2.0 License — free and open source.
