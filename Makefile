.PHONY: Spark networks edit profile application

help:
	@echo 'make wraps scripts and commands to make development easier'
	@echo
	@echo ' 🤖                       AVAILABLE COMMANDS                               🤖'
	@echo -------------------------------------------------------------------------------
	@echo ' build            Build the client and api containers'
	@echo ' rebuild          Rebuild flag docker-compose, rebuild client and api'
	@echo ' up               Pull mongodb and mongo-express down'
	@echo ' up-api           Start the client container'
	@echo ' up-client        Start the api container'
	@echo ' clean            Delete all containers'
	@echo -------------------------------------------------------------------------------

clean:
	docker ps -q | xargs docker stop ; docker system prune -a

build:
	./scripts/_build-client.sh && ./scripts/_build-api.sh

rebuild:
	docker-compose up --build

up-client:
	docker run -p 3000:3000 spark-client

up-api:
	docker run -p 3001:3001 spark-api

up:
	docker-compose up
