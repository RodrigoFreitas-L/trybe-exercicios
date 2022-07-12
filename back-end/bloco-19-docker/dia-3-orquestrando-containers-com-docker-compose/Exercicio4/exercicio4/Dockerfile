FROM node:16 AS first-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm run build

FROM nginx AS second-stage

COPY --from=first-stage /app/build/ /usr/share/nginx/html

EXPOSE 80