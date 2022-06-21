let sp = 67836.43, rj = 36678.66, mg = 29229.88, es = 27165.48, outros = 19849.53, total;

total = sp + rj + mg + es + outros;

console.log(`a contribuição de São Paulo é ${((sp*100)/total).toFixed(2)}%`);
console.log(`a contribuição do Rio de Janeiro é ${((rj * 100)/total).toFixed(2)}%`);
console.log(`a contribuição de Minas Gerais é ${((mg * 100)/total).toFixed(2)}%`);
console.log(`a contribuição do Espirito Santo é ${((es * 100)/total).toFixed(2)}%`);
console.log(`a contribuição dos outros Estados é ${((outros * 100)/total).toFixed(2)}%`);