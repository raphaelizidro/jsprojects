let n = document.getElementById('txtn')
let list = document.querySelector('select#flist')
let res = document.getElementById('res')
let values = []

function xNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){ //set only numbers betweend 1 and 100
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){ //-1 means didn't find the number on list 
        return true 
    } else {
        return false
    }
}

function add(){
    if (xNumber(n.value) && !inList (n.value, values)){
//if is not a real value    //if is not listed already       
    values.push(Number(n.value))
    let item = document.createElement('option')
    item.text = ` Number ${n.value} added `
    list.appendChild(item)
    res.innerHTML = ''

} else {
    window.alert('Invalid data or already listed')
}

n.value ='' //clean 'n' box 
n.focus()  //user doesn't need to click on screen to type again

}

function finalresult(){

    if(values.length == 0){ //if box is empty ( no elements inside the array)
        window.alert('Add a value before the final result')
} else {

    let total = values.length // check how many elements are inside the array
    let higher = values[0]
    let lower = values[0]
    let sum = 0
    let media = 0

    for(let pos in values){
        sum += values[pos]
    
    if(values[pos] > higher)
    higher = values[pos]

    if(values[pos] < lower)
    lower = values[pos] 
    

    media = sum / total

    }

    
    res.innerHTML = ''
    res.innerHTML += `<p>The total of signed numbers = ${total}</p> `
    res.innerHTML += `<p>The highest value informed was ${higher}</p> `
    res.innerHTML += `<p>The lowest valiue informed was ${lower}</p> `
    res.innerHTML += `<p>The sum between values = ${sum}</p> `
    res.innerHTML += `<p>The media between values = ${media}</p> `
    }
}
