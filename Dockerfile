FROM node:11-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN apk add --no-cache --virtual .gyp python make g++ \
  && yarn install \
  && apk del .gyp

COPY ./ ./

EXPOSE 3000

CMD yarn dev
