// Add your code here
const submitData = (userName, userEmail) => {
    let configUser = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch("http://localhost:3000/users", configUser)
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
        
    })
    .catch(function(error) {
       document.body.innerHTML = error.message
    })
    
}


submitData()



