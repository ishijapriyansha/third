FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY app2.js .
CMD ["npm", "start"]
