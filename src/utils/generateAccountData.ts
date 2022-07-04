import { Account } from '../models/account';
import { v4 } from 'uuid';

class GenerateAccountData {
    private zeroFill(num: number): string {
        return num.toString().length === 1 ? `0${num}` : `${num}`;
    }

    private ramdomInterval(min: number, max: number): string {
        return this.zeroFill(Math.floor(Math.random() * (max - min + 1) + min));
    }

    public async execute(id: string): Promise<Account> {
        console.log('generating account...');
        return {
            id: v4(),
            agency: this.ramdomInterval(1000, 9999),
            
            agencyCheckDigit: this.ramdomInterval(0, 9),
            accountNumber: `${this.ramdomInterval(
                1000,
                9999,
            )}-${this.ramdomInterval(
                1000,
                9999,
            )}-${this.ramdomInterval(
                1000,
                9999,
            )}-${this.ramdomInterval(1000, 9999)}`,
            accountCheckDigit: this.ramdomInterval(1, 99),
            accountBalance: '0',
            userId: id,
        } as Account;
    }
}

export { GenerateAccountData };