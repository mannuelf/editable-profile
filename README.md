# Editable Profile

Editable Profile project for Spark networks.

This is a mono repository containing two separate node application.

1. client
2. api
3. mongodb (database)

## Client

I have chosen React Js for the front end. I've used `create-react-app` to scaffold the app. I am using SASS (Sass flavour). I am also using Bulma front end framework.

## Api

I am using an express server for the back-end. I used `express-generator` to scaffold the app. using MonogoDB for the database. I am using Docker and docker-compose to manage containers.

I've setup two routes for the given endpoints, and setup on POST route to save the image.

```bash
http://localhost:9000/locations/cities
http://localhost:9000/user/attributes
```

[api](https://themwebs.me/images/api.png)

### Local development

To start run helpful make commands:

```bash
make help

make build

make client-up

make api-up
```

- I have dockerised the client and the api which is an express app.

#### Install Docker & Docker Compose

[https://docs.docker.com/install/linux/docker-ce/ubuntu/](www.docs.docker.com/install/linux/docker-ce/ubuntu/d)

[https://docs.docker.com/compose/install/](www.docs.docker.com/compose/install/)

#### Links

[https://facebook.github.io/create-react-app/](https://facebook.github.io/create-react-app/)

[https://bulma.io/](https://bulma.io/)

[https://sass-lang.com/](https://sass-lang.com/)

[https://insomnia.rest/](https://insomnia.rest/)