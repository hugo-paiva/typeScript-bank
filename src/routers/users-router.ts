import express from 'express'
import { v4 } from 'uuid'
import User from '../models/user'
import usersRepository from '../repositories/users-repository'

const usersRouter = express.Router()

usersRouter.post('/users', (req, res) => {
    const user: User = req.body
    //TODO: Criar e salvar um novo item
    itensRepository.criar(item, (id) => {
        if (id) {
            res.status(201).location(`/itens/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
    usersRepository.create(user, (id) => {
        if (id) {
            res.status(201).location(`/users/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
    const id = 123
    res.status(201).location(`/users/${id}`).send()
    // res.send('Cria novo item')
})

usersRouter.get('/users', (req, res) => {
    const users: User[] = [
        {
            id: '1',
            name: 'Jao',
            birthday: Date.now().toString(),
            email: 'hugosousa76@gmail.com',
            cpf: 12345
        },
        {
            id: '2',
            name: 'Emanuel',
            birthday: Date.now().toString(),
            email: 'emanuel@gmail.com',
            cpf: 12345
        },
    ]
    res.json(users)
})

usersRouter.get('/users/:id', (req, res) => {
    const id: number = +req.params.id
    const user: User = {
            id: id.toString(),
            name: 'Jao',
            birthday: Date.now().toString(),
            email: 'hugosousa76@gmail.com',
            cpf: 12345
        }
    
    res.json(user)
    res.status(404).send()

    // res.send(`Lê o item ${id}`)
})

usersRouter.put('/users/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
    // res.send(`Atualiza o item ${id}`)
})

usersRouter.delete('/users/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
    // res.send(`Apaga o item ${id}`)
})

export default usersRouter
