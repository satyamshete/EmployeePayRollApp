// name validation
var text = document.querySelector("#name")
var error = document.querySelector(".nameError")
text.addEventListener('input',function()
{
    try{
        let employeeObj = new EmployeePayRollData ()
        employeeObj.name = text.value;
        error.textContent="";
    }
    catch(e){
        error.textContent=e
    }
})




// salary Validation
var salaryInput = document.querySelector("#salary")
 var Output = document.querySelector(".salaryError")
 Output.textContent=salaryInput.value
 salaryInput.addEventListener('input',function()
 {
    Output.textContent=salaryInput.value
 }
 )

function getSelectedvalues(data)
{
    let value = document.querySelector(data).value
    return value
}
function getSelectedCheckvalues(data)
{
    let allItems = document.querySelectorAll(data)
    let selItems = [];
    allItems.forEach(items => {
        if(items.checked) selItems.push(items.value)
    })
    return selItems;
}

 function saveData(data)
 {
    let employeeObj = new EmployeePayRollData ()
    employeeObj.name = getSelectedvalues("#name")
    employeeObj.profile = getSelectedvalues('[name=Profile]')
    employeeObj.gender=getSelectedvalues('[name=gender]')
    employeeObj.salary=getSelectedvalues("#salary")
    let day = getSelectedvalues(".Day")
    let month = getSelectedvalues(".Month")
    let year = getSelectedvalues(".Year")
    let date = day +"/"+ month  +"/"+year
    employeeObj.startDate=date;
    employeeObj.note = getSelectedvalues("#notes")
    employeeObj.department=getSelectedCheckvalues('[name=dept]')
    CreateAndUpdateDataInLocalStorage(employeeObj)
    alert(employeeObj.toString())
 }
function CreateAndUpdateDataInLocalStorage(employeeObj)
{
    let employeePayRollList = JSON.parse(localStorage.getItem("EmployeePayRollDetails"))
    if (employeePayRollList != undefined) {
        employeePayRollList.push(employeeObj)
    }
    else
    {
        employeePayRollList = [employeeObj]
    }
    localStorage.setItem("EmployeePayRollDetails",JSON.stringify(employeePayRollList))
}   

//Event listner for salary reset
var Reset = document.querySelector(".reset")
var Output = document.querySelector(".salaryError")
Reset.addEventListener('click', function()
{
    Output.textContent="35000";
}
)