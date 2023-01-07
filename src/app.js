import express from 'express'

const server = express()

server.use(express.json)
const PORT = 5003 

const usuarios = [{
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}]
const tweet = [{
	username: "bobesponja",
  tweet: "eu amo o hub"
}]



server.post("/sign-up", (request, response) => {
  const novoUsuario = request.body

  usuarios.push(novoUsuario)

  response.send(novoUsuario)
  console.log("ok")
})

server.post("/tweets",(request, response)=>{
  const NovoTweet = request.body

  tweet.push(NovoTweet)
  response.send(NovoTweet)
  console.log(tweet)

} )

server.listen(PORT, () => {
  console.log('Xablauuuuu')
})