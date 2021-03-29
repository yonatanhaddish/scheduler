var button= $(".saveBtn");

$(document).ready(function() {
    var rightNow= moment().format('dddd MMMM Do');

    $("#currentDay").text(rightNow);
});

    function currentTime() {
        var nowHour= moment().hours();
        var time= $(".row");
        console.log(nowHour);
    }









// var tasks= {};


// // save button is clicked to corresponding task
// $("#saveBtn01").click(function() {
//     var taskText= $("#modaltask01").val().trim();
//     console.log(taskText);
//     localStorage.setItem("0800 HR",taskText);
// });
// $("#saveBtn02").click(function() {
//     var taskText= $("#modaltask02").val().trim();
//     console.log(taskText);
//     localStorage.setItem("0900 HR", taskText);
// });
// $("#saveBtn03").click(function() {
//     var taskText= $("#modaltask03").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1000 HR", taskText);
// });
// $("#saveBtn04").click(function() {
//     var taskText= $("#modaltask04").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1100 HR",taskText);
// });
// $("#saveBtn05").click(function() {
//     var taskText= $("#modaltask05").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1200 HR", taskText);
// });
// $("#saveBtn06").click(function() {
//     var taskText= $("#modaltask06").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1300 HR", taskText);
// });
// $("#saveBtn07").click(function() {
//     var taskText= $("#modaltask07").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1400 HR",taskText);
// });
// $("#saveBtn08").click(function() {
//     var taskText= $("#modaltask08").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1500 HR", taskText);
// });
// $("#saveBtn09").click(function() {
//     var taskText= $("#modaltask09").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1600 HR", taskText);
// });
// $("#saveBtn10").click(function() {
//     var taskText= $("#modaltask10").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1700 HR", taskText);
// });
// $("#saveBtn11").click(function() {
//     var taskText= $("#modaltask11").val().trim();
//     console.log(taskText);
//     localStorage.setItem("1800 HR", taskText);
// });

// // save into local storage
// var saveTask= function(taskText) {
//     localStorage.setItem("taskText", JSON.stringify(taskText));
// };

// var loadTask= function() {
//     tasks= JSON.parse(localStorage.getItem("taskText"));
//     console.log(tasks);
// };


// //    createTask();



//  var rightNow= new Date();
//  $("#currentDay").html(rightNow);
//  console.log(rightNow);
//  console.log(typeof rightNow);

