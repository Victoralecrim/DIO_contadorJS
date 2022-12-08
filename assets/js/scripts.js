var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
// Eventos
var btnmais = document.getElementById('mais');
var btnmenos = document.getElementById('menos');

btnmais.addEventListener("click", increment);
btnmenos.addEventListener("click", decrement);
// Fim eventos

//Função de incremento
function increment()
{
    /*Condição para caso o numero seja negativo e menor que -1, se for menor,
    a cor dele irá mudar para vermelho */ 

    if(currentNumber < -1){
        currentNumberWrapper.style.color = 'red';
    } // se não for ira mudar para cor normal 
    else{
        currentNumberWrapper.style.color = 'black';
    }
    /*Condição para que se o numero for menor que 10 
     ele seja desabilitado quando atingir seu valor maximo que é 10*/

    if(currentNumber < 10)
    {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = currentNumber;
    }
}

//Função de decremento
function decrement()
{
    if(currentNumber <= 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}