const HTMLdescription = document.getElementById("desc");
const HTMLamount = document.getElementById("amount");

const HTMLincomeBtn = document.getElementById("incomeBtn");
const HTMLexpenseBtn = document.getElementById("expenseBtn");

const HTMLincomeList = document.getElementById("incomeList");
const HTMLexpenseList = document.getElementById("expenseList");
const HTMLtransactionList = document.getElementById("transactionList");

const HTMLbalance = document.getElementById("balance");

let balance = 0;
let incomeList = [];


HTMLincomeBtn.addEventListener("click", () => {

    let amountInput = parseFloat(HTMLamount.value);

    if (isNaN(amountInput) != true ){

        balance = ( amountInput + balance);
        HTMLbalance.innerText = (balance);

        let incomeType = HTMLdescription.value;
        
        //incomeList.push(incomeType + " - " + amountInput + " kr");
        HTMLincomeList.innerHTML = HTMLincomeList.innerHTML + (incomeType + " - " + amountInput + " kr<br>");
        //document.getElementById("desc").innerText = "Ex: Mat, Hyra";
        
    }

    HTMLdescription.value = "";
    HTMLdescription.placeholder = "Ex: Mat, Hyra";
    HTMLamount.value = "";
    HTMLamount.placeholder = "Ex: 500";

});

HTMLexpenseBtn.addEventListener("click", () => {

    let amountInput = parseFloat(HTMLamount.value);

    if (isNaN(amountInput) != true ){

        balance = ( balance - amountInput);
        HTMLbalance.innerText = (balance);

        let expenseType = HTMLdescription.value;
        
        //incomeList.push(expenseType + " - " + amountInput + " kr");
        HTMLexpenseList.innerHTML = HTMLexpenseList.innerHTML + (expenseType + " - " + amountInput + " kr<br>");
        
    }

    HTMLdescription.value = "";
    HTMLdescription.placeholder = "Ex: Mat, Hyra";
    HTMLamount.value = "";
    HTMLamount.placeholder = "Ex: 500";
    
});

