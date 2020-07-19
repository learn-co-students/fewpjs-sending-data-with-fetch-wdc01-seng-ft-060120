document.addEventListener("DOMContentLoaded", () => {
	submitData();
})

const docBody = document.querySelector("body");
const configurationObject = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		name: "Steve",
		email: "steve@steve.com"
	})
}

function submitData(){
	return fetch("http://localhost:3000/users", configurationObject)
	.then(resp => resp.json())
	.then(json => docBody.append(makeNewDiv(json.id)))
	.catch(function(error) {
		alert("bad things!");
		docBody.append(makeNewDiv(error.message));
	});
}

function makeNewDiv(id){
	const newDiv = document.createElement("div");
	newDiv.textContent = id;
	return newDiv;
}

