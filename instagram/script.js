var imagem=document.querySelector('.troca-img')

function trocaimagem(){
    if(imagem.style.opacity==0){
        imagem.style.opacity=1
    }
    else{
        imagem.style.opacity=0
    }
}

setInterval(trocaimagem,3500)