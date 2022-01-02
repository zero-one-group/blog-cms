# syntax=docker/dockerfile:experimental
FROM node:16-alpine as base

RUN yarn add global concurrently

WORKDIR /src
COPY package.json /
COPY yarn.lock /
EXPOSE 3051

FROM base as production
ENV NODE_ENV=production
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache
RUN --mount=type=cache,target=/tmp/yarn_cache yarn install --prefer-online --frozen-lockfile
RUN yarn build
COPY . /
CMD ["yarn", "start"]

FROM base as dev
ENV NODE_ENV=development
ARG CACHEBUST=1
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache
RUN --mount=type=cache,target=/tmp/yarn_cache yarn install --prefer-online
COPY . /
CMD ["yarn", "dev"]
