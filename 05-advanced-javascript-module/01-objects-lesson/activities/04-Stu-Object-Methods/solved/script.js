var menu = {
    "coffee": 1.60,
    "tea": 1.50,
    "hot chocolate": 2,
    "milk": 0.5,
    "squash" : 0.3
};

console.log("Drink names : ", Object.keys(menu));
console.log("Menu total: £" + Object.values(menu).reduce((a,b) => { return a + b; }).toFixed(2));
