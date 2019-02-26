FROM node:11.10.0-alpine

WORKDIR /client

COPY package*.json /client/

COPY . /client/

EXPOSE 3000

CMD ["node", "react-scripts start"]
