const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "María" }
];


//1. Callbacks

function getUserById(id, callback) {
    setTimeout(() => {
        const user = users.find(u => u.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback("Usuario no encontrado", null);
        }
    }, 1500);
}

//Ejemplos de uso

getUserById(5, (error, user) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Usuario encontrado:", user);
    }
});

getUserById(2, (error, user) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Usuario encontrado:", user);
    }
});


//2. Promesas

function getUserByIdPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id === id);
            if (user) {
                resolve(user);
            } else {
                reject("Usuario no encontrado");
            }
        }, 1500);
    });
}

// Ejemplo: usuario existente
getUserByIdPromise(3)
    .then(user => console.log("Usuario encontrado:", user))
    .catch(error => console.error("Error:", error));

// Ejemplo: usuario inexistente
getUserByIdPromise(10)
    .then(user => console.log("Usuario encontrado:", user))
    .catch(error => console.error("Error:", error));


//3. Async/Await

async function fetchUser(id) {
    try {
        const user = await getUserByIdPromise(id);
        console.log("Usuario encontrado: ", user);
    } catch (error) {
        console.error("Error: ", error);
    }
}

//Ejemplo
fetchUser(1);
fetchUser(10);