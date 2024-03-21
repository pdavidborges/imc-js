
//Calculando o IMC
//var -> Cria uma variável, porém, permite que esta seja "redeclarada" podendo causar BUGS
//let -> Não permite que a variável seja "redeclarada" e só funciona dentro do seu escopo
//const -> Semelhante ao let com uma observação: NÃO PODE TER SEU VALOR ALTERADO

//Fórmula do IMC: imc = peso / (altura*altura);

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const btnRefazer = document.querySelector('#btn-refazer');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');

const infoResult = document.querySelector('.result-imc h2 span'); //IMC
const infoClass = document.querySelector('.result-imc p span'); //Classificação

//"cor" (parâmetro) representa a cor passada no momento da chamada da função
function colorIMC(cor){
    infoClass.style.color = cor;
    infoResult.style.color = cor;
}


//Ao clicar no botão de calcular
btnCalcular.addEventListener('click', function(){
    
    //Se peso e altura forem diferentes de vazio
    // == comparação (igualdade)
    // != comparação (diferença)
    // && e
    // || ou

    if(peso.value != '' && altura.value != ''){
        
        //Alternando a classe "show"
        contentIMC.classList.toggle('show');
        resultIMC.classList.toggle('show');

        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);
        let imc = valorPeso / (valorAltura*valorAltura);        
        //alert(imc);
        
        infoResult.innerHTML = imc.toFixed(2);

        // >= maior ou igual
        // <= menor ou igual
        // && e
        // || ou

        if(imc < 18.5){
            infoClass.innerHTML = 'Magreza';
            colorIMC('red'); //chamando a função, passando um parâmetro
        }

        //se o imc for maior ou igual a 18.5 E menor ou igual a 24.9
        else if(imc >= 18.5 && imc <= 24.9){
            infoClass.innerHTML = 'Normal';
            colorIMC('green');
        }
        
        else if(imc >= 25 && imc <= 29.9){
            infoClass.innerHTML = 'Sobrepeso';
            colorIMC('orange');
        }

        else if(imc >= 30 && imc <= 39.9){
            infoClass.innerHTML = 'Obesidade';
            colorIMC('red');
        }

        else{
            infoClass.innerHTML = 'Obesidade grave!';
            colorIMC('#B10303');
        }

    }

    else{
        alert('Preencha os campos para calcular');
    }

})


//Ao clicar no botão refazer
btnRefazer.addEventListener('click',function(){
    
    contentIMC.classList.toggle('show');
    resultIMC.classList.toggle('show');

    //Limpando os campos
    peso.value = '';
    altura.value = '';
    //document.querySelector('form').reset();

})

