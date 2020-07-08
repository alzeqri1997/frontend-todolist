const APIURL = "/api/todos/";
// const APIURL = "https://mern-stack-todolist.herokuapp.com/api/todos";


export async function getTodo() {
    return fetch(APIURL)
    // (START)  this is for handling the errors - if it exsisted  - before fetching the data.
    .then(resp => {
        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    let err = { errorMessage: data.message };
                    throw err;
                })
            } else {
                let err = { errorMessage: " Please , try agan later , serever is not responding !!!" }
                throw err;
            }
        }
    // (END) of error handling  
        return resp.json();
    })
}

export async function createTodo(val) {
    return fetch(APIURL, {
        method: "post",
        headers: new Headers({
            'Content-type': "application/json",
        }),
        body: JSON.stringify({ name: val })
    })
        // (START)  this is for handling the errors - if it exsisted  - before fetching the data.
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { errorMessage: data.message };
                        throw err;
                    })
                } else {
                    let err = { errorMessage: " Please , try agan later , serever is not responding !!!" }
                    throw err;
                }
            }
            // (END) of error handling  
            return resp.json();
        })
}

export async function updateTodo(todo) {
    const updatedURL = APIURL + todo._id;
    return fetch(updatedURL, {
        method: "put",
        headers: new Headers({
            'Content-type': "application/json",
        }),
        body: JSON.stringify({ completed: !todo.completed })
    })
        // (START)  this is for handling the errors - if it exsisted  - before fetching the data.
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { errorMessage: data.message };
                        throw err;
                    })
                } else {
                    let err = { errorMessage: " Please , try agan later , serever is not responding !!!" }
                    throw err;
                }
            }
            // (END) of error handling  
            return resp.json();
        })
}


export async function removeTodo(id) {
            
    const deleteURL = APIURL + id;

    return fetch(deleteURL, {
        method: "delete"
    })
}