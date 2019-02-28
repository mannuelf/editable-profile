FROM node:11.10.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./api/package*.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY ./api/* /user/src/app

EXPOSE 9080

CMD ["npm", "start"]
