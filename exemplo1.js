// For/Break/Continue	

//Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução

// a) números de 1 a 50  
for(let numero = 1; numero <= 50; numero++){
  console.log(numero)
}

console.log('Fim')

// b) quando chegar no número 25 interrompa a instrução e pare o loop
for(let numero = 1; numero <= 50; numero++){
    console.log(numero)
    if(numero === 25)
    break;
}
console.log('BREAK')

// c) quando chegar no número 10 pule a instrução
let numero = 0
while(numero < 50) {
    numero++;
    if(numero === 10){
        console.log('PULE');
        continue;
    }
    console.log("Continue "+ numero);
}