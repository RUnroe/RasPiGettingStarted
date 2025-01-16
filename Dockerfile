FROM node:18-alpine AS build

WORKDIR /project

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Create a production-ready image
FROM steebchen/nginx-spa:stable
WORKDIR /app
COPY --from=build /project/dist/raspiGettingStarted/. .

EXPOSE 80

CMD ["nginx"]