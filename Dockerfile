FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
EXPOSE 8080
CMD ["npm", "run", "start:dev"]
