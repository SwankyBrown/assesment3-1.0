console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('the form has been submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', ()=> {
	alert("you're cuter than an orange cat!")
})