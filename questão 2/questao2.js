let numero , anterior = 0, atual = 1, proximo;

numero = prompt('Digite um numero');

while(atual <= numero){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}

if (anterior == numero){
    alert(`O numero ${numero} faz parte da sequencia de Fibonacci`);
} else {
    alert(`O numero ${numero} não faz parte da sequencia de Fibonacci`);
}
