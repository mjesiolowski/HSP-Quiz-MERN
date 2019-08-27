const request = require('supertest')
const app = require('../../server/server')
const Stats = require('../../db/models/stats')
const {
  setDbSettings,
  resultOne,
} = require('../fixtures/db')

beforeEach(async () => {
  await setDbSettings()
})

describe('API tests', () => {
  const collectionLength = 3

  test('should fetch statistics', async () => {
    const response = await request(app).get('/stats')
    const { body, status } = response

    expect(body).toHaveLength(collectionLength)
    expect(resultOne).toMatchObject(body[0])
    expect(status).toBe(200)
  })

  test('should post a document', async () => {
    const toPost = {
      gender: "M",
      age: 50,
      result: 75
    }

    const response = await request(app).post('/stats')
      .send(toPost)

    const { body, status } = response

    expect(body).toMatchObject(toPost)
    expect(status).toBe(201)
  })

  test('should not post a document', async () => {
    const response = await request(app).post('/stats')
      .send({
        gender: "M",
        age: 50
      })

    const { body, status } = response

    expect(body.errors.result.message).toBe('Path `result` is required.')
    expect(status).toBe(500)
  })
})
