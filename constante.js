// Busca Constante
// O(1)

function calc_c_to_f(c) {
  let f = (c * 9 / 5) + 32
  return f;
}

console.log(`Celsius para Fahrenheit (39): ${calc_c_to_f(39)}`);
