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
}
export default usersRepository