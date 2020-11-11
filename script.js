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

    // checks time blocks vs current time and color codes accordingly
    function colorCode() {
        var currentTime = moment().hours();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("-")[0]);

            if (timeBlock === currentTime) {
                $(this).addClass("present");
            }
            else if (timeBlock < currentTime) {
                $(this).addClass("past");
            }
            else {
                $(this).addClass("future");
            }
        });
    } colorCode();

});