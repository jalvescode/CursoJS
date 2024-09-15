function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function calculoImc(){
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura')
        peso = peso.value;
        altura = altura.value;
        let resultadoIMC;
        resultadoIMC = peso / (altura*altura);
        resultadoIMC = resultadoIMC.toFixed(2);
        if (resultadoIMC <= 18.5) {
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Abaixo do peso)</p>`;
        } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Peso Normal)</p>`
        } else if (resultadoIMC >= 25 && resultadoIMC <=29.9){
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Sobrepeso)</p>`
        } else if (resultadoIMC >= 30 && resultadoIMC <=34.9){
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Obesidade grau 1)</p>`
        } else if (resultadoIMC >= 35 && resultadoIMC <=39.9){
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Obesidade grau 2)</p>`
        } else if (resultadoIMC >= 40){
            resultado.innerHTML = `<p style="background-color: #008000;">Seu IMC é ${resultadoIMC} (Obesidade grau 3)</p>`;
        } else{
            resultado.innerHTML = `<p style="background-color: #ff0000;">Resultado inválido</p>`
        }

    }
    form.addEventListener('submit', function(e){
        e.preventDefault();
        calculoImc();
    })
}

meuEscopo()