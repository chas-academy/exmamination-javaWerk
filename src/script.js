const HTMLdescription = document.getElementById("desc");
const HTMLamount = document.getElementById("amount");

const HTMLincomeBtn = document.getElementById("incomeBtn");
const HTMLexpenseBtn = document.getElementById("expenseBtn");

const HTMLincomeList = document.getElementById("incomeList");
const HTMLexpenseList = document.getElementById("expenseList");

const HTMLbalance = document.getElementById("balance");

let balance = 0;

let transactionlist = [];
let transactionObject = {};



function saldo(transactionlist){

    let balance = 0;
    HTMLdescription.value = "";
    HTMLdescription.placeholder = "Ex: Mat, Hyra";
    HTMLamount.value = "";
    HTMLamount.placeholder = "Ex: 500";
    HTMLincomeList.innerText = "";
    HTMLexpenseList.innerText = "";

    for (curIncome of transactionlist){
        
        let curType = curIncome.description;
        let curAmount = curIncome.amount;
        console.log(curType + curAmount);
        if (curIncome.type === "income"){
            HTMLincomeList.innerHTML = HTMLincomeList.innerHTML + (curType + " - " + curAmount + " kr<br>");
            balance = ( curAmount + balance);
        }
        if (curIncome.type === "expense"){
            HTMLexpenseList.innerHTML = HTMLexpenseList.innerHTML + (curType + " - " + curAmount + " kr<br>");
            balance = ( balance - curAmount);
        }

        HTMLbalance.innerText = (balance);
    }
}



HTMLincomeBtn.addEventListener("click", () => {

    let amountInput = parseFloat(HTMLamount.value);

    if (isNaN(amountInput) != true ){

        let incomeType = HTMLdescription.value;

        //Skapa ett nytt transaktionsobjekt, t.ex. { description, amount, type }, där:
        //type kan vara "income" eller "expense" beroende på knappval.
        transactionObject = {"description":incomeType,"amount":amountInput,"type":"income"};
        transactionlist.push(transactionObject);
        console.log(transactionlist);
                
    }

    saldo(transactionlist);

});



HTMLexpenseBtn.addEventListener("click", () => {

    let amountInput = parseFloat(HTMLamount.value);

    if (isNaN(amountInput) != true ){

        let expenseType = HTMLdescription.value;

        //Skapa ett nytt transaktionsobjekt, t.ex. { description, amount, type }, där:
        //type kan vara "income" eller "expense" beroende på knappval.
        transactionObject = {"description":expenseType,"amount":amountInput,"type":"expense"};
        transactionlist.push(transactionObject);
        console.log(transactionlist);
                
    }

    saldo(transactionlist);
    
});

