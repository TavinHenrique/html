function adicionarItem(){
    var input=document.querySelector('input');
    var valor=input.value.trim();

    if(valor){
        var lista=document.querySelector('#lista');
        var item=document.createElement('li');

        item.textContent=valor;

        lista.appendChild(item);

        input.value="";
        input.focus();


    }
    else{
        alert('Campo vazio, digite aluma coisa');
    }
}