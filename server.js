const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api', (req, res) => {
  console.log(req.body.password)
  res.json({
    message: `Recibido el password ${req.body.password}`
  })
})

app.listen(4000, () => {
  console.log('Api funcionando en el puerto ' + 4000)
})
