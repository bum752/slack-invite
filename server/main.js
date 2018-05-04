import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '/../public')))

app.post('/req', (req, res) => {
  console.log('request', req.body)
  axios({
    method: 'get',
    url: `https://${process.env.SLACK_WORKSPACE}.slack.com/api/users.admin.invite?token=${process.env.SLACK_TOKEN}&email=${req.body.email}`
  })
  .then((response) => {
    console.log('response', response.data)
    res.send(response.data)
  })
  .catch(console.error)
})

app.listen(port, () => {
  console.log('express running on', port)
})
