const path = require('path');
const express = require('express');
require('../db/mongoose')
const Stats = require('../db/models/stats')

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT;

app.use(express.json())
app.use(express.static(publicPath));


app.get('/stats', async (req, res) => {
  try {
    const stats = await Stats.find()
    res.send(stats)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.post('/stats', async (req, res) => {
  const stats = new Stats({
    ...req.body
  })

  try {
    await stats.save()
    res.status(201).send(stats)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});