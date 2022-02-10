class Bank{
    constructor(name, accounts){
        this.name = name;
        this.accounts = accounts;
    }
    getC(accNum){
        let c = this.accounts.filter(client => client["accNum"] === accNum)[0];
        return c;
    }
    getBalance(accNum){
        let bc = this.getC(accNum)
        return bc["funds"];
    }
    addC(client){
        this.accounts.push(client);
    } 
    withdraw(quantity, accNum){
        let rc = this.getC(accNum);
        if (rc["funds"] >= quantity){
            rc["funds"] -= quantity;
            return quantity;
        }else{
            console.log("Not enough money.");
        }
    }
    deposit(quantity, destinyAccount){
        let destinyUser = this.getC(destinyAccount);
        destinyUser["funds"] += quantity;
    }
}

class Client{
    constructor(name, cash, account){
        this.name = name;
        this.cash = cash;
        this.account = account;
    }
    getBalance(){
        return bank.getBalance(this.account);
    }
    deposit(quantity, receiver){
        if(this.cash<quantity){
            console.log("Not enough cash");
        } else{
            this.cash -= quantity;
            bank.deposit(quantity, receiver);
        }
    }
    withdraw(quantity){
        this.cash += bank.withdraw(quantity, this.account)
    }
}

function createC(name, accNum, fund, cash){
    let newC = new Client(name, cash, accNum);
    bank.addC({"accNum":accNum, "cName":name, "funds":fund});
    return newC;
}
