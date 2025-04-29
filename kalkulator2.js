function addNumbers () {
    const num1 = parseFloat(document.getElementById("num1").value); //Nosaka pirmā skaitļa vērtību
    const num2 = parseFloat(document.getElementById("num2").value); //Nosaka otrā skaitļa vērtību
    document.getElementById("result").textContent = num1 + num2; //Pie rezultāta nosaka vērtību atšķirība vai ir saskaitīšana vai atņemšana. Šajā gadījumā saskaitīšana
}
function addNumbers () {
    const num1 = parseFloat(document.getElementById("num1").value); //Nosaka pirmā skaitļa vērtību
    const num2 = parseFloat(document.getElementById("num2").value); //Nosaka otrā skaitļa vērtību
    document.getElementById("result").textContent = num1 - num2; //Pie rezultāta nosaka vērtību atšķirība vai ir saskaitīšana vai atņemšana. Šajā gadījumā atņemšana
}
