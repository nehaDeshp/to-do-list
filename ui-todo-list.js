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
    }
    var chkBoxID = 0;
    
    //onclick of add
    function addToList() {

        //create new List element
        var listElement = document.createElement('li');

        //define properties for Input tag chklist
        var chkBoxList = document.createElement("input");
        chkBoxList.type = 'checkbox';
        chkBoxList.id="chk"+chkBoxID;
        chkBoxID++;
        chkBoxList.addEventListener('change', crossout);
        //define value for the checkbox
        var chklistVal = document.createTextNode(document.getElementById('txtAdd').value);  

        //append nodes to the ul list
        toDoTask.appendChild(listElement);
        alert("li added");
        listElement.appendChild(chkBoxList);
        listElement.appendChild(chklistVal);
    }

    function crossout() {
        var selected = this.id;
        console.log(selected + ":" + );
    }