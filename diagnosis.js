const hamburger = document.getElementById("humburger");
hamburger.addEventListener("click",()=>{
  console.log("d  ")
  document.getElementsByClassName("doctors")[0].style.display = "none";
  document.getElementsByClassName("address")[0].style.display = "none";
})

let html = document.createElement("ul")
let url = "https://www.google.com/maps/place/Yemedhnat+Internal+Medicine+Specialty+Clinic./@8.9920566,38.6651951,12z/data=!4m12!1m2!2m1!1syemedhnat+clinic+addis+abaa!3m8!1s0x164b8382be4e9df1:0x962dc0a99a08e9e3!8m2!3d8.9522315!4d38.7853909!9m1!1b1!15sCht5ZW1lZGhuYXQgY2xpbmljIGFkZGlzIGFiYWGSAQ5tZWRpY2FsX2NlbnRlcuABAA!16s%2Fg%2F11v9lhzwgs?entry=ttu"

const painParts = document.getElementById("parts");
topLevel()
function topLevel(){
    painParts.innerHTML = ''
    html.innerHTML = ''
    for (let i=0; i<parts.length;i++){
        
        let element = document.createElement("li");
        element.className = "list";
        element.id=parts[i].replace(' ','_').replace(' ','_');
        element.innerHTML = parts[i]
        element.addEventListener("click",populatePains);
            html.appendChild(element);  
    }
    painParts.appendChild(html);
}

let pain_array = [];
function populatePains(e){
        let part = e.target.id;
        let logged_pain = [];
        
        switch(part){
            case "Abdomen":
                pain_array = [];
                concatArray(abdomen,pain_array);
                break;
        }
        
            attachNode(pain_array,[]);
        
             
}
let disease = []
function populateDiseases(e){
    let pain = e.target.id; 

    switch(pain){
        case "Abdominal_swelling":
            concatArray(abdominal_swelling,disease);
            abdomen.splice(0,1)
            topLevel();            
            break;
        
        case "Acute_abdominal_pain":
            concatArray(Acute_abdominal_pain,disease);
            abdomen.splice(0,2)
            topLevel();            
            break;
    
        case "Acute abdominal_pain_in_pregnancy":
            concatArray(Chronic_abdominal_pain_in_adults,disease);
            abdomen.splice(0,3)
            topLevel();            
            break;
        
        case "Chronic_abdominal_pain_in_adults":
            concatArray(abdominal_swelling,disease);
            abdomen.splice(0,4)
            topLevel();            
            break;
            
        case "Constipation":
            concatArray(Constipation,disease);
            abdomen.splice(0,5)
            topLevel();            
            break;
        
        case "Diarrhoea":
            concatArray(Diarrhoea,disease);
            abdomen.splice(0,6)
            topLevel();            
            break;
    
        case "Epigastric_pain":
            concatArray(Epigastric_pain,disease);
            abdomen.splice(0,7)
            topLevel();            
            break;
        
        case "Recurrent_childhood_abdominal_pain":
            concatArray(Recurrent_childhood_abdominal_pain,disease);
            abdomen.splice(0,8)
            topLevel();            
            break;           
    
        case "Vomiting":
            concatArray(Vomiting,disease);
            abdomen.splice(0,9)
            topLevel();            
            break;
        
        case "Vomiting_blood":
            concatArray(Vomiting_blood,disease);
            abdomen.splice(0,10)
            topLevel();            
            break;
    }
}


const done_button = document.getElementById("done");
done_button.addEventListener("click",(e)=>{
   disease_obj_array =  makeObjArray(disease) 
    for(let i=0; i<disease_obj_array.length;i++){
        for(let j=i+1; j< disease_obj_array.length; j++){
            if (disease_obj_array[i].disease == disease_obj_array[j].disease){
                disease_obj_array[i].count++;
            }
            
        }
        
    }
    disease_obj_array.sort((a,b) => {return b.count - a.count});
    for(let i = 0; i < disease_obj_array.length; i++){
        disease[i]=disease_obj_array[i].disease;
    }
    for(let i = 0; i< disease_obj_array.length;i++){
        if(disease_obj_array[i].count > 0){
            for(let j = i+1; j < disease_obj_array.length; j++){
                if(disease_obj_array[i].disease == disease[j]){
                    disease.splice(j,1);
                    
                }
            }
        }
    }
    attachNode(disease)
    for(let i = 0; i< disease_obj_array.length; i++){
        if(disease_obj_array[i].count > 0){
            html.children[i].className += " diagnosis";
            html.children[i].children[0].className += " diagnosis";
        }
    }
    // Rate us on GOOGLe
    const rate_button = document.createElement("div");
    rate_button.className = "list_container"
    rate_link = document.createElement("a");
    rate_link.innerHTML = "Rate Us on Google";
    rate_link.className = "list rate"
    rate_link.href = url;

    rate_button.appendChild(rate_link);
    html.append(rate_button)
    e.target.style.display = "none";
    let disease_count = html.children.length;
    const max_diseases_to_display = 8;
    if(disease_count > max_diseases_to_display){
        while(html.children.length > max_diseases_to_display){
            html.removeChild(html.children[max_diseases_to_display]);
        }
    }
    html.appendChild(rate_button)
});
function concatArray(partArray,pain_array){
    for(let i=0; i < partArray.length; i++){
        pain_array.push(partArray[i])
    }
}
function attachNode(array){
   
    painParts.innerHTML =""
    html.innerHTML = ""
    for (let i=0; i<array.length; i++){
        let div = document.createElement("div");
        div.className = "list_container";
        let element = document.createElement("li");
        element.innerHTML = array[i]
        element.className = "list";
        element.id = array[i].replace(/ /g,'_')
        element.addEventListener("click",populateDiseases);
        div.appendChild(element)
        html.appendChild(div);  
    }
    painParts.appendChild(html)
    array = []
    console.log(array)
}
painParts.appendChild(html);

function makeObjArray(disease){
    let disease_obj_array = []
    if(disease.length){
        for(let i = 0; i< disease.length; i++){
            disease_obj_array.push( {
                disease :disease[i],
                count : 0
            });
        }
    }
    return disease_obj_array
}