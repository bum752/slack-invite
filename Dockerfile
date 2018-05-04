FROM node:8.9.4
MAINTAINER jbshin <bum752@gmail.com>

RUN mkdir -p slack-invite
WORKDIR /slack-invite
ADD . /slack-invite
RUN npm install -g webpack babel-cli cross-env \
  && npm install

# 환경변수
#ENV NODE_ENV production
ENV SLACK_WORKSPACE <workspace>
ENV SLACK_TOKEN <token>

EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]
