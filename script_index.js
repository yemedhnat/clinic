document.getElementById("form").addEventListener("click", make_form)

function make_form(e){
    let form = document.createElement("form");
    form.innerHTML = `<input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Father's Name"/>
                        <input type="date" placeholder="Date"/> <br>
                        <input type="radio" name="sex" checked> Male</input>
                        <input type="radio" name="sex"> Female</input><br>
                        <button type="submit">Submit</button>`;
    e.target.innerHTML = ""
    e.target.style.width = "fit-content";
    e.target.style.height = "fit-content";
    form.className = "form-row"
    e.target.appendChild(form)
}