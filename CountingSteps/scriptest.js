function startcount(){

    var start = document.getElementById('txtstt')
    var end = document.getElementById('txte')
    var step = document.getElementById('txtstp')
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){

    res.innerHTML = 'Impossible to count'
    
    } else {
    
    res.innerHTML = 'Counting:'    
    var stt = Number(start.value)
    var e = Number(end.value)
    var stp = Number(step.value)

    if ( stp <= 0){
        window.alert('Invalid data, try again')
    }

    if (stt < e){
        for(var c = stt; c < e; c += stp){
            res.innerHTML += ` ${c} \u{1F449} `
        }
    

    } else {
       for(var c = stt; c > e; c -= stp){
            res.innerHTML += ` ${c} \u{1F449} `
       }}
            res.innerHTML += ` ${c} \u{1F3C1} `
      }}


