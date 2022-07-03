import { User } from '../models/user'
import database from './database'
import { pool } from './database-configs'

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
    getCustomers: (req: Request, res: Response) {
    pool.connect(function (err: Error, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM public.users WHERE id = $1 AND deletedAt IS NULL', [req.user_id], function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            let obj = result.rows;
            res.status(200).send(obj);
        })
    })
}
}

export default usersRepository