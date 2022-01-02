DOCKERFLAG=COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

run-api:
	$(DOCKERFLAG) docker-compose up

build-api:
	$(DOCKERFLAG) docker-compose build

down-api:
	$(DOCKERFLAG) docker-compose down

run-migrate-api:
	$(DOCKERFLAG) docker-compose -f docker-compose.yaml -f compose-file/migrate.yaml up --exit-code-from fastify_api

run-rollback-api:
	$(DOCKERFLAG) docker-compose -f docker-compose.yaml -f compose-file/rollback.yaml up --exit-code-from fastify_api
