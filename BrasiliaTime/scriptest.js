function carregar(){

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` ${hora}h`

    if (hora > 0 && hora < 12){
        foto.src="fotomanha.png"
        document.body.style.background='#beb100'
    }
    else if (hora >= 12 && hora <= 18){
        foto.src="fototarde.png"
        document.body.style.background='#d59100'
   } else {
        foto.src="fotonoite.png"
        document.body.style.background='#006764'
   }
    }


