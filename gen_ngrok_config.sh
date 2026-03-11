#!/bin/sh
cat <<EOF > ngrok.yml
version: 3

agent:
  authtoken: $1
  api_key: $2

tunnels:
  dashboard:
    proto: http
    addr: 80
  miniserve:
    proto: http
    addr: 8080
  ssh_server:
    addr: 22
    proto: tcp
EOF
