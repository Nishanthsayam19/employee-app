let employee = [];
let id = 1;

function addEmployee() {

	let name = document.getElementById("empName").value;

	if (name === "") {
		alert("Please enter employee name");
		return;


]

employees.push({
	id: id,
	name: name

});

		displayEmployees();

		id++;

		documnet.getElementById("empName").value = "";

}

function displayEmployees() {
	let table = document.getElementByid("employeeTable");

	table.innerHTML = "";

	employees.forEach(function(emp) {
		table.innerHTML += `
		<tr>
		<td>${emp.id}</td>
		<td>${emp.name}</td>
		</tr>
		`;
	});
}

