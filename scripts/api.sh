#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./api && docker run -p 8081:9000 --name spark-api -t mannuelf/spark-api:0.0.1
