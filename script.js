let inputva=document.querySelector("#fname")

inputva.addEventListener('blur',toupper)

function toupper() {
	let uppercase=inputva.value.toUpperCase();
	inputva.value=uppercase;
}