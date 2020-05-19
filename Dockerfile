FROM node:latest

RUN echo '############ started executing the server docker file ############# .'

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent
 
COPY . .

EXPOSE 3001