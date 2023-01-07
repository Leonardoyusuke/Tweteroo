import express from 'express'
import cors from "cors"

const server = express()
server.use(express.json)
server.use(cors())

const PORT = 4000



const usuarios = [{
  username: 'bobesponja',
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
}]
const tweet = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  },
  {
    username: "bobesponja",
    tweet: "teste2",
  },
]

server.get('/tweets', (request, response) => {
  response.send(tweet)
})

server.post("/sign-up", (request, response) => {
  const novoUsuario = request.body

  usuarios.push(novoUsuario)

  response.send(novoUsuario)
  console.log("ok")
})

server.post("/tweets", (request, response) => {
  const NovoTweet = request.body
  if (NovoTweet.username.includes(usuarios.username)) {
    tweet.push(NovoTweet)
    response.send(NovoTweet)
    console.log(tweet)
  }
  else {
    return "UNAUTHORIZED"
  }
})


server.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})