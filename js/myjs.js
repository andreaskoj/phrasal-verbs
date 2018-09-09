//variables 
var drawBtn = document.getElementById("drawBtn");
var records =document.getElementById("records");
//event listeners
drawBtn.addEventListener("click", function() {
//requesting phresal verbs from json file
var requestData = new XMLHttpRequest();
requestData.open("GET", "data/phrasals.json", true);
requestData.onload = function() {
    if (requestData.status >=200 && requestData.status < 400) {
        var PhresalsData = JSON.parse(requestData.responseText);
        pushHtml(PhresalsData);
    }
    else
    console.log("No return from server.");   
};    
requestData.send();
});
//prepare html
function pushHtml (data){
var PhrasalsDataLength = data.length;
var htmlString = '<thead><tr><th scope="col">Phrasal verb</th><th scope="col">Meaning</th><th scope="col">Example sentence</th></tr></thead><tbody>';     
    for(i=0; i<3;i++) {
    var verbNumber = PhrasalRaffle(PhrasalsDataLength) 
    htmlString = htmlString +"<tr><td>" + data[verbNumber].phrasalverb + "</td><td>" + data[verbNumber].meaning + "</td><td>" +
    data[verbNumber].examplesentence + "</td></tr>"   
    }
htmlString = htmlString + "</tbody>";
records.innerHTML = "";
records.insertAdjacentHTML('beforeend', htmlString);    
}
//Drawing specific verb
function PhrasalRaffle (QtyRecords) {
  var number = parseInt((Math.random()*QtyRecords ),10);
    return number
}

