// Add your code here
let configurationObject = 
{
  method: "POST",
  headers: 
  {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(
    {
      dogName: "Byron",
      dogBreed: "Poodle"
    }
  )
};

fetch("http://localhost:3000/dogs",configurationObject)
.then(function(response)
  {
    return response.json();
  }
).then(function(object)
  {
    console.log(object);
  }
).catch(function(error)
  {
    alert("Bad things! Ragnarok!");
    console.log(error.message);
  }
);

function submitData(name,email)
{
  const jsonObj = 
  {
    method: "POST",
    headers: 
    {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(
      {
        name: name,
        email: email
      }
    )
  };
  const body = document.getElementsByTagName('body')[0];
  return fetch("http://localhost:3000/users",jsonObj)
  .then(function(response)
    {
      return response.json();
    }
  ).then(function(object)
    {
      const p = document.createElement('p');
      p.innerHTML = object.id;
      body.append(p);
    }
  ).catch(function(error)
    {
      const p = document.createElement('p');
      p.innerHTML = error.message;
      body.append(p);
    }
  );
}