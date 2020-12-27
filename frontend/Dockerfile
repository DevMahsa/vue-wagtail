FROM node:12.15.0 as base

WORKDIR /code/cms/frontend
COPY ./package*.json ./
RUN yarn install
COPY . .
