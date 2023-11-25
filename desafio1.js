function somatorio(numero) {
  let soma = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  return soma;
}

console.log(somatorio(10));  
console.log(somatorio(15));
console.log(somatorio(45));




