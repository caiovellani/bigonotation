function merge_sort(lista) {
  function merge(esquerda, direita) {
    const resultado = []
    let i = 0, j = 0
    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] < direita[j]) {
        resultado.push(esquerda[i])
        i += 1 
      } else {
        resultado.push(direita[j])
        j += 1
      }
    }
    while (i < esquerda.length) {
      resultado.push(esquerda[i])
      i += 1
    }
    while (j < direita.length) {
      resultado.push(direita[j])
      j += 1
    }
    return resultado
  }

  if (lista.length < 2) {
    return lista 
  } else {
    const meio = Math.floor(lista.length / 2)
    const esquerda = merge_sort(lista.slice(0, meio))
    const direita = merge_sort(lista.slice(medio))
    return merge(esquerda, direita)
  }
}

lista = [1, 4, 8, 3, 7, 8, 4, 9, 13, 
   5, 3, 5, 11, 20, 5, 9, 3, 5, 9, 8,
   3, 8, 8, 2, 7, 10, 13, 19, 9]
console.log(`Merge Sort: `, merge_sort(lista));