

let html = document.createElement("ul")

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

//painParts.addEventListener("click",)
let pain_array = [];
function populatePains(e){
        let part = e.target.id
    
        
        switch(part){
            case "Abdomen":
                concatArray(abdomen,pain_array);
                break;
            
        }
        attachNode(pain_array,[])
     
}
let disease = []
function populateDiseases(e){
    let pain = e.target.id; 

    switch(pain){
        case "Abdominal_swelling":
            concatArray(abdominal_swelling,disease);
            topLevel();
            
            break;
        
        case "Acute_abdominal_pain":
            concatArray(Acute_abdominal_pain,disease);
            topLevel();
            
            break;
    
        case "Acute abdominal_pain_in_pregnancy":
            concatArray(Chronic_abdominal_pain_in_adults,disease);
            topLevel();
            
            break;
        
        case "Chronic_abdominal_pain_in_adults":
            concatArray(abdominal_swelling,disease);
            topLevel();
            
            break;
            
        case "Constipation":
            concatArray(Constipation,disease);
            topLevel();
            
            break;
        
        case "Diarrhoea":
            concatArray(Diarrhoea,disease);
            topLevel();
            
            break;
    
        case "Epigastric_pain":
            concatArray(Epigastric_pain,disease);
            topLevel();
            
            break;
        
        case "Recurrent_childhood_abdominal_pain":
            concatArray(Recurrent_childhood_abdominal_pain,disease);
            topLevel();
            
            break;
            
    
        case "Vomiting":
            concatArray(Vomiting,disease);
            topLevel();
            
            break;
        
        case "Vomiting_blood":
            concatArray(Vomiting_blood,disease);
            topLevel();
            
            break;
    }
}


const done_button = document.getElementById("done");
done_button.addEventListener("click",()=>{
   disease_obj_array =  makeObjArray(disease) 
    for(let i=0; i<disease_obj_array.length;i++){
        for(let j=i+1; j< disease_obj_array.length; j++){
            if (disease_obj_array[i].disease == disease_obj_array[j].disease){
                console.log(i)
                disease_obj_array[i].count++;
            }
            
        }
        
    }
    console.log(disease_obj_array)
    disease_obj_array.sort((a,b) => {return b.count - a.count})
    console.log(disease_obj_array)
    for(let i = 0; i < disease_obj_array.length; i++){
        disease[i]=disease_obj_array[i].disease;
    }
    attachNode(disease)
    for(let i = 0; i< disease_obj_array.length; i++){
        if(disease_obj_array[i].count > 0){
            html.children[i].className += " diagnosis";

        }
    }

})
function concatArray(partArray,pain_array){
    for(let i=0; i < partArray.length; i++){
        pain_array.push(partArray[i])
    }
}
function attachNode(array){
   
    painParts.innerHTML =""
    html.innerHTML = ""
    for (let i=0; i<array.length; i++){
        let element = document.createElement("li");
        element.innerHTML = array[i]
        element.className = "list";
        element.id = array[i].replace(/ /g,'_')
        element.addEventListener("click",populateDiseases);
        html.appendChild(element);  
    }
    painParts.appendChild(html)
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