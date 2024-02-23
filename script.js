
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
               
  const analyze = document.getElementById("analyze");
  analyze.addEventListener("click", ()=>{
    let featuresUrl ="https://api.endlessmedical.com/v1/dx/GetFeatures";
   fetch(featuresUrl)
        .then((response)=>{   let dataG = response.json();
        console.log(dataG)})
        .catch(e=>{
            console.log(e);
        });
});


document.getElementById("send").addEventListener("click", ()=>{
    let updateUrl = "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionID.SessionID+"&name=Age&value=40&name=BMI&value=30&name=Temp&value=40";
    fetch(updateUrl,{method:'POST'})
    .then((response)=>{   let dataG = response.json();
    console.log(dataG)})
    .catch(e=>{
        console.log(e);
    });
})
document.getElementById("get").addEventListener("click", ()=>{
    let getUrl = "https://api.endlessmedical.com/v1/dx/GetOutcomes";
    fetch(getUrl)
    .then((response)=>{   let dataG = response.json();
    console.log(dataG)})
    .catch(e=>{
        console.log(e);
    });
}
)
