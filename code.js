// Code for the page. Written in JavaScript language.

$(document).ready(runPage);

function runPage() {

    addClick($("#submitButton"), submitClick);
    addClick($("#startAgain"), startAgainClick);
}

function submitClick() {

    var input = $("#inputField").val();

    var output = double(input);

    $("#outputField").text(output);

    $("#output").removeClass("before");
    $("#output").addClass("after");        
}

function startAgainClick() {

    location.reload(false);
}
