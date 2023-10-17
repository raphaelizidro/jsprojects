function tabs(){

    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Please, type a number!')
    

    } else {
    
    var n = Number(num.value)
    var c = 1
    tab.innerHTML =''

    

    while (c <= 10){

    var item = document.createElement('option')//create option inside the box
    item.text = ` ${n} x ${c} = ${n*c} `
    item.value = ` tab${n} ` 
    tab.appendChild(item)
    c++     
    }}}
