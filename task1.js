const developer= {
	requiredSkills: "HTML, CSS, JS, React",
}

const intern = Object.create(developer);
intern.availableSkills = "HTML, CSS";

for (let key in intern) {
	if (intern.hasOwnProperty(key)) {
		console.log(key)
	}
}
