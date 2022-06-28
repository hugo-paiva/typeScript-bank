import { ApiResponse } from "../models";
import { User } from "../models/user";

class CreateUserService {
    private allErrors: string = '';
    public run(user: User): ApiResponse {
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }
        if (user.name.length < 5) {
            this.allErrors = this.allErrors += 'fullname is required /'
        }
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }
        if (!user.name) {
            this.allErrors = this.allErrors += 'name is required /'
        }

        return {} as ApiResponse
    }
}

export { CreateUserService }