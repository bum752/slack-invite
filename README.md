# slack invite

## Docker

### Dockerfile edit
`ENV SLACK_WORKSPACE <workspace>`
`ENV SLACK_TOKEN <token>`

### Docker build
`docker build -t slack-invite .`

### Docker run
`docker run -p 80:3000 slack-invite`

## Heroku
`heroku login`
`heroku container:push web --app ${YOUR_APP_NAME}`
