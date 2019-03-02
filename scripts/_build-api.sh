#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./api/ && docker build -t spark-api .
