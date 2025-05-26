FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY app1.js .
EXPOSE 8080
CMD ["npm", "start"]
