FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY prisma ./prisma
COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "until pg_isready -h db -p 5432 -U admin; do sleep 2; done && npx prisma migrate deploy && npm run start"]
