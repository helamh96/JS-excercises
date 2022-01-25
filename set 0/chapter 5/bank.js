let accounts = [];

function newAccount(account,user,amount){
    let acc = {username:user, balance:amount}
    accounts.push(acc);
}

function getAccount(username) {
    let foundUser;
    accounts.forEach(function (element, index) {
        if (element.username === username){
            foundUser = element;
        } 
    });
    return foundUser;
}


function deposit(username, amount) {
    let foundUser = getAccount(username, accounts);
    let deposited = foundUser.balance + amount;
    console.log("You have deposited $" + amount +".");
    return foundUser.balance += amount;
}

function withdraw(username, amount) {
    let foundUser = getAccount(username, accounts);
    if (amount > foundUser.balance){
        console.log("I am sorry, you do not have enough funds");
    } else {
        return foundUser.balance -= amount;
    }
}

function getBalance(username) {
    let foundUser = getAccount(username, accounts);
    if (foundUser) {
        console.log("Your account currently has $" + foundUser.balance + " balance.");       
    } else {
        console.log("There is no account matching");
    }    
}

newAccount("Helam","Helam",123);
getBalance("Helam");
deposit("Helam",233);
withdraw("Helam",24);
