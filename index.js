// Add your code here

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configObj = {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)

// }

// fetch('http://localhost:3000/dogs', configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });



function submitData(name, email){
  let formData = {
    name: `${name}`,
    email: `${email}`
  };
  
  let configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  
  }

  return fetch('http://localhost:3000/users', configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    // let idP = document.createElement('p');
    // console.log(object)
    // idP.innerText = object.id
    // document.body.append(idP)
    document.body.innerHTML = object.id
  })
  .catch(function(error) {
    // let errP = document.createElement('p');
    // errP.innerText = error.message
    // console.log(error.message)
    // document.body.append(errP)
    document.body.innerHTML = error.message
  });
}