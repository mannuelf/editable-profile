#!/usr/bin/env bash

.PHONY: Spark networks edit profile application

help:
	@echo 'make wraps scripts and commands to make development easier'
	@echo
	@echo ' 🤖                       AVAILABLE COMMANDS                               🤖'
	@echo -------------------------------------------------------------------------------
	@echo ' build            Build the api and client containers'
	@echo ' rebuild          Rebuild flag docker-compose, rebuild api and client'
	@echo ' up               Pull mongodb and mongo-express down & build api & client'
	@echo ' up-api           Start the client container'
	@echo ' up-client        Start the api container'
	@echo ' clean            Delete all containers'
	@echo -------------------------------------------------------------------------------

clean:
	docker ps -q | xargs docker stop ; docker system prune -a

build:
	./api/scripts/_build.sh && ./client/scripts/_build.sh

rebuild:
	docker-compose up --build

up-api:
	./api/scripts/run.sh

up-client:
	./client/scripts/run.sh

test-api:
	cd ./api npm jest

test-client:
	cd ./client npm jest

up:
	docker-compose up
