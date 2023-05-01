FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./front.conf /etc/nginx/conf.d/front.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
