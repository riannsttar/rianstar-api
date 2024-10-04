import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.send(201)
})

app.get('/usuarios', (req, res) => {
    res.send(200)
})

app.listen(3000)