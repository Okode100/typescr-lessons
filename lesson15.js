var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount1 = /** @class */ (function () {
    function BankAccount1(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }
    BankAccount1.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount1;
}());
// 🆕 Child class that inherits from BankAccount
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(ownerName, balance, interestRate) {
        var _this = _super.call(this, ownerName, balance) || this; // call the constructor of BankAccount
        _this.interestRate = interestRate;
        return _this;
    }
    // Can access protected balance here!
    SavingsAccount.prototype.addInterest = function () {
        var interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log("Interest added: ".concat(interest));
    };
    return SavingsAccount;
}(BankAccount1));
var VipAccount = /** @class */ (function (_super) {
    __extends(VipAccount, _super);
    function VipAccount(ownerName, balance, interestRate) {
        return _super.call(this, ownerName, balance, interestRate) || this; // call the constructor of SavingsAccount
    }
    VipAccount.prototype.applyBonus = function () {
        var bonus = 200;
        if (this.balance > 5000) {
            this.balance += bonus;
            console.log("Bonus applied: ".concat(bonus));
        }
        else {
            console.log("No bonus applied.");
        }
    };
    ;
    return VipAccount;
}(SavingsAccount));
var vipAccount = new VipAccount("Mercyn Omondi", 6000, 0.01);
vipAccount.getBalance();
vipAccount.addInterest();
vipAccount.applyBonus();
vipAccount.getBalance();
console.log(vipAccount.getBalance());
// 🧪 Let's test it!
