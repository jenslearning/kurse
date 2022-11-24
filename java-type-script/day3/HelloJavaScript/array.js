// Map

const zutaten = ['🐮', '🐔', '🥔'];

function kochen(zutat) {
    if (zutat === '🥔') {
        return '🍟';
    }

    if (zutat === '🐮') {
        return '🍔'
    }

    if (zutat === '🐔') {
        return '🍗';
    }
}

const essen = zutaten.map(kochen);
console.log(essen);

function myMap(zutaten, kochen) {
    const results = [];

    for (let i = 0; i < zutaten.length; i++) {
        const result = kochen(zutaten[i]);
        results.push(result);
    }

    return results;
}



// Filter
var lebensmittel = ['🍔', '🍕', '🍟', '🌭', '🍿'];

function istVegetarisch(nahrung) {
    if (nahrung === '🍔' || nahrung === '🍕' || nahrung === '🌭') {
        return false;
    } else {
        return true;
    }
}

const vegetarisches = lebensmittel.filter(nahrung => {
    if (nahrung === '🍔' || nahrung === '🍕' || nahrung === '🌭') {
        return false;
    } else {
        return true;
    }
});

console.log(vegetarisches);

// const essen2 = vegetarisches.find(nahrung => nahrung === '🍟');

const data = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3, name: 'baz' },
];

const result = data.find(item => item.id === 3);
console.log(result?.name);

const copyOfDataItem = { ...data[1] };

const exists = data.includes(copyOfDataItem);
console.log(exists);

// some benötigt eine funktion
// includes kann auch direkt ein objekt bekommen, allerdings muss es exakt das gleiche sein

// const exists2 = data.includes(item => item.id === 3);
// console.log(exists2);

const products = [
    { id: 1, name: 'foo', price: 1800 },
    { id: 2, name: 'bar', price: 766 },
    { id: 3, name: 'baz', price: 499 },
];

const sum = products.reduce((previous, current) => {
    return {
        totalPrice: previous.totalPrice + current.price,
    };
}, { totalPrice: 0 });

console.log(sum.totalPrice);













