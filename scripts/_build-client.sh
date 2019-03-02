#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./client/ && docker build -t spark-client .
