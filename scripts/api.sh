#!/usr/bin/env bash

set -efu
set -o pipefail

cd ./api && npm install && npm start
