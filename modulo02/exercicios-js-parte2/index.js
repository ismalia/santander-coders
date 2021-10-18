// Exercícios

// 4. Faça uma função que calcule o preço médio dos elementos que compõe a cesta de produtos:
const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29]

const calculateAverage = (array) => {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length
}

console.log(calculateAverage(productsPrice))

// 5. Faça uma função que receba os alunos e suas respectivas médias e retorne apenas os aprovados (média maior ou igual a 5).
const students = [
    {name: 'Estudante 1', score: 8},
    {name: 'Estudante 2', score: 4},
    {name: 'Estudante 3', score: 1},
    {name: 'Estudante 4', score: 6},
    {name: 'Estudante 5', score: 10},
]

const approvedStudents = (studentsArray) => {
    return studentsArray.filter((student) => {
        return student.score >= 5
    })
}

console.log(approvedStudents(students))

// 6. Faça uma função que retorne o % de clientes felizes com a empresa (cliente feliz é aquele que deu nota maior que 7).
const customers = [
  {name: 'customer1', nps: 7},
  {name: 'customer2', nps: 3},
  {name: 'customer3', nps: 1},
  {name: 'customer4', nps: 7},
  {name: 'customer5', nps: 6},
  {name: 'customer6', nps: 9},
  {name: 'customer7', nps: 8},
  {name: 'customer8', nps: 1},
  {name: 'customer9', nps: 7},
  {name: 'customer10', nps: 7},
  {name: 'customer11', nps: 3},
  {name: 'customer12', nps: 1},
  {name: 'customer13', nps: 7},
  {name: 'customer14', nps: 6},
  {name: 'customer15', nps: 9},
  {name: 'customer16', nps: 8},
  {name: 'customer17', nps: 1},
  {name: 'customer18', nps: 7}
]

const happyCustomersPercentage = (customersArray) => {
    const totalCustomers = customersArray.length
    const happyCustomers = customersArray.filter((customer) => {
        return customer.nps > 7
    })

    return happyCustomers.length / totalCustomers * 100    
}

console.log(happyCustomersPercentage(customers))