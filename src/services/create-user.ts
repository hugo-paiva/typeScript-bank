import { v4 } from "uuid";
import { ApiResponse } from "../models";
import { User } from "../models/user";

class CreateUserService {
    private regexForEmail = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;

    private allErrors: string = '';

    public run(user: User): ApiResponse {
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }
        if (user.name.length < 5) {
            this.allErrors = this.allErrors += 'fullname is required /'
        }
        if (! this.regexForEmail.test(user.email)) {
            this.allErrors = this.allErrors += 'email is invalid /'
        }
        if (!new Date(user.birthday).getTime()) {
            this.allErrors = this.allErrors += 'name is required /'
        }

        if (this.allErrors.length != 0) {
            throw new Error(`400: ${this.allErrors}`)

        }

        user.id = v4()

        return {
            data: user,
            messages: []
        } as ApiResponse
    }
}

export { CreateUserService };