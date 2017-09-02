//Create adiv to contain list of tasks
var listDiv = document.createElement("div");
listDiv.id = "to-do-list";

//onclick of add
function addToList(){

    var mainDiv = document.getElementById('list');
    mainDiv.appendChild(listDiv);

    var chkList = document.createElement('ul'); 
    chkList.id = 'to-do-task';
    listDiv.appendChild(chkList);

    var listElement = document.createElement('li');

    var chkBoxList = document.createElement("input");
    chkBoxList.type ='checkbox';
    chkBoxList.id="chk1";
    var chklistVal = document.createTextNode(document.getElementById('txtAdd').value);  
   
    listDiv.appendChild(listElement);
    listElement.appendChild(chkBoxList);
    listElement.appendChild(chklistVal);
 }
