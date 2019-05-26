FROM node:11-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY ./ ./

EXPOSE 3000

CMD yarn dev
