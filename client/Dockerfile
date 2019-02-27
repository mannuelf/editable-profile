FROM node:11.10.0-alpine

RUN mkdir -p /client
WORKDIR /client

COPY package*.json /client/
RUN npm cache clean
RUN npm install
COPY . /client/

EXPOSE 3080

CMD ["npm", "start"]
