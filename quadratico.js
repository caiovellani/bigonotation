function eh_subconjunto(lista1, lista2) {
  for (let e1 of lista1) {
    let faz_parte = false
    for (let e2 of lista2) {
      if(e1 == e2) {
        faz_parte = true
        break
      }
    }
    if (!faz_parte) {
      return false
    }
  }
  return true;
}

let sub = [5, 9, 3]
lista = [1, 4, 8, 3, 7, 4, 9, 13, 5, 11, 20]
console.log(`É subconjunto (subset): ${eh_subconjunto(sub, lista)}`);

