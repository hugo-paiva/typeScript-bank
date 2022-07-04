class EmailValidator {
    public email: string;
    public allErrors: string;
    private regexForEmail = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;

    public constructor( email: string ) {
        this.allErrors = '';
        this.email = this.validate(email);
    }

    private validate(email : string) : string {

        if (email.length == 0) {
            this.allErrors += 'email field can not be empty /'
            return '';
        }

        if (! this.regexForEmail.test(email)) {
            this.allErrors += 'email is invalid /'
            return '';
        }

        email = email.trim();

        return email;
    }
}

export { EmailValidator };