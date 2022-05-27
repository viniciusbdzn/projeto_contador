let currentNumberWrapper = document.getElementById('currentNumber')
const botaoAdcionar = document.getElementById('adicionar')
const botaoDecrementar = document.getElementById('subtrair')
let currentNumber = 0

//Usando EventListener, se o numero do contador for negativo a cor do estilo mudará pra vermelho
botaoAdcionar.addEventListener('click', () => {
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
        if (currentNumber >= 0) {
            document.getElementById('currentNumber').style.color = 'black'
        }
} )

botaoDecrementar.addEventListener('click', () => {
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
        if (currentNumber < 0) {
            document.getElementById('currentNumber').style.color = 'red'
        }
} )

//Método alternativo sem o uso do eventListener
/* 
function increment() {
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
}
*/


