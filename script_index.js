const appointment = document.getElementById("form");
appointment.addEventListener("click", make_form)

function make_form(e){
    let form = document.createElement("form");
    form.innerHTML = `<input class = "popup_form" type="text" placeholder="Name"  /> <br>
                        <input  type="text" placeholder="Father's Name"/> <br>
                        <input  type="date"  placeholder="Date"/> <br>
                        <input  type="radio" name="sex" checked> Male</input>
                        <input   type="radio" name="sex"> Female</input><br>
                        <button type="submit">Submit</button>`;
    appointment.innerHTML = ""
    appointment.style.width = "200%";
    form.className = "schedule_form";
    
    appointment.appendChild(form);
    appointment.style.height = "fit-content";
    form.style.transform = 'translateY(-48px)';
    appointment.removeEventListener("click", make_form)
}