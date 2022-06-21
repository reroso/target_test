let palavra = prompt('Digite a palavra');

var palavraInvertida = '';

for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
}

alert(`A palavra ${palavra} de forma invertida, fica: ${palavraInvertida}`);