// Add your code here
function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"   
        },
        body: JSON.stringify({
            name, 
            email
        })
    }

   return fetch("http://localhost:3000/users", configObj)
    .then( resp => resp.json() )
    .then( object => { document.body.innerHTML = object[ "id" ] })
    .catch(function(error) {
        alert("Unauthorized Access")
        document.body.innerHTML = error.message
    })
}
