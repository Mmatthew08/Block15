// Objects : Data types are used to store various properties and actions.

//const fruit = {
  // name:Banana,
   // color:['green','yellow','brown'],
//  sugar:14}

//We can create an object with const object{}

const shoe={
    brand:'Converse',
    hasLaces: true,
    hasVelcro: false,
    color: 'green',
    price:60,
    activitiyType:'casual',
   // avaliableSize:[5,6,8,9,10],
    style: 'hightop',
    onSale:false,
}
console.log(shoe)
console.log(shoe.brand)
//console.table(shoe)


//Object Looping:

for(const key in shoe){
   // console.log(key)
   // console.log(key+':'+shoe[key]);
    console.log(`${key}, ${shoe[key]}`)
}
