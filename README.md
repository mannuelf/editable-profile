# Editable Profile

Editable Profile project for Spark networks.

## Install docker-compose 1.23.2

https://docs.docker.com/compose/install/

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## Build containers

```bash
cd client && docker build -t mannuelf/spark-client:0.0.1 .
```

```bash
cd api && docker build -t mannuelf/spark-api:0.0.1 .
```

## Run containers locally

```bash
cd client && docker run -p 8080:3000 --name spark-client -t mannuelf/spark-client:0.0.1
```

```bash
cd api && docker run -p 8081:9000 --name spark-api -t mannuelf/spark-api
```

## Run Client

```bash
make client
```

## Run Api

```bash
make api
```