#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./api && docker build -t mannuelf/spark-api:0.0.1 .
