var BankAccount = /** @class */ (function () {
    function BankAccount(ownerName, accountNumber, balance) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ;
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    ;
    BankAccount.prototype.getAccountInfo = function () {
        return "Account owner: ".concat(this.ownerName, ", balance: ").concat(this.balance);
    };
    return BankAccount;
}());
var account = new BankAccount("Mercy", "123456789", 0);
account.deposit(500);
account.getAccountInfo();
console.log(account.getAccountInfo());
// Output: Owner: Mercy, Balance: 500
// Should NOT be able to access accountNumber or balance directly
