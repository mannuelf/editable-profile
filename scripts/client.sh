#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./client && npm install && npm start
