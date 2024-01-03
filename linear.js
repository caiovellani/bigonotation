// Busca Linear
// O(n)

function fatorial(x) {
  let resposta = 1; 
  while (x > 1) {
    resposta = resposta * x
    x = x - 1 
  }
  return resposta
}

console.log(`Fatorial de 5: ${fatorial(5)}`);

