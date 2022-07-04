import { Account } from '../models/account';
import { client } from './database-configs';

class AccountsTable {
    public async insertAccount(account: Account): Promise<boolean> {
        try {
            client.connect();

            const queryForAccountInsertion = `INSERT into users (
                    id,
                    userId,
                    agency, 
                    agencyCheckDigit, 
                    accountNumber, 
                    accountCheckDigit, 
                    accountBalance,
                    password 
                ) values (
                    $1, $2, $3, $4, $5, $6, $7, $8
                ) RETURNING id`;

            account.password = 'senha';

            const result = await client.query(queryForAccountInsertion, [
                // TODO 
                account.userId,
                account.agency,
                account.agencyCheckDigit,
                account.accountNumber,
                account.accountCheckDigit,
                account.accountBalance,
                account.password,
            ]);
            console.log(result);

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
}

export { AccountsTable };