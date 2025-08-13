#!/bin/sh
cat <<EOF > ngrok.yml
version: 3

agent:
  authtoken: $1
  api_key: $2

tunnels:
  miniserve:
    proto: http
    addr: 80
  ssh_server:
    addr: 22
    proto: tcp
EOF
