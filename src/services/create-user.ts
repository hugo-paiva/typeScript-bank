import { v4 } from "uuid";
import { UserDataValidator } from "../../validators/userDataValidator";
import { CreateAccount } from "../controllers/create-account";
import { ApiResponse } from "../models";
import { Account } from "../models/account";
import { User } from "../models/user";
import { AccountsTable } from "../repositories/accounts";
import { UsersTable } from "../repositories/users";
import { GenerateAccountData } from "../utils/generateAccountData";

class CreateUserService {

    private usersTable = UsersTable;

    public async run(user: User): Promise<ApiResponse> {

        const validUserData = new UserDataValidator(user);

        if (validUserData.allErrors.length != 0) {
            throw new Error(`400: ${validUserData.allErrors}`)
        }
        const isUserAlreadyCreated = await new this.usersTable().lookUpUser(validUserData.user as User);
        console.log(isUserAlreadyCreated[0].id);

        if (!isUserAlreadyCreated) {
            validUserData.user.id = v4()

            const isUserInserted = await new this.usersTable().insertUser(validUserData.user as User);
        }

        const accountData = new GenerateAccountData();

        const isAccountCreated = await new AccountsTable().insertAccount(accountData as Account);


        // if (isUserInserted) {
        if (true) {
            return {
                data: validUserData.user,
                messages: []
            } as ApiResponse
        }

        return {
            data: validUserData.user,
            messages: [ 'An error has occurred while creating user' ]
        } as ApiResponse

    }
}

export { CreateUserService };