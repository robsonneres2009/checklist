FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install --production

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]