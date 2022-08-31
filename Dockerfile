# Stage 1
FROM --platform=$BUILDPLATFORM node:12.7-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json /app
RUN npm install
COPY . /app
RUN npm run build --prod 

# Stage 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/angular-mqtt-example /usr/share/nginx/html
