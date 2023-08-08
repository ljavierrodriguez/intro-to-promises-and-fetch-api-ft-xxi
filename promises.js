const saludo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Ha ocurrido un error')
    }, 5000)
})

saludo.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

let raw = JSON.stringify({ username: 'lrodriguez@4geeks.co', password: '123456' });

let uri = "https://jsonplaceholder.typicode.com/todos"
let options = {
    method: 'GET', // GET, POST, PUT, DELETE
    //body: raw, // POST, PUT
    headers: {
        'Content-Type': 'application/json',
    }
}

fetch(uri, options)
    .then((response) => {
        //console.log(response)
        if (response.status == 404) throw new Error('Pagina no encontrada')
        return response.json()
    })
    .then((result) => {
        //console.log(result)

        return result[0]
    })
    .then((obj) => {
        console.log("paso 1")
        console.log(obj);
    })
    .catch((error) => {
        console.log(error.message)
    })


async function requestSomeData() {
    let raw = JSON.stringify({ username: 'lrodriguez@4geeks.co', password: '123456' });

    let uri = "https://jsonplaceholder.typicode.com/users"
    let options = {
        method: 'GET', // GET, POST, PUT, DELETE
        //body: raw, // POST, PUT
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    try {
        
        const response = await fetch(uri, options);
        const result = await response.json();
        //console.log(result)
        console.log("paso 2")
        console.log(result[0])
        
    } catch (error) {
        console.log(error.message)
    }
        
}

requestSomeData();