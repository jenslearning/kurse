try {
    console.log('Hello');

    // throw new Error('No Money! 😪😪😪');
    setTimeout(() => {
        console.log('Oh!');
    }, 0);

    Promise.resolve('wuff wuff').then(data => {
        console.log(data);
    });

    console.log('World!');
} catch (error) {
    console.error('Oh no!', error.message);
}