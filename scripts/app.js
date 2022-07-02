const nonImpIcon = 
const impIcon =
var isImportant = false;
var isVisible = true;

function toggleImportant() {
    if (isImportant) {
        $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
        isImportant = false;
    } else {
        $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
        isImportant = true; 
    }
}    

function togglePanel() {
    console.log("Toggle panel");
    if (isVisible) {
        $("#pnlform").fadeOut();
        isVisible = false;
    } else {
        $("#pnlform").fadeIn();
        isVisible = true;
    }    
}

$("#iImportant").removeClass(nonImpIcon);
$("#iImportant").addClass(impIcon);

function saveTask(){
   console.log("Saving Your Stuff"); 
   let project = $("#txtTitle").val();
   let priority = $("#selPriority").val();
   let deadline = $("#txtDeadline").val();
   let duration = $("#txtDuration").val();
   let resources = $("#txtResources").val();
   let status = $("#selStatus").val();
 

   let task = new Task(0, project, priority, deadline, duration, resources, status);     //object
   console.log(task);

   $.ajax() {
    URL: "https://fsdiapi.azurewebsites.net/api/tasks/",
    type: "POST",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function(response) {
        let savedTask = JSON.parse(response);   //parse json response into js object
        displayTask(savedTask);
        console.log("Server says: ", response);
    error: function( details) {
        console.log("Error saving", details);
    }    
    }
    function getStatusText(status) {
       switch (status) {
        case "0":
            return "New";
        case "1":
            return "in Progress";
        case "3":
            return "Blocked";
        case "6":
            return "Completed";
        case "9":
            return "Removed";
        default:
            return "missing";                   
       } 
    }


   function displayTask(task) {
    let statusText = getStatusText(task.status);

     let syntax = `<div class="task"><h3>${task.project}</h3>
     </div>`
     `<div class="import">
     <label>${task.priority}</label>
     <label>${task.deadline}</label>
     </div>`
     `<div class="time">
     <label${task.duration}</label>
     <label>${task.status}</label>
     </div>`

     $("#task-list").append(syntax);
   }
}
function testRequest() {
    $.ajax({
        url: "https/fsdiapi.azurewebsites.net/",
        type: "GET",
        success: function(response) {
          console.log(response);
        },
        error: function(errorDet) {
          console.log("Error on request", errorDet);
        }
    });
}
    //  send a GET request to https://fsdiapi.azurewebsites.net/api/tasks
    //  response=>json string
    //  parse the response => array
    //  console.log the array
function deleteAll() {
  $.ajax({
    url: "https://fsdiapi.aurewebsites.net/api/tasks/clear/kacy",
    type: "DELETE",
    success: function(response) {
        $("#task-list").html("");
    },    
    error: function(details) {
      console.log("error");
    }    
    })
  }

function init(){
   // runTests();
    console.log("task manager");

    //load data
    fetchTasks() {
        $.ajax({
            url: "https://fsdiapi.azurewebsites.net/api/tasks",
            type: GET,
            success: function(response) {
                let tasks = JSON.parse(response);
                for (let i=0; i<tasks.length; i++)
                let item = tasks[i];
                if (item.name == "kacy") {
                    displayTasks(item);
                }
                console.log(tasks);
            }    
            error: function(details) {
                console.log("Unable to fetch", details);
            }    
        });
    }

    //hook events
    $("#iImportant").click(toggleImportant);
    $("#btnShowHide").click(togglePanel); 
    $("#btn-save").click(saveTask);  
    $("#btn-Clear").click(deleteAll);
 }


window.onload = init;