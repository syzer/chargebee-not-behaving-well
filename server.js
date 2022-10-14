import express from 'express'
const app = express()
const port = 5283

app.get('/', (req, res) => {
  const coinToss = Math.random() > 0.5 ? 'heads' : 'tails'
  const randDelay = Math.floor(Math.random() * 1000)

  return coinToss === 'heads'
    ? setTimeout (() => res.send('heads'), randDelay)
    : setTimeout(() => res.status(500).send('error'), 3000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
