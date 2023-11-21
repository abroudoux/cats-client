
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5175

EXPOSE 5175

CMD [ "npm", "run", "dev" ]

