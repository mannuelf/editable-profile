#!/bin/bash
set -e

docker run --rm -d -p 3000:3000/tcp editable-profile_client:latest
