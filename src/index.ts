import express from "express";
import usersRouter from "./routers/users-router";
import cors from 'cors';

const PORT =  process.env.PORT || 4000;

// const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const HOSTNAME = 'http://localhost';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api', usersRouter)

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Servidor ativado com sucesso ${HOSTNAME}:${PORT}`)
})