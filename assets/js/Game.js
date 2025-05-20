let money = 0;
let balance = document.getElementById('balance');
let day = 1;
let totalDays = 1;
let dayCounter = document.getElementById('day-count');
let menu = document.getElementById('menu')
let stockPrice = "---";
let stockRecords = {previous: undefined, recordHigh: 100, recordLow: 100}
let stocksOwned = 0;
let patternTypes = ["random", "spike", "drop"]
let stockPattern = 'random'
let lastPattern = 'random';
let patternProgress = 0;
let harvestedIngredients = 0;
let harvestsLeft = 15;
let products = 0;
let cookingProgress = 0;
let debtRemaining = 297000;


function setBalance(amount){
    if (amount != undefined){    
        money = amount;
        balance.innerText = 'Money: $' + amount;
        balance.title = "Your current amount of money is: $" + money;
    }
}

function changeBalance(amount){
    money += amount;
    balance.innerText = 'Money: $' + money;
    balance.title = "Your current amount of money is: $" + money;
}

function nextDay() {
    totalDays++;
    day++;
    dayCounter.innerText = 'Day: ' + totalDays;
    updateStocks();
    harvestsLeft = Math.floor(Math.random() * 13) + 12;
    document.getElementById('harvests').innerText = 'Harvests left: ' + harvestsLeft;
}

function updateStocks(amount) {
    /*if (stockPrice != undefined){
        stockRecords.previous = stockPrice;
    }
    else {
        stockRecords = '---';
        stockPrice = 100;
    }
    document.getElementById('last-price').innerText = 'Previous price: ' + stockRecords.previous;
    if (amount == undefined) {
        stockPrice = Math.floor(Math.random() * 200) + 1;
    }
    else {
        stockPrice = amount;
    }

    if (stockPrice > stockRecords.recordHigh || stockRecords.recordHigh == undefined) {
        stockRecords.recordHigh = stockPrice;
}

    if (stockPrice < stockRecords.recordLow || stockRecords.recordLow == undefined) {
        stockRecords.recordLow = stockPrice;
    }
    document.getElementById('current-price').innerText = 'Current price: ' + stockPrice;
    document.getElementById('highest-price').innerText = 'Highest price: ' + stockRecords.recordHigh;
    document.getElementById('lowest-price').innerText = 'Lowest price: ' + stockRecords.recordLow; */

}

function buyStock() {
    if (money >= stockPrice) {
        changeBalance(-stockPrice)
        stocksOwned++;
        document.getElementById('stocks-owned').innerText = 'Stocks owned: ' + stocksOwned;
    }
    else{
        alert('Not enough money!')
    }
    setBalance();
}

function sellStock() {
    if (stocksOwned > 0) {
        changeBalance(stockPrice);
        stocksOwned--;
        document.getElementById('stocks-owned').innerText = 'Stocks owned: ' + stocksOwned;
    }
    else{
        alert('No stocks to sell!')
    }
    setBalance();
}

function harvestProduce (){
    if (harvestsLeft > 0) {
        harvestsLeft--;
        harvestedIngredients ++;
    }
    else {
        alert('Nothing to harvest!')
    }
    document.getElementById('harvests').innerText = 'Harvests left: ' + harvestsLeft;
    document.getElementById('produce').innerText = "Ingredients (three per product): " + harvestedIngredients;
    document.getElementById('cooking-progress').innerText = "Progress: " + cookingProgress + '%';
}

function cookProduce () {
    cookingProgress += 20;
    if (harvestedIngredients >= 3) {
        if (cookingProgress >= 100){
            cookingProgress = 0;
            harvestedIngredients -= 3;
            products ++;
        }
    }
    else {
        alert('Not enough ingredients!')
        cookingProgress -= 20;

    }
    document.getElementById('cooking-progress').innerText = "Progress: " + cookingProgress + '%';
    document.getElementById('produce').innerText = "Ingredients (three per product): " + harvestedIngredients;
    document.getElementById('ready-products').innerText = "Products to sell: " + products;
}

function sellProducts () {
    if (products > 0) {
        changeBalance(10)
        products--;
    }
    else {
        alert('Nothing to sell!')
    }
    document.getElementById('ready-products').innerText = "Products to sell: " + products;
}

function payDebt () {
    if (money >= debtRemaining) {
        changeBalance(-debtRemaining);
        debtRemaining = 0;
        document.getElementById('debt-value').innerText = "You are now debt-free!";
    }
}

function saveGame () {
    document.cookie = "";
}
setBalance(0);
updateStocks(100);
setInterval(nextDay, 300000);