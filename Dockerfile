FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run dev

EXPOSE 3000

CMD ["npm", "start"]
