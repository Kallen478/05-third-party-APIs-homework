$(document).ready(function () {

    // displays current time and date in jumbotron
    var currentDay = $("#currentDay");
    var showTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(showTime);

    // saves user input
    for (var i = 9; i < 17; i++) {
        var selectID = ('#' + i + '-block .description');
        var userInput = localStorage.getItem(i + '-block');
        $(selectID).val(userInput);
        console.log(userInput);
    }

    // saveButton listener
    $(".saveButton").on("click", function () {
        var saveItem = $(this).parent().attr("id");
        console.log(saveItem);
        var itemValue = $(this).siblings(".description").val();
        console.log(itemValue);
        localStorage.setItem(saveItem, itemValue);
    });

   

});