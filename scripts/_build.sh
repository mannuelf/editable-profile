#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./client &&
  docker build -t mannuelf/spark-client:0.0.1 . &&
  cd ./api &&
  docker build -t mannuelf/spark-api:0.0.1 .
