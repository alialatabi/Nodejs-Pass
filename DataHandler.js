const fs = require('fs');

let orders = [];
let result = [];

let data = fs.readFileSync('./Data.txt','utf8').toString().split(',');
for (i in data){
    orders.push(data[i].toString().split(','));
}
for (i in orders){
    if (i > 0){
        singelOrder = orders[i].toString().split('\r\n')
        singelOrder.shift()
    }else{
        singelOrder = orders[i].toString().split('\r\n')
    }

    result.push(`{'customer':${singelOrder[0]}}`)
    console.log(result)
}



exports.data;