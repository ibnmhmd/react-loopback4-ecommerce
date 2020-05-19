FROM node:latest

RUN echo '############ started executing the client docker file ############# .'

WORKDIR /usr/src/app/clientapp

COPY package.json .

RUN yarn install --silent
 
COPY . .

RUN pwd
RUN ls -l

EXPOSE 3000