const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
  isHSP: {
    type: Boolean,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})

statsSchema.methods.toJSON = function () {
  const stats = this
  const statsObject = stats.toObject()

  delete statsObject._id
  delete statsObject.__v

  return statsObject
}

const Stats = mongoose.model('Stats', statsSchema)


module.exports = Stats