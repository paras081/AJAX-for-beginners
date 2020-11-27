//step-1 creat XMLHttpRequest object
var objGetSubjectInfo = new XMLHttpRequest();

//step-2 request server resource name
objGetSubjectInfo.open("GET","serverResource.txt");

//step-3 send the request
objGetSubjectInfo.send();



//step-4 define readystate change and call the appropriate function
objGetSubjectInfo.onreadystatechange = loadSubjectText;

//step-5 defining function for on ready state change
function loadSubjectText(){
    
    if(objGetSubjectInfo.readyState === 4){
        
        if(objGetSubjectInfo.status === 200){
            document.getElementById('textTarget').innerHTML = objGetSubjectInfo.responseText;
        }else{
            alert('Error Code:'+objGetSubjectInfo.status+' '+objGetSubjectInfo.statusText);
        }
    }
}
    
  