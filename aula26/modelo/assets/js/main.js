function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function calculoImc(event){
        event.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura')
        peso = peso.value;
        altura = altura.value;
        let resultadoIMC;
        resultadoIMC = peso / (altura*altura);
        if (resultadoIMC <= 18.5) {
            resultado.innerHTML = `<p>Abaixo do peso</p>`;
        } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
            resultado.innerHTML = `<p>Peso Normal</p>`
        } else if (resultadoIMC >= 25 && resultadoIMC <=29.9){
            resultado.innerHTML = `<p>Sobrepeso</p>`
        } else if (resultadoIMC >= 30 && resultadoIMC <=34.9){
            resultado.innerHTML = `<p>Obesidade grau 1</p>`
        } else if (resultadoIMC >= 35 && resultadoIMC <=39.9){
            resultado.innerHTML = `<p>Obesidade grau 2</p>`
        } else if (resultadoIMC >= 40){
            resultado.innerHTML = `<p>Obesidade grau 3</p>`;
        }

    }
    form.addEventListener('submit', calculoImc)
}

meuEscopo()