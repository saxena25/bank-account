function bankAccount(ac_no,name,type,balance){
    this.ac_no = ac_no;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.active = true;

    // TO DEPOSIT THE AMOUNT 
    this.deposit = function(amount){
        this.balance += amount;
        alert(`Successfully Deposit ${amount} & Your Current Balance is ${this.balance}`)
    }

    // TO WITHDRAW THE AMOUNT 
    this.withdraw = function(amount){
        if(amount > this.balance){
            alert(`Insufficient Balance ${this.balance}`);
        }
        else{
            this.balance -= amount;
            alert(`You Successfully withdraw ${amount}`);
        }
    }

    // TO CHECK BALANCE OF ACCOUNT 
    this.checkBalance = function(){
        alert(`Your Account Balance:- ${this.balance}`);
    }
}


let ac1 = new bankAccount(12345,'Hrithik','Saving',1000);
let ac2 = new bankAccount(22334,'Abhishek','Current',800);
let ac3 = new bankAccount(33445,'Atalique','Saving',1200);

ac1.deposit(300);
console.log(ac1);

ac2.withdraw(400);
console.log(ac2);

ac3.checkBalance();

let Accounts = [];
Accounts.push(ac1,ac2,ac3);
console.log(Accounts);

function totalBalance(){
    let total = 0;
    Accounts.forEach((ele)=>{
        total += ele.balance;
    })
    console.log(total);
}

totalBalance();

