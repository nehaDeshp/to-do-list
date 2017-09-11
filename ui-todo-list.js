
//Create a div to contain list of tasks

var toDoList = document.createElement("div");
toDoList.id = "to-do-list";
var toDoTask = document.createElement('ul'); 
var txtBoxValidation = document.createElement("div");
txtBoxValidation.className="validationMessage";
var mainDiv;
//Add Listbox in the div along with UL element
window.onload = function (){

    mainDiv = document.getElementById('app');
    mainDiv.appendChild(txtBoxValidation);
    mainDiv.appendChild(toDoList);
    toDoTask.id = 'to-do-task';
    toDoList.appendChild(toDoTask);
}
var chkBoxID = 0;

//onclick of add
function addToList() {

    if(validateForm()){
        //create new List element
        var listElement = document.createElement('li');
        listElement.id="myList";
        //define properties for Input tag chklist
        var chkBoxList = document.createElement("input");
        chkBoxList.type = 'checkbox';
        chkBoxList.id = "chk" + chkBoxID;
        chkBoxID++;

        //define value for the checkbox
        var chklistVal = document.createTextNode(document.getElementById('txtAdd').value);
        var label1=document.createElement("label");
        label1.appendChild(chklistVal);

        //create checkListTask
        listElement.appendChild(chkBoxList);
        listElement.appendChild(label1);
        //append nodes to the ul list
        toDoTask.appendChild(listElement);
        chkBoxList.onclick = function(){
            if(chkBoxList.checked)
                label1.style="text-decoration-line: line-through;";
            else
                label1.style="tetext-decoration-line: none";
        }
        txtBoxValidation.style="visibility:hidden";
    }
}

function validateForm(){

    //Text Box Validate
    var value = document.getElementById('txtAdd').value;
    var msg;
    if(value == ""){
        msg  =  document.createTextNode("Please provide input into the task List");
        var label = document.createElement('label');
        label.appendChild(msg);
        txtBoxValidation.appendChild(label);
        txtBoxValidation.style="visibility:visible"
        return false;
    }
    return true;
}