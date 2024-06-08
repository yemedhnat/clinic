let container_div = document.getElementById("container_div");
function place_m_message(message){
    let div = document.createElement("div");
    div.className = "m_chats";
    div.innerHTML = message;
    container_div.appendChild(div);
}


function place_user_message(message){
    let div = document.createElement("div");
    div.className = "user_chats";
    div.innerHTML = message;
    container_div.appendChild(div);
}

function place_choices(choice){
    for(let i=0; i < choice.length; i++){
        let div = document.createElement("div");
        div.className = "choices";
        div.innerHTML = choice[i];
        div.addEventListener("click",show_pains)
        container_div.appendChild(div);
    }
} 

let current_diagnosis = []

function show_pains(e){
    for(let i = 0; i < container_div.children.length; i++){
        if(container_div.children[i].className == "choices"){
            container_div.removeChild(container_div.children[i]);
            i--;
        }
    }
    place_user_message(e.target.innerHTML)
    choice = e.target.innerHTML
    console.log(body_parts.indexOf(choice))
    index = body_parts.indexOf(choice) > -1 ? body_parts.indexOf(choice) : -1;
    flag = body_parts.indexOf(choice) > -1 ? "body" : "symptom"
    if(flag == "body"){
        if(choice == "No other symptoms"){
            place_m_message("This is my diagnosis." );
            place_choices(current_diagnosis);
            let div = document.createElement("div");
            let p_1 = document.createElement("p");
            p_1.className = "disclaimer";
            p_1.innerHTML = "his is just an AI diagnosis. To be sure we have to do some test"
            let p_2 = document.createElement("p");
            p_2.className = "schedule_button";
            p_2.innerHTML = "Schedule an appointment";
            div.appendChild(p_1);
            div.appendChild(p_2);
            container_div.appendChild(div);
        }else{
            setTimeout(()=>{
                place_m_message ("I am sorry to hear you are having some pain on your "+ choice)
            },1000);
            setTimeout(()=>{
                place_m_message ("Do you have any of the following symptoms?")
            },4000);
            setTimeout(()=>{
                place_choices(all_symptoms[index])
            },8000);
        }
    }else if(flag == "symptom"){
        label1:
        for(let i = 0; i < all_symptoms.length; i++){
            for(let j = 0; j < all_symptoms[i].length; j++){
                if(all_symptoms[i][j] == choice){
                    index = i;
                    current_diagnosis = current_diagnosis.concat(all_diagnosis[i])
                    break label1;
                }
            }
        }
        setTimeout(()=>{
            place_m_message ("I am sorry to hear you are having "+ choice)

        },1000);
        setTimeout(()=>{
            place_m_message ("Do you have any of the any other symptoms?")
        },3000);
        setTimeout(()=>{
            body_parts.push("No other symptoms");
            place_choices(body_parts);
        },5000);
    }
    
}

place_m_message("Welcome. Where does it hurt")

place_choices(body_parts)
// user input function
const user_input = document.getElementById("user_input");
user_input.addEventListener("keypress",(e)=>{
    console.log(e.key)
    if(e.key =="Enter"){
        place_user_message(e.target.value)
    }
})