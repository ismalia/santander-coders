// Exercícios

// 1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 20m de profundidade e custe R$6.350/m².
const calculateLandPrice = () => {
    return 5 * 20 * 6350;
}

console.log(calculateLandPrice());

// 2. Faça uma função que calcule a hipotenusa do triângulo retângulo, recebendo por parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 12 (teorema de pitágoras).
const calculateHypotenuse  = (c1, c2) => {
    return Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
}

console.log(calculateHypotenuse(9,12));

// 3. Faça uma função que retorne se vale a pena ou não abastecer com álcool. A função deve receber como parâmetros o valor do álcool e da gasolina.
// Obs.: Valor do álcool menor que 70% do preço da gasolina.
const isItWorthAlcohol = (alcoholPrice, gasPrice) => {
    return alcoholPrice < 0.7 * gasPrice ? true : false;
}

console.log(isItWorthAlcohol(3.53,5.27));