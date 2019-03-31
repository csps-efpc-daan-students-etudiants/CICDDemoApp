
docker pull postgres:alpine && \
mkdir -p $HOME/docker/volumes/posgtgres && \
docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres:alpine
docker run --rm -d --name pg-web -p 8081:8081 --link db:db -e DATABASE_URL=postgres://postgres:postgres@db:5432/postgres sosedoff/pgweb
