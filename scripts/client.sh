#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./client && docker run -p 8080:3000 --name spark-client -t mannuelf/spark-client:0.0.1 .
