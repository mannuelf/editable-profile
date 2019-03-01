# Spark Editable Profile

Editable Profile project for Spark Networks.

This is a mono repository containing two application.

1. client
2. api

## Client

I have chosen React Js for the front end. I've used `create-react-app` to scaffold the app. I am using SASS (Sass flavour). I am also using Bulma front end framework.

## Api

I am using an express server for the back-end. I used `express-generator` to scaffold the app. using MonogoDB for the database. I am using Docker and docker-compose to manage containers.

I've setup two routes for the given endpoints, and setup on POST route to save the image.

```bash
curl http://localhost:3001/locations/cities
curl http://localhost:3001/user/attributes
curl http://localhost:3001/upload
```

![api](https://themwebs.me/images/api.png)

## Database - MongoDB

Using MongoDB, pull down a docker container, all handled by scripts.

### Local development

To start run helpful make commands:

```bash
make help

make build

make rebuild

make up-client

make up-api

make clean
```

First  `make build` to build local docker containers of he client and api. Second `make up` to bring up mongodb and mongo-express.

- I have dockerised the client and the api which is an express app.

#### Install Docker & Docker Compose

[https://docs.docker.com/install/linux/docker-ce/ubuntu/](www.docs.docker.com/install/linux/docker-ce/ubuntu/d)

[https://docs.docker.com/compose/install/](www.docs.docker.com/compose/install/)

#### Links

[https://facebook.github.io/create-react-app/](https://facebook.github.io/create-react-app/)

[https://bulma.io/](https://bulma.io/)

[https://sass-lang.com/](https://sass-lang.com/)

[https://insomnia.rest/](https://insomnia.rest/)