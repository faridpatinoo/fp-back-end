# Build Stage
FROM node:20.18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
EXPOSE 443
CMD node server.js