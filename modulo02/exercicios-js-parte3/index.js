// Exercícios

// 7. Processe o JSON que enviei pra vocês e me respondam em um:
// {
//     total:, // total de alunos
//     stateCount:, // quantos estados diferentes temos
//     infosPerState: [
//         {
//             "SP": {
//                 "totalStudents":
//                 "averageAge":
//             },
//             "RJ": {
//                 "totalStudents":
//                 "averageAge":
//             }
//         }
//     ]
// }

const data = {
    "students": [
        {"name": "Adriana Evangelista", "state": "", "age": ""},
        {"name": "Adriano Takata", "state": "SP", "age": "30"},
        {"name": "Ana Caroline Gomes", "state": "SP", "age": "21"},
        {"name": "Antonio Moreno", "state": "SC", "age": "27"},
        {"name": "Armando de Moraes Arnaldo", "state": "CE", "age": "31"},
        {"name": "Brenno Cavalcante", "state": "SP", "age": "21"},
        {"name": "Bruno Ribeiro Da Silva", "state": "SP", "age": "19"},
        {"name": "Bruno Soares", "state": "BA", "age": "32"},
        {"name": "Carlos Alberto Victorino Junior", "state": "", "age": ""},
        {"name": "Carlos Mendes", "state": "PE", "age": "19"},
        {"name": "Carolina Daniel", "state": "", "age": ""},
        {"name": "Cristian Soares", "state": "RN", "age": "19"},
        {"name": "Domynik Vieira", "state": "MG", "age": "22"},
        {"name": "Edla Câmara", "state": "PE", "age": "21"},
        {"name": "Edwedja Lima", "state": "PE", "age": "27"},
        {"name": "Everton Reis", "state": "BA", "age": "24"},
        {"name": "Felipe Luiz Pontes de Andrade", "state": "SP", "age": "28"},
        {"name": "Felipe Rodrigues Garé Carnielli", "state": "", "age": ""},
        {"name": "Filipe Ferreira", "state": "PE", "age": "35"},
        {"name": "Francisco Márcio", "state": "CE", "age": "19"},
        {"name": "Gabriela Di Poggio", "state": "BA", "age": "24"},
        {"name": "Genilson Cavalcante de Oliveira", "state": "PB", "age": "19"},
        {"name": "Igor Ruiz de França", "state": "", "age": ""},
        {"name": "Ismália Santiago", "state": "", "age": ""},
        {"name": "Israel Cena developer", "state": "RJ", "age": "31"},
        {"name": "Jonatan Marques", "state": "RJ", "age": "25"},
        {"name": "Jordanny Alves Mizukoshi", "state": "GO", "age": "24"},
        {"name": "José Biaggio", "state": "SP", "age": "26"},
        {"name": "João Woigt Azevedo", "state": "SP", "age": "23"},
        {"name": "Jéferson Alves", "state": "SP", "age": "34"},
        {"name": "Kevin Junior Antonio Neves", "state": "PR", "age": "32"},
        {"name": "Leidson Oliveira", "state": "MG", "age": "33"},
        {"name": "Lourene Camargo", "state": "RJ", "age": "38"},
        {"name": "Luca Simaque Souza", "state": "SP", "age": "23"},
        {"name": "Lucas Suplino", "state": "RJ", "age": "29"},
        {"name": "Luiza Frota", "state": "RJ", "age": "19"},
        {"name": "Marla Ingridh", "state": "", "age": ""},
        {"name": "Mattheus Alexandre de Fabbio", "state": "", "age": ""},
        {"name": "Miller Raycell", "state": "", "age": ""},
        {"name": "Muriel Delvaux", "state": "", "age": ""},
        {"name": "Murilo Melo", "state": "RJ", "age": "29"},
        {"name": "Paulo Guilherme Damasceno", "state": "CE", "age": "24"},
        {"name": "Pedro H P Ricardo", "state": "RJ", "age": "21"},
        {"name": "Rafael Almeida", "state": "DF", "age": "30"},
        {"name": "Rafael Oliveira", "state": "RJ", "age": "30"},
        {"name": "Rafaela de Moraes Papale", "state": "MG", "age": "21"},
        {"name": "Renan Gonçalves", "state": "RJ", "age": "22"},
        {"name": "Samuel Alves", "state": "", "age": ""},
        {"name": "Samuel Cruz", "state": "CE", "age": "24"},
        {"name": "Samuel Giacomelli Bruing", "state": "RS", "age": "18"},
        {"name": "Tainá Silveira Leal", "state": "BA", "age": "28"},
        {"name": "Thiago Henrique Assi", "state": "SP", "age": "21"},
        {"name": "Vitor Henrique Grego Zillig", "state": "RS", "age": "18"}
    ]
}

const countTotalStudents = (data) => {
    return data.students.length
}

const getAllStates = (data) => {
    let states = []

    for (let i = 0; i < data.students.length; i++) {
        if (data.students[i].state !== "") {
            states.push(data.students[i].state)
        }
    }

    return states
}

const getUniqueStates = (statesArray) => {
    return uniqueStates = [...new Set(statesArray)]
}

const countUniqueStates = (uniqueStatesArray) => {
    return uniqueStatesArray.length
}

const filterStudentsPerState = (uniqueState, data) => {
    return data.students.filter(({state}) => {
        return state === uniqueState
    })
}

const getStateTotalStudents = (studentsPerStateArray) => {
    return studentsPerStateArray.length
}

const getStateAverageAge = (studentsPerStateArray) => {
    let ageSum = 0

    for (let i = 0; i < studentsPerStateArray.length; i++) {
        ageSum += Number(studentsPerStateArray[i].age)
    }

    return ageSum / studentsPerStateArray.length
}

const stateObj = (uniqueState) => {
    const studentsPerState = filterStudentsPerState(uniqueState, data)
    return Object({
        [`${uniqueState}`]: {
            totalStudents: String(getStateTotalStudents(studentsPerState)),
            averageAge: String(getStateAverageAge(studentsPerState))
        }
    })
}

const resultObject = (data) => {
    const totalResult = String(countTotalStudents(data))
    const uniqueStates = getUniqueStates(getAllStates(data))
    const stateCountResult = String(countUniqueStates(uniqueStates))
    
    const resultObj = {
        total: totalResult,
        stateCount: stateCountResult,
        infosPerState: []
    }

    for (let i = 0; i < uniqueStates.length; i++) {
        resultObj.infosPerState.push(stateObj(uniqueStates[i]))
    }
    
    return resultObj
}

console.log(resultObject(data))