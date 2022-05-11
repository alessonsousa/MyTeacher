const subjects = [
    "OPÇÕES",
    "ALGORITMOS E ESTRUTURA DE DADOS",
    "BANCO DE DADOS I",
    "BANCO DE DADOS II",
    "PROGRAMAÇÃO ORIENTADA A OBJETOS",
    "REDES DE COMPUTADORES",
    "SISTEMAS OPERACIONAIS",
    "ESTATÍSTICA COMPUTACIONAL",
    "ENGENHARIA DE SOFTWARE",
    "COMPUTAÇÃO GRÁFICA",
    "INTELIGÊNCIA ARTIFICIAL",
]

const weekdays = [
    "OPÇÕES",
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes]  = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}