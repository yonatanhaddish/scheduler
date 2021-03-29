var button= $(".saveBtn");

$(document).ready(function() {
    var rightNow= moment().format('dddd MMMM Do');

    $("#currentDay").text(rightNow);


    function currentTime() {
        var nowHour= moment().hours();
        var time= $(".row");
    }
    currentTime()

    button.on("click", function(event) {
        event.preventDefault();
        var text= $(this).siblings(".col-md-10").val().replace();
        var parent= $(this).parent().attr("id");
        localStorage.setItem(parent, JSON.stringify(text));
    })

    $('#8 textarea').val(localStorage.getItem('8'));
    $('#9 textarea').val(localStorage.getItem('9'));
    $('#10 textarea').val(localStorage.getItem('10'));
    $('#11 textarea').val(localStorage.getItem('11'));
    $('#12 textarea').val(localStorage.getItem('12'));
    $('#13 textarea').val(localStorage.getItem('13'));
    $('#14 textarea').val(localStorage.getItem('14'));
    $('#15 textarea').val(localStorage.getItem('15'));
    $('#16 textarea').val(localStorage.getItem('16'));
    $('#17 textarea').val(localStorage.getItem('17'));
    $('#18 textarea').val(localStorage.getItem('18'));


    

});

