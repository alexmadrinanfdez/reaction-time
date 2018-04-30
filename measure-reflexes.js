// Promesa par esperar un tiempo aleatorio
const randomDelay = new Promise((resolve, reject) => {
    let time = (Math.random() * 5000).toFixed(0);
    setTimeout(() => resolve(), time)
});
// Función que que envía un mensaje por pantalla
const showMsg = () => {
    console.log("\nPress return:");
    return new Date().getTime();
};
// Función que incorpora promesas y mide el tiempo tardado en reaccionar
const getTime = start =>
    new Promise((resolve, reject) => {
        process.stdin.setEncoding('utf8');
        process.stdin.once('data', function(line) {
            let time = new Date().getTime() - start;
            console.log("Your time: " + time + "ms");
            resolve();
        })
    });
// Función auxiliar que engloba la funcionalidad del programa
const measure = () =>
    Promise.resolve(showMsg())
    .then( start =>  getTime(start));

// Aquí empieza el programa
randomDelay
    .then( () => measure ())
    .then( () => process.exit())
    .catch( err => console.log("Error: " + err));

