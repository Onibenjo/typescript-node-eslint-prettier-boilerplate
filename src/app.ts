import dotenv from 'dotenv'
import express from 'express'

dotenv.config({
    path: '.env'
})

class Server {
    public app = express()
}

const server = new Server()

const port = process.env.PORT || 5000

server.app.listen(port, () => console.log(`> Listening on port ${port}`))