let container_div = document.getElementById("container_div");
const bottom_spacer = document.getElementsByClassName("spacer_bottom")[0];
const message_delay = 0





function place_m_message(message){
    
    let div = document.createElement("div");
    div.className = "m_chats";
    div.innerHTML = '<img src="image/drM.jpg" id="drM"/> '+  message; 
    container_div.appendChild(div);
    container_div.lastChild.scrollIntoView();
}


function place_user_message(message){
    let div = document.createElement("div");
    div.className = "user_chats";
    div.innerHTML = message;
    container_div.appendChild(div);
    container_div.lastChild.previousSibling.scrollIntoView();
}

function place_choices(choice,event_flag){
    max_width = 10
    for(let i=0; i < choice.length; i++){
        let div = document.createElement("div");
        div.className = "choices";
        div.innerHTML = choice[i];
        max_width = max_width > parseInt(window.getComputedStyle(div).width) ? max_width : parseInt(window.getComputedStyle(div).width)
        if(event_flag){
            div.addEventListener("click",show_pains);
        }
        container_div.appendChild(div); 
        //height adjustment
    }
} 

let current_diagnosis = []

function treat_diagnosis(diagnosis){
    let diagnosis_obj = []
    for(let i = 0; i <diagnosis.length; i++){
        diagnosis_obj.push({
            disease: diagnosis[i],
            count: 0
        })
    }
    for(let i = 0; i < diagnosis_obj.length; i++){
        for(let j = i + 1; j < diagnosis_obj.length; j++){
            if(diagnosis_obj[i].disease == diagnosis_obj[j].disease){
                diagnosis_obj[i].count++;
                console.log("added")
                diagnosis_obj[j].count = -1;
            }
        }
    }
    diagnosis_obj.sort((a,b)=>{return b - a});
    let k = 0;
    
    while(k < diagnosis_obj.length){
        if(diagnosis_obj[k].count == -1){
            diagnosis_obj.splice(k,1);
        }
        k++;
    }

    diagnosis = [];
    for(let i = 0; i < diagnosis_obj.length; i++){
        diagnosis.push(diagnosis_obj[i].disease)
    }
    return diagnosis
}
function show_pains(e){
    for(let i = 0; i < container_div.children.length; i++){
        if(container_div.children[i].className == "choices"){
            container_div.removeChild(container_div.children[i]);
            i--;
        }
    }
    place_user_message(e.target.innerHTML)
    choice = e.target.innerHTML;
    index = body_parts.indexOf(choice) > -1 ? body_parts.indexOf(choice) : -1;
    index = body_parts.indexOf("No other symptoms") > -1 ? --index : index;
    flag =  body_parts.indexOf(choice) > -1 ? "body" : "symptom"
    if(flag == "body"){
        if(choice == "No other symptoms" && current_diagnosis.length > 0){
            place_m_message("ውጤቱ የሚከተለው ነው።" );
            current_diagnosis = treat_diagnosis(current_diagnosis)
            setTimeout(()=>{
                place_choices(current_diagnosis,false);
            let div = document.createElement("div");
            let p_1 = document.createElement("p");
            p_1.className = "disclaimer";
            p_1.innerHTML = "አመሰግናለሁ ይህ የAI ምርመራ ውጤት ነው። አርግጠኛ ለመሆን ክሊንካችን ጋ መጠው ይመርመሩ።"
            let p_2 = document.createElement("a");
            p_2.className = "schedule_button";
            p_2.innerHTML = "ቀጠሮ ያስይዙ";
            p_2.href="https://www.medhinfamilycenter.com/booking-calendar/medical-consultation-with-dr-medhanit?referral=service_list_widget"
            div.appendChild(p_1);
            div.appendChild(p_2);
            container_div.appendChild(div)
            container_div.lastChild.scrollIntoView();},message_delay*3)
        }else if(current_diagnosis.length == 0 && choice == "No other symptoms"){
            place_m_message("I don't have enough information to make a diagnosis.");
        }else{
            setTimeout(()=>{
                if(choice != "No other symptoms"){
                    place_m_message ("አዝናለሁ!")
                }
            },message_delay);
            setTimeout(()=>{
                if(choice != "No other symptoms"){
                    place_m_message ("ከሚከተሉት ምልክቶች የትኞቹ ታይትዎብዎታል?");
                }
            },message_delay*3);
            setTimeout(()=>{
                if(choice != "No other symptoms"){
                    all_symptoms[index].push("አልተጠቀሰም");
                    place_choices(all_symptoms[index],true)
                    all_symptoms[index].pop();
                }
            },message_delay*5);
        }
    }else if(flag == "symptom"){
        var count = -1;
        if(choice != "አልተጠቀሰም"){
            label1:
            for(let i = 0; i < all_symptoms.length; i++){
                for(let j = 0; j < all_symptoms[i].length; j++){
                    count++;
                    if(all_symptoms[i][j] == choice){
                        let index_internal = i;
                        current_diagnosis = current_diagnosis.concat(all_diagnosis[count]);
                        break label1;
                    }
                }
            }
        }
        setTimeout(()=>{
            if((choice !="No other symptoms")){
                console.log(choice);
                place_m_message ("አዝናለሁ!")
            }   

        },message_delay);
        setTimeout(()=>{
            place_m_message ("ከሚከተሉት ምልክቶች የትኞቹ ታይትዎብዎታል?")
        },message_delay*3);
        setTimeout(()=>{
            if(body_parts.indexOf("No other symptoms") < 0){
                body_parts.unshift("No other symptoms");
            }
            place_choices(body_parts,true);
        },message_delay*5);
    }
    
}

place_m_message("ጤና ይስጥልኝ፣ ምንዎትን አመምዎት")
setTimeout(()=>{
    place_choices(body_parts,true)},message_delay * 2) // The first message that shows the body parts
// user input function
const user_input = document.getElementById("user_input");
user_input.addEventListener("keypress",(e)=>{
    if(e.key =="Enter"){
        place_user_message(e.target.value)
    }
})