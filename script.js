let selectedRow = null;

function onFormSubmit() {
    if (validation()) {
        let formData = readFormData();
        if (selectedRow == null) {
            insertNewData(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["location"] = document.getElementById("location").value;

    return formData;
}

function insertNewData(data) {
    let table = document.getElementById("employeeList");
    let newRow = table.insertRow(0);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.location;

    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">EDIT<a/>
    <a onClick="onDelete(this)">DELETE<a/>`;
}


function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("location").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("location").value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.location;

}

function onDelete(td) {
    if (confirm("Are You Sure to Delete this Record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm()
    }
}

function validation() {
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