let a = document.getElementById('area')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entered)
    a.addEventListener('mouseout', left)

function clicar(){

    a.innerText='Clicked'
    a.style.background='gray'
    
}

function entered(){

    a.innerText='Entered'
    a.style.background='red'
}

function left(){

    a.innerText='Left'
    a.style.background='green'
    
}

 
















    
