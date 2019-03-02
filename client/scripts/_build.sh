#!/usr/bin/env bash

set -efu
set -o pipefail

docker build -t mannuelf/spark-client .
