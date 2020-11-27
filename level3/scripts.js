//step-1 creat XMLHttpRequest object
var objCountryInfo = new XMLHttpRequest();

//step-2 request server resource name
objCountryInfo.open("GET","countryList.json");

//step-3 send the request
objCountryInfo.send();



//step-4 define readystate change and call the appropriate function
objCountryInfo.onreadystatechange = loadCountryList;

//step-5 defining function for on ready state change
function loadCountryList(){
    
    if(objCountryInfo.readyState === 4){
        
        if(objCountryInfo.status === 200)
        {
            var countryList = JSON.parse(objCountryInfo.responseText);
            text = document.getElementById('textTarget');
            for(i in countryList){
                text.innerHTML += countryList[i].name+"<br>";
            }
        }else{
            alert('Error Code:'+objCountryInfo.status+' '+objCountryInfo.statusText);
        }
    }
}
    
  