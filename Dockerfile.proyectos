FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/proyectos ./proyectos
COPY config/database.js .

EXPOSE 3000

CMD ["npm", "start"]
