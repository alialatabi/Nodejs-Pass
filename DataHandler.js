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

    cust = singelOrder[0];
    latitude = singelOrder[1].toString().split(' ') [0];
    longitude = singelOrder[1].toString().split(' ') [1];
    NoOfOrders = parseInt(singelOrder[2]);
    items =[]
    for (i=0; i<NoOfOrders;i++){
        itemName = singelOrder[3+i].toString().split(' ') [0];
        itemcount = parseInt(singelOrder[3+i].toString().split(' ') [1]);
        price = parseFloat(singelOrder[3+i].toString().split(' ') [2]);
        total = parseFloat(singelOrder[3+i].toString().split(' ') [3]);
        items.push(`{'name':${itemName},'count':${itemcount},'price':${price},'total':${total}}`)
    }
    totalPrice = parseFloat(singelOrder[2+NoOfOrders].toString().split(' ') [0]);

    result.push(`{'customer':${cust},
    'address':{latitude:${latitude},'longitude':${longitude}},
    'items':${items},
    'total':${totalPrice}

}`)

}
console.log(result)



exports.data;