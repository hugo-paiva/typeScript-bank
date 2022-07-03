class ValidateName {
    public email: string
    public allErrors: string
    private regexRules = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/

    constructor (email: string) {
        this.email = this.validate(email.trim())
        this.allErrors = ''

    }

    private validate(email: string): string {
        
        if (email.length == 0) {
            this.allErrors = this.allErrors += 'email is required /'
            return ''
        }
        if ( this.regexRules.test(email) == false ) {
            this.allErrors = this.allErrors += 'email is not valid /'
            return ''
        }

        return email
    }


}