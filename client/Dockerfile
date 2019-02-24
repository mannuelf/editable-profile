FROM mhart/mhart/alpine-node:latest

WORKDIR /client

COPY package*.json /client/

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]
