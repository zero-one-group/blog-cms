build-api:
	docker run --rm \
    --name pg-docker \
    -e POSTGRES_DB=cms_backend \
    -e POSTGRES_PASSWORD=postgres \
    -d -p 5432:5432 postgres

run-migrate-api:
	yarn db migrate:latest

run-seed-api:
	yarn db seed:run

run-rollback-api:
	yarn db migrate:rollback
