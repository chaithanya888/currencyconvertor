
let box=document.getElementsByClassName("output")[0];




async function convert(){
	let Amount=document.getElementById("Amount").value;
    let from=document.getElementById("option1").value;
    let to=document.getElementById("option2").value;
    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${Amount}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0514e3e02dmsh6c865d440d78f60p1c0d30jsna260a2e7ee8a',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	/*console.log(result);**/
    display(result);
} catch (error) {
	console.error(error);
}

function display(value){
box.innerHTML=`<h4>${value.result}${value.request.to}</h4>`
}

}