var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["address"] = document.getElementById("address").value;
    formData["tell"] = document.getElementById("tell").value;
    formData["altura"] = document.getElementById("altura").value;
    formData["peso"] = document.getElementById("peso").value;
    formData["saude"] = document.getElementById("saude").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tell;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.altura;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.peso
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.saude
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("tell").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("saude").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("address").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tell").value = selectedRow.cells[2].innerHTML;
    document.getElementById("altura").value = selectedRow.cells[3].innerHTML;
    document.getElementById("peso").value = selectedRow.cells[4].innerHTML;
    document.getElementById("saude").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.tell;
    selectedRow.cells[3].innerHTML = formData.altura;
    selectedRow.cells[4].innerHTML = formData.peso;
    selectedRow.cells[5].innerHTML = formData.saude;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}