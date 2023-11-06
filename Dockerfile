FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
RUN npm run build
RUN npm install bootstrap


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html    