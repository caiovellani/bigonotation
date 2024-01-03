// Busca Linear
// O(n)

function buscar_linear(lista, e) {
  let encontrado = false 
  for (let i of lista) {
    if (e == i) {
      encontrado = true
      break
    }
  }
  return encontrado
}

lista = [1, 4, 8, 3, 7, 4, 9, 13, 5, 3]
  console.log(`Busca Linear(10): ${buscar_linear(lista, 10)} `);
  console.log(`Busca Linear(9): ${buscar_linear(lista, 9)} `);
