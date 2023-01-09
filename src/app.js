import express from 'express'
import cors from "cors"

const server = express()
server.use(express.json())
server.use(cors())

const PORT = 4000
const usuarios = []
const tweet = []

server.get('/tweets', (request, response) => {

  
  tweet.forEach((t) => { 
    const user = usuarios.find((u)=> u.username===t.username) 
    t.avatar= (user.avatar)
  });


  const tweetReverse = [...tweet] 
  const ultimosTweets = tweetReverse.reverse().slice(0,10)


  response.send(ultimosTweets)
})

server.post("/sign-up", (request, response) => {
  const novoUsuario = request.body

  usuarios.push(novoUsuario)

  response.send(novoUsuario)
  console.log("ok")
})

server.post("/tweets", (request, response) => {
    const username = request.body.username
    const NovoTweet = request.body
    if(usuarios.find(nome => nome.username === username)){
    tweet.push(NovoTweet)
    response.send(NovoTweet)
    console.log(tweet)}
    else{
    response.send("UNAUTHORIZED");
  }  
})


server.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})