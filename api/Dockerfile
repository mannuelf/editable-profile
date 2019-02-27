FROM node:11.10.0-alpine

RUN mkdir -p /api/
WORKDIR /api

COPY package*.json /api/
RUN npm cache clean
RUN npm install
COPY . /api/

EXPOSE 9080

CMD ["npm", "start"]
