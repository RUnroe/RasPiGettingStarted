FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Create a production-ready image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm index.html
COPY --from=build /app/dist/raspiGettingStarted .

EXPOSE 80
