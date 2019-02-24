FROM mhart/mhart/alpine-node:latest

WORKDIR /server

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 80

CMD ["npm", "start"]
