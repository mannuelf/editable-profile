FROM node:11.10.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3001

COPY package* ./
RUN npm install
COPY . .

CMD ["npm", "start"]
