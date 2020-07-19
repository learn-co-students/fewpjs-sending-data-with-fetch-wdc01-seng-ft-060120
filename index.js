// const { default: fetch } = require("node-fetch");

// Add your code here

// let configObj = {
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//           name,
//           email
//       })
// };


// function submitData(name, email) {
//    return fetch('http://localhost:3000/users', {
//        method: "POST",
//      headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//           name,
//           email
//       })
//    })
//     .then(function(respose) {
//         return response.json()
//     })
//     .then(function(object){
//         document.body.innerHTML = object[ "id" ]
//     })
//     .catch(function(error) {
//         document.body.innerHTML = error.message
//       })
// }
// submitData

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }
  