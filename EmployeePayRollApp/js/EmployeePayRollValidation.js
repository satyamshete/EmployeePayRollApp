// salary Validation
var salaryInput = document.querySelector("#salary")
 var Output = document.querySelector(".salaryError")
 Output.textContent=salaryInput.value
 salaryInput.addEventListener('input',function()
 {
    Output.textContent=salaryInput.value
 }
 )