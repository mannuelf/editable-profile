FROM node:11.10.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY /client/package.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY /client /user/src/app

EXPOSE 3080

CMD ["npm", "start"]
