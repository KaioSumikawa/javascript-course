function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // baby
                img.setAttribute('src', 'photo-baby-m.png')
            } else if (idade < 21) {
                // young
                img.setAttribute('src', 'photo-young-m.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', 'photo-adult-m.png')
            } else {
                // old
                img.setAttribute('src', 'photo-old-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // baby
                img.setAttribute('src', 'photo-baby-f.png')
            } else if (idade < 21) {
                // young
                img.setAttribute('src', 'photo-young-f.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', 'photo-adult-f.png')
            } else {
                // old
                img.setAttribute('src', 'photo-old-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

testing 