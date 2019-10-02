FROM node:alpine

ENV HOME=/home/app

COPY package*.json $HOME/
COPY yarn.lock $HOME/

WORKDIR $HOME
RUN yarn global add @adonisjs/cli
RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]

# adonis serve --dev --polling
