// Add your code here
const usersURL = 'http://localhost:3000/users';
const body = document.querySelector('body');

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch('http://localhost:3000/users', configObject)
    .then(response => response.json())
    .then(user => renderID(user)) 
    .catch(function(error){
        showError(error.message);
    })
};

function renderID(user){
    let div = document.createElement('div');
    //console.log(json);
    div.id = user.id;
    body.appendChild(div);

    userID = document.createElement('p');
    userID.innerText = `ID: ${user.id}`;
    div.appendChild(userID);

    userName = document.createElement('p');
    userName.innerText = `Name: ${user.name}`;
    div.appendChild(userName);

    userEmail = document.createElement('p');
    userEmail.innerText = `Email: ${user.email}`;
    div.appendChild(userEmail);
}

function showError(error) {
    let li = document.createElement('li');
    li.innerHTML = error;
    body.append(li);
}