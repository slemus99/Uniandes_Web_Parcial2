

const get = apiUrl => endpoint => fetch(`${apiUrl}/${endpoint}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}).then(res => res.json())

const post = apiUrl => (endpoint, data) => 
    fetch(`${apiUrl}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())

const put = apiUrl => (endpoint, data) => 
    fetch(`${apiUrl}/${endpoint}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())

const del = apiUrl => endpoint =>
    fetch(`${apiUrl}/${endpoint}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then(res => res.json())

const apiCallService = apiUrl => {
    return{
        get: get(apiUrl),
        post: post(apiUrl),
        put: put(apiUrl),
        delete: del(apiUrl)
    }
}

export default apiCallService