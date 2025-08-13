#!/bin/sh
cat <<EOF > ngrok.yml
    version: 2
    authtoken: $1
    tunnels:
      web_app:
        addr: 80
        proto: http
      ssh_server:
        addr: 22
        proto: tcp
EOF
