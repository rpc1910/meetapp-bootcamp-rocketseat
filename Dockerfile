FROM node:10.13

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
COPY package.json $HOME/
COPY yarn.lock $HOME/
COPY docker-start.sh $HOME/
RUN chown -R app:app $HOME/*

USER root
WORKDIR $HOME
RUN yarn global add @adonisjs/cli
RUN yarn install
