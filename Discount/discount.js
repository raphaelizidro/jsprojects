function ds(){
    let prod = window.prompt('Which product are you purchasing?')
    let price = window.prompt(`How much is the ${prod}`)
    let percentage = 10
    let reduction = (price * percentage) / 100
    let pricewdiscount = (price - reduction)
    res.innerHTML = `<p>The original price was ${price}</p> `
    res.innerHTML += `<p>You just earned ${reduction} of discount(-10%)</p> `
    res.innerHTML += `<p>At the end, you're paying ${pricewdiscount} on the product</p>`
}
