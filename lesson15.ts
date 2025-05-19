class BankAccount1 {
    public ownerName: string;
    protected balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }
}

// 🆕 Child class that inherits from BankAccount
class SavingsAccount extends BankAccount1 {
    private interestRate: number;

    constructor(ownerName: string, balance: number, interestRate: number) {
        super(ownerName, balance); // call the constructor of BankAccount
        this.interestRate = interestRate;
    }

    // Can access protected balance here!
    public addInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest added: ${interest}`);
    }
}
class VipAccount extends SavingsAccount {
    constructor(ownerName: string, balance: number, interestRate: number) {
        super(ownerName, balance, interestRate); // call the constructor of SavingsAccount
    }
    applyBonus(): void {
        const bonus = 200;
        if (this.balance > 5000){
            this.balance += bonus;
            console.log(`Bonus applied: ${bonus}`);
        } else {
            console.log(`No bonus applied.`);
        }
    }; 
}
const vipAccount = new VipAccount("Mercyn Omondi", 6000, 0.01);
vipAccount.getBalance();
vipAccount.addInterest();
vipAccount.applyBonus();
vipAccount.getBalance();

console.log(vipAccount.getBalance());

// 🧪 Let's test it!

