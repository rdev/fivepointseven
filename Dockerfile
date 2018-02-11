FROM mhart/alpine-node

EXPOSE 3000
WORKDIR /app

COPY package.json /app
COPY . /app

RUN yarn config set no-progress true
RUN yarn --silent

ENV NODE_ENV=production

RUN yarn build

CMD ["yarn", "production"]
