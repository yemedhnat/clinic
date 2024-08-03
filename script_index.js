const submit = document.getElementById("sub");
submit.addEventListener("click",()=> {
submit.href = "mailto:yemedhantclinic@gmail.com?subject=appointment&body="+ document.getElementById("name").value + " " + document.getElementById("fname").value + " " + document.getElementById("date").value;});