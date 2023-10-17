function buy(){

   let prod = window.prompt('Which product do you want to buy?')
   let price = window.prompt(`How much is the ${prod} that you're purchasing?`)
   let usermoney = window.prompt(`How many dollars you gave to purchase the ${prod}? `)
   let change = (usermoney - price)
   let finalresult = window.alert(`You did purchase ${prod} that costs $${price}.You gave us $${usermoney} and you gonna receive back $${change}`)

}