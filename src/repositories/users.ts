import { User } from '../models/user';
import { client } from './database-configs';

class UsersTable {
    public async insertUser(user: User): Promise<boolean> {
        try {
            client.connect();

            const queryLookUpForUser = `SELECT * FROM users WHERE email=$1`;

            const result = await client.query(queryLookUpForUser, [user.email])
            console.log(`agora é ${result.rows.length.toString()}`);
            // const queryForUserInsertion = `INSERT into users (
            //         id, name, email, birthday
            //     ) values (
            //         $1, $2, $3, $4
            //     ) RETURNING id`;

            // const result = await client.query(queryForUserInsertion, [
            //     user.id,
            //     user.name,
            //     user.email,
            //     user.birthday
            // ]);

            client.end();

            if ( result.rows.length != 0 ) {
                return true;
            } else {
                return false;
            }

        } catch (error) {

            client.end();
            throw new Error('503: Database error try again later')

        }
    }

    public async lookUpUser(user: User): Promise<any> {
        try {
            client.connect();

            const queryLookUpForUser = `SELECT * FROM users WHERE email=$1`;

            const result = await client.query(queryLookUpForUser, [user.email])

            client.end();

            if ( result.rows.length != 0 ) {
                return result.rows;
            } 

        } catch (error) {

            client.end();
            throw new Error('503: Database error try again later')

        }
    }
}

export { UsersTable };