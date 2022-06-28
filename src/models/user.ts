import { v4 as uuid } from 'uuid'
// Nome
// Data de nascimento
// Email
// CPF
// ID (uuid)

type User = {
    name: string
    birthday: string
    email: string
    cpf: number
    id: string
}

export default User