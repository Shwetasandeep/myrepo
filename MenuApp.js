// Function Calling 
function onFormSubmit()
{
     var formData=readFormData();
     insertNewRecord(formData);
     resetFormData();
}

// Creating Functions 
function insertNewRecord(data)
{
    var table=document.getElementById("bloggersList").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table .length);
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.details;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML= "<a href='#' onClick='onDelete(this)'> Delete </a>"
}

function onDelete(obj)
{
    var row=obj.parentElement.parentElement;
    document.getElementById("bloggersList").deleteRow(row.rowIndex);
}




function readFormData()
{
    var formData ={};
    formData.details=document.getElementById("details"). value ;
    return formData;
}
function resetFormData() 
{
    document.getElementById("details"). value ="";
}