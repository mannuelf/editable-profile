#!/bin/bash
set -e
set -o pipefail

docker run --rm -d -p 3001:3001/tcp editable-profile_api:latest
