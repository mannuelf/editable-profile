.PHONY: Spark networks edit profile application

help:
	@echo 'make wraps scripts and commands to make development easier'
	@echo
	@echo 'Available Commands                                                          🤖'
	@echo -------------------------------------------------------------------------------
	@echo 'build            Build the client and api containers'
	@echo 'api-up           Start the client container'
	@echo 'client-up        Start the api container'
	@echo -------------------------------------------------------------------------------

build:
	./scripts/_build-api.sh && ./scripts/_build-client.sh

client-up:
	./scripts/client.sh

api-up:
	./scripts/api.sh

clean:
	./scripts/clean.sh
