FROM node:10-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "api.js"]