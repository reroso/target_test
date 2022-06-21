let dados = require('./dados.json');
let media = 0, contador = 0, maiorValor = 0, maiorDia, menorValor, menorDia;

for(let i = 0; i < 30; i++){
    
    if( dados[i]["valor"] == 0){
        
    }else {
        media = media + dados[i]["valor"]
        contador++;
            if(maiorValor < dados[i]["valor"]){
                maiorValor =  dados[i]["valor"];
                maiorDia = i + 1;
            }
            if(!menorValor) menorValor = dados[i]["valor"]
            if(dados[i]["valor"] < menorValor){
                menorValor =  dados[i]["valor"];
                menorDia = i + 1;
            }
    }
}
console.log(`O menor valor de faturamento foi R$ ${menorValor} no dia ${menorDia}`);
console.log(`O maior valor de faturamento foi R$ ${maiorValor} no dia ${maiorDia}`);
console.log(`A media de faturamento nesse mês, foi de R$ ${media/contador}`);