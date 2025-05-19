class BankAccount {
    public ownerName: string;
    private accountNumber: string;
    protected balance: number;
    constructor(ownerName: string, accountNumber: string, balance: number) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
        };
        deposit(amount: number): void {
            this.balance += amount;
        };
        getAccountInfo(): string {
            return `Account owner: ${this.ownerName}, balance: ${this.balance}`;
        }
}
const account = new BankAccount("Mercy", "123456789",0);
account.deposit(500);
account.getAccountInfo(); 
console.log(account.getAccountInfo());
// Output: Owner: Mercy, Balance: 500

// Should NOT be able to access accountNumber or balance directly
