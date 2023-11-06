FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
RUN npm install bootstrap
EXPOSE 8080
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html    