function random() {
	shiki(data[Math.floor(Math.random() * data.length)])
}
function shiki(json) {
	document.getElementById("title").innerHTML = json.title
	document.getElementById("p").innerHTML = json.description
	document.getElementById("linl").src = json.video
	document.getElementById("foto").src = json.image
	document.getElementById("foto").alt = json.alt
	document.getElementById("title").style.color = json.color
	document.getElementById("p").style.color = json.color
}	
