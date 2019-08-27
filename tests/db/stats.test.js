const request = require('supertest')
const app = require('../../server/server')
const Stats = require('../../db/models/stats')
const {
  setDbSettings,
  resultOne,
  resultTwo,
  resultThree
} = require('../fixtures/db')

beforeEach(setDbSettings)

test('test', async () => {
  const response = await request(app).get('/stats')
  console.log(response.body)
})