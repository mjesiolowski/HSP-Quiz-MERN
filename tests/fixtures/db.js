const mongoose = require('mongoose')
const Stats = require('../../db/models/stats')

const resultOne = {
  _id: new mongoose.Types.ObjectId(),
  age: 20,
  gender: "F",
  result: 50
}

const resultTwo = {
  _id: new mongoose.Types.ObjectId(),
  age: 30,
  gender: "M",
  result: 70
}

const resultThree = {
  _id: new mongoose.Types.ObjectId(),
  age: 40,
  gender: "M",
  result: 90
}

const setDbSettings = async () => {
  // await Stats.deleteMany()
  await new Stats(resultOne).save()
  await new Stats(resultTwo).save()
  await new Stats(resultThree).save()
}

module.exports = {
  setDbSettings,
  resultOne,
  resultTwo,
  resultThree
}