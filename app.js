// function checkPassword() {
//     var correctPassword = "04092004"; 
//     var enteredPassword = prompt("Enter the password to access the calculator:");

//     if (enteredPassword === correctPassword) {
//         showCalculator();
//     } else {
//         alert("Incorrect password. Access denied.");
//     }
// }
// function showCalculator() {
//     alert("Access granted. Displaying the calculator.");
// }
// checkPassword();

function getNumber(num) 
{
    var txt = document.getElementById("txt");
    txt.value += num;
}
function clearResult() {
    var txt = document.getElementById("txt");
    txt.value = ""; 
}
function getResult()
{
    var result = document.getElementById("txt");
    txt.value = eval(txt.value);
}