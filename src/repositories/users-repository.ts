import User from '../models/user'
import database from './database'
const usersRepository = {
    create: (user: User, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO users ( name , birthday , cpf , email ) VALUES (?, ?, ?, ?)'
        const params = [user.name, user.birthday, user.cpf, user.email]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    readAll: (callback: (users: User[]) => void) => {
        const sql = 'SELECT * FROM users'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },
}

export default usersRepository