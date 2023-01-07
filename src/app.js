import express, { application } from 'express'
import cors from 'cors'

app.use(cors())

const server = express()

const PORT = 5003 
server.get("/hello", (request, response) => {
  response.send("Meu primeiro servidor, yay!")
})

server.listen(PORT, () => {
  console.log('Xablauuuuu')
})