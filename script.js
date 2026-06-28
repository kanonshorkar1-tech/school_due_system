const API =
"https://script.google.com/macros/s/AKfycbxfXZyU_hWQ4YYMsUOv8j7AHkRxx_lGkIzYjXZ9MsVVHN6v85n2KkegJ2RwWcfiEypF/exec";

async function searchStudent(){

    let search=document.getElementById("searchBox").value.trim().toLowerCase();

    if(search==""){
        alert("Roll বা Name লিখুন");
        return;
    }

    let response=await fetch(API);
    let data=await response.json();

    let student=data.find(x=>

        String(x.roll).toLowerCase()==search ||

        String(x.name).toLowerCase().includes(search)

    );

    let result=document.getElementById("result");

    if(student){

        result.innerHTML=`

<div class="card">

<h2>${student.name}</h2>

<table>

<tr>
<td><b>Roll</b></td>
<td>${student.roll}</td>
</tr>

<tr>
<td><b>Class</b></td>
<td>${student.class}</td>
</tr>

<tr>
<td><b>Section</b></td>
<td>${student.section}</td>
</tr>

<tr>
<td><b>Target</b></td>
<td>${student.target}</td>
</tr>

<tr>
<td><b>Achievement</b></td>
<td>${student.achieve}</td>
</tr>

<tr>
<td><b>Due</b></td>
<td style="color:red;font-weight:bold">
${student.due}
</td>
</tr>

</table>

</div>

`;

    }

    else{

        result.innerHTML="<h2 style='color:red'>Student Not Found</h2>";

    }

}
