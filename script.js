const apiUrl = "https://script.google.com/macros/s/AKfycbxfXZyU_hWQ4YYMsUOv8j7AHkRxx_lGkIzYjXZ9MsVVHN6v85n2KkegJ2RwWcfiEypF/exec";

async function searchStudent() {

    const keyword = document.getElementById("searchBox").value.toLowerCase();

    const response = await fetch(apiUrl);
    const data = await response.json();

    const student = data.find(item =>
        item.roll.toString() === keyword ||
        item.name.toLowerCase().includes(keyword)
    );

    if(student){

        document.getElementById("result").innerHTML = `
        <h3>Student Information</h3>

        <p><b>Name:</b> ${student.name}</p>

        <p><b>Roll:</b> ${student.roll}</p>

        <p><b>Class:</b> ${student.class}</p>

        <p><b>Section:</b> ${student.section}</p>

        <p><b>Total Fee:</b> ${student.total}</p>

        <p><b>Paid:</b> ${student.paid}</p>

        <p><b>Due:</b> ${student.due}</p>
        `;

    }else{

        document.getElementById("result").innerHTML="<h3>Student Not Found</h3>";

    }

}