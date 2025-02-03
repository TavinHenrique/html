function sortear(){
    let valor1 =parseInt(document.querySelector("#input1").value)
    let valor2 =parseInt(document.querySelector("#input2").value)

    if(isNaN(valor1)|| isNaN(valor2) || valor1>=valor2){
        document.querySelector('#resultado').innerText='insira numero validos';return
    } 
    let numerosorteado=Math.floor(Math.random()*(valor2+valor1+1))

    document.getElementById('resultado').innerText = "Número sorteado: " + numerosorteado;
}
