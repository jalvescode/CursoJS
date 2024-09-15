function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function setResultado(msg, isValid){
        resultado.innerHTML = '';
        const p = criaP();
        p.innerHTML = msg;
        if (isValid == true){
            p.classList.add('pTrue');
        } else if (isValid == false){
            p.classList.add('pFalse');
        }
        resultado.appendChild(p);
    }
    function criaP(){
        const p = document.createElement('p')
        return p;
    }
    function getImc(peso, altura){
        const imc = peso / (altura*altura);
        return imc.toFixed(2);
    }
    function getNivelIMC(imc){
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc >= 39.9){
            return nivel[5]
        }
        if (imc >= 34.9){
            return nivel[4]
        }
        if (imc >= 29.9 ){
            return nivel[3]
        }
        if (imc >= 24.9){
            return nivel[2]
        }
        if (imc >= 18.5){
            return nivel[1]
        }
        if (imc < 18.5){
            return nivel[0]
        }
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = form.querySelector('.peso');
        const inputAltura = form.querySelector('.altura')
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const imc = getImc(peso, altura);
        const nivel = getNivelIMC(imc)
        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }
        if (imc !== true){
            setResultado(`O seu IMC é de ${imc} (${nivel})`, true);
        }
    });

}


meuEscopo()