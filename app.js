let employees = [];
let id = 1;

function addEmployee() {

	let name = document.getElementById("empNmae").value;

	if(name==""){
		alert("Please Enter Employee Nmae");
		return;
	}

	employees.push({
		id;id,
		name:name
	});
	
	displayEmployees();

	id++;

	documents.getElementById("empNmae").value="";

}

function displayEmployees(){

	let table=document.getElementById("employeeTable");

	table.innerHTML="";

	employees.forEach(function(emp){

		table.innerHTML += `
		<tr>

		  <td>${emp.id}</td>
		  <td>${emp.name}</td>

	</tr>
	
	`;

	});
}
