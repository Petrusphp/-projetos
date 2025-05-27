function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    //let data = new Date()
    let hora = 20    //data.getHours()
    msg.innerHTML= `são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '2-7.webp'
        document.body.style.background = '#948d31'
    }else if (hora>=12 && hora <= 18){
        //boa tarde
        img.src = 'img.jfif'
        document.body.style.background = '#e7d90d'
      
    }else{
        //boa noite
        img.src = 'Noite.jfif'
         document.body.style.background = '#12131a'
    }
}