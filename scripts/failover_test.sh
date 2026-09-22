#!/usr/bin/env bash
set -euo pipefail
printf 'Initial responses:\n'
for i in {1..6}; do curl -fsS http://localhost:8080/; echo; done
printf '\nStopping app1 to simulate instance failure...\n'
docker compose stop app1
sleep 2
for i in {1..6}; do curl -fsS http://localhost:8080/; echo; done
printf '\nRestoring app1...\n'
docker compose start app1
