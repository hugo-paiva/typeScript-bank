class DateValidator {
    public date: string;
    public allErrors: string;

    public constructor( date: string ) {

        this.allErrors = '';
        this.date = this.validate(date);

    }

    private validate( date: string ) : string {

        if (date.length == 0) {
            this.allErrors += 'date field can not be empty /'
            return '';
        }

        if (!new Date(date).getTime()) {
            this.allErrors += 'this date is not valid'
            return '';
        }

        date = date.trim();

        return date;
    }
}

export { DateValidator };