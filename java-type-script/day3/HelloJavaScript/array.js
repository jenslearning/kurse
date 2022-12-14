// Map

const zutaten = ['๐ฎ', '๐', '๐ฅ'];

function kochen(zutat) {
    if (zutat === '๐ฅ') {
        return '๐';
    }

    if (zutat === '๐ฎ') {
        return '๐'
    }

    if (zutat === '๐') {
        return '๐';
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
var lebensmittel = ['๐', '๐', '๐', '๐ญ', '๐ฟ'];

function istVegetarisch(nahrung) {
    if (nahrung === '๐' || nahrung === '๐' || nahrung === '๐ญ') {
        return false;
    } else {
        return true;
    }
}

const vegetarisches = lebensmittel.filter(nahrung => {
    if (nahrung === '๐' || nahrung === '๐' || nahrung === '๐ญ') {
        return false;
    } else {
        return true;
    }
});

console.log(vegetarisches);

// const essen2 = vegetarisches.find(nahrung => nahrung === '๐');

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

// some benรถtigt eine funktion
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













