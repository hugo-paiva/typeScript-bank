import { User } from "../src/models/user";
import { DateValidator } from "./dateValidator";
import { EmailValidator } from "./emailValidator";
import { NameValidator } from "./nameValidator";

class UserDataValidator {
    public user: Partial<User>
    public allErrors: string

    public constructor(user: User) {
        this.allErrors = ''
        this.user = this.validate(user);
    }

    private validate( user: User ) : Partial<User> {
        const validName = new NameValidator(user.name);
        const validEmail = new EmailValidator(user.email);
        const validBirthday = new DateValidator(user.birthday);

        this.allErrors = `${validEmail.allErrors}${validEmail.allErrors}${validBirthday.allErrors}`;

        const userData = {
            name: validName.name,
            email: validEmail.email,
            birthday: validBirthday.date
        } as Partial<User>;

        return userData;

    }
}

export { UserDataValidator };