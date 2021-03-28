var tasks= {};

// create task element
var createTask= function(taskText, taskList) {
    var taskLi= $("<li>").addClass("list-element");
    var taskP= $("<textarea>").addClass("text-area").text(taskText);

    // append p element to parent li
     taskLi.append(taskP);

    // append ul to the page
    $("#list-" + taskList).append(taskP);


    console.log(taskLi);
    console.log(taskP);
};

// save button is clicked
$("#saveBtn01").click(function() {
    var taskText= $("#modaltask01").val().trim();
    console.log(taskText);
    localStorage.setItem("0800 HR",taskText);
});
$("#saveBtn02").click(function() {
    var taskText= $("#modaltask02").val().trim();
    console.log(taskText);
    localStorage.setItem("0900 HR", taskText);
});
$("#saveBtn03").click(function() {
    var taskText= $("#modaltask03").val().trim();
    console.log(taskText);
    localStorage.setItem("1000 HR", taskText);
});

// save into local storage
var saveTask= function(taskText) {
    localStorage.setItem("taskText", JSON.stringify(taskText));
};




   createTask();