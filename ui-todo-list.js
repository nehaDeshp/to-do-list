
   //Create a div to contain list of tasks
    
    var toDoList = document.createElement("div");
    toDoList.id = "to-do-list";
    var toDoTask = document.createElement('ul'); 
	

    //Add Listbox in the div along with UL element
    window.onload = function (){

        var mainDiv = document.getElementById('app');
        mainDiv.appendChild(toDoList);
        toDoTask.id = 'to-do-task';
        toDoList.appendChild(toDoTask);
        console.log(document.getElementById('chk').title);
    }
    var chkBoxID = 0;
    
    //onclick of add
    function addToList() {

        //create new List element
        var listElement = document.createElement('li');

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
        chkBoxList.onchange = function(){
           label1.style="text-decoration-line: line-through;";

       }
     
    }
   