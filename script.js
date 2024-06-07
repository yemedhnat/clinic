
let url = 'https://api.endlessmedical.com/v1/dx/InitSession'

 async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
 
var dataM = (async () => {
    try {
       sessionID = await fetchData(url);
      userAgreement(sessionID)
    } catch (error) {
      console.error(error);
      console.log("ayncError")
    }
  })();

 
  
  function userAgreement(dataM){
    var fetchUrl = "https://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID="+sessionID.SessionID+"&passphrase=I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com"
      fetch(fetchUrl, {method:'POST'})
        .then(response => {response.json();
          
        console.log(sessionID)}) // Parse the response as JSON
        
        .catch(error => {
                console.error(error); // Handle errors
                console.log("fetchError")
        });
  }
               
 /* const analyze = document.getElementById("analyze");
  analyze.addEventListener("click", ()=>{
    let featuresUrl ="https://api.endlessmedical.com/v1/dx/GetFeatures";
   fetch(featuresUrl)
        .then((response)=>{   let dataG = response.json();
        console.log(dataG)})
        .catch(e=>{
            console.log(e);
        });
});*/
//////////////   Data Collection  //////////////////////////////////////*





document.getElementById("send").addEventListener("click", ()=>{
        const allCheckBoxes = document.getElementsByClassName("ckbx");
        var queryString = "";
        const checkBoxes = Array.from(allCheckBoxes);
        console.log(checkBoxes)
        for(let i=0; i<checkBoxes.length;i++){
          if (checkBoxes[i].checked){
            let updateUrl4 = "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionID.SessionID+"&name="+checkBoxes[i].id+"&value=5";
              console.log(updateUrl4)
              fetch(updateUrl4,{method:'POST'})
              .then((response)=>{   let dataG = response.json();
              console.log(dataG)}) 
              .catch(e=>{
                  console.log(e);
            });
            
          }
        }
        var weight = parseFloat(document.getElementById("weight").value);
        console.log(weight)
        var height = parseFloat(document.getElementById("height").value); 
        var BMI = weight/height/height
        
        var age= document.getElementById("age").value;
        queryString=queryString + "&name=BMI&value=" + BMI;
        //queryString=queryString + "&name=Gender&value=" + document.getElementById("gender").value;

    let updateUrl = "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionID.SessionID+"&name=Age&value="+age;
    fetch(updateUrl,{method:'POST'})
    .then((response)=>{   let dataG = response.json();
    console.log(dataG)}) 
    .catch(e=>{
        console.log(e);
    });


  let updateUrl2 = "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionID.SessionID+"&name=BMI&value="+BMI;
  console.log(updateUrl2)
  fetch(updateUrl2,{method:'POST'})
  .then((response)=>{   let dataG = response.json();
  console.log(dataG)
  document.getElementById("get").style.display = "block";})
  .catch(e=>{
      console.log(e);
});
let updateUrl3 = "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionID.SessionID+"&name=Gender&value="+"2";
  fetch(updateUrl3,{method:'POST'})
  .then((response)=>{   let dataG = response.json();
  console.log(dataG)}) 
  .catch(e=>{
      console.log(e);
});




});
document.getElementById("get").addEventListener("click", ()=>{
    let getUrl = "https://api.endlessmedical.com/v1/dx/Analyze?SessionID="+sessionID.SessionID;
    fetch(getUrl)
    .then((response)=>{   return response.json();
    }).then(dataG=>{console.log(Object.keys(dataG.Diseases[0])[0])
      document.getElementById("diseases").innerHTML = Object.keys(dataG.Diseases[0])[0];
    })
    .catch(e=>{
        console.log(e);
    });
}
)
