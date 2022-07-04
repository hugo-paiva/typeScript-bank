import { v4 } from "uuid";
import { UserDataValidator } from "../../validators/userDataValidator";
import { AccountDataValidator } from '../../validators/accountDataValidator'
import { ApiResponse } from "../models";
import { Account } from "../models/account";
import { AccountsTable } from "../repositories/accounts";

class CreateAccountService {

    private accountsTable = AccountsTable;

    public async run(account: Account): Promise<ApiResponse> {

        const validAccountData = new AccountDataValidator(account);

        if (validAccountData.allErrors.length != 0) {
            throw new Error(`400: ${validAccountData.allErrors}`)
        }


        validAccountData.account.id = v4()

        const isAccountInserted = await new this.accountsTable().insertAccount(something goes here);

        if (isAccountInserted) {
            return {
                data: validAccountData.account,
                messages: []
            } as ApiResponse
        }

        return {
            data: validAccountData.account,
            messages: [ 'An error has occurred while creating user' ]
        } as ApiResponse

    }
}

export { CreateAccountService };