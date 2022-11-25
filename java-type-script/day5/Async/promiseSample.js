console.log('Hello');

setTimeoutAsync(0).then((message) => {
    console.log(message);

    return setTimeoutAsync(2000);
}).then(data => {
    console.log(data);
}).catch((error) => {
    console.error('Oh no!', error.message);
}).finally(() => {
    console.log('Alles fertig!');
});

console.log('World!');

function setTimeoutAsync(count) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            try {
                resolve('I love Datev! 😍😍😍');    
            } catch (error) {
                reject(error);                
            }
        }, count);

    });
}

