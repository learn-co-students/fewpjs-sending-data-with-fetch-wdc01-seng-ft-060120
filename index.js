// Add your code here

document.addEventListener('DOMContentLoaded', () => {
    const destinationURL = 'http://localhost:3000/dogs'
    const usersURL = 'http://localhost:3000/users'


    function dogPostRequest() {
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                dogName: "Byron",
                dogBreed: "Poodle"
            })
        }
    
        fetch(destinationURL, configurationObject)
        .then( resp => resp.json())
        .then( data => console.log(data))
        .catch( err => {
            alert('Failed to complete dogs request')
            console.log(err)
        })
    }

    function submitData(name, email) {
        const configurationObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: name,
                email: email
            })
        }
        return fetch(usersURL, configurationObject)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => {
            alert('Failed complete users request')
            console.log(err)
        })
    }

    // dogPostRequest()
    // submitData()
})

const usersURL = 'http://localhost:3000/users'

function submitData(name, email) {
    const configurationObject = {
        // method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    return fetch(usersURL, configurationObject)
    .then(resp => resp.json())
    .then(data => appendToDOM(data.id))
    .catch(err => {
        alert('Failed complete users request')
        appendToDOM(err.message)
    })
}

function appendToDOM(txt) {
    const body = document.querySelector('body')
    const h2 = document.createElement('h2')
    h2.textContent = txt
    body.appendChild(h2)
}

let name = "Steve"
let email = "steve@steve.com"

submitData(name, email)
