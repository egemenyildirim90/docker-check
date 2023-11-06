FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html