class NameValidator {
    public name: string
    public allErrors: string

    constructor (name: string) {

        this.name = this.validate(name)
        this.allErrors = ''

    }

    private validate(name: string): string {
        name = name.trim();
        
        if (name.length == 0) {
            this.allErrors += 'name field can not be empty /'
            return ''
        }

        if ( name.length < 5 ) {
            this.allErrors += 'full name is required /'
            return ''
        }


        return name;
    }

}

export { NameValidator };