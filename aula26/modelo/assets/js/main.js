function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function calculoImc(event){
        event.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura')
        peso = peso.value;
        altura = altura.value;
        let resultadoIMC = 0;
        resultadoIMC = peso*altura/altura;
        resultado.innerHTML = `<p>${resultadoIMC}</p>`;
    }
    form.addEventListener('submit', calculoImc)
}

meuEscopo()