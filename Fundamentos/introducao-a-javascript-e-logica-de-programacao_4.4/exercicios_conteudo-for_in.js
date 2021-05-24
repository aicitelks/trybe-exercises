// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (let i in names) {
    console.log('Olá ' + names[i])
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto. 
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let i in car) {
    console.log(i + ':', car[i]);
}

// FOR OFF usado em arrays
let carros = ['Alfa Romeo', 'Ferrari', 'Audi'];
for (let i of carros) {
    console.log(i);
}