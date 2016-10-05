// Code for the page. Written in JavaScript language.

$(document).ready(runPage);

function runPage() {

    addClick($("#submitButton"), submitClick);
    addClick($("#startAgain"), startAgainClick);
}

function submitClick() {

    var input = $("#inputField").val();

    var output = factorial(input);

    $("#outputField").text(output);
    if (output=="") {
	    return;
    }
    $("#output").removeClass("before");
    $("#output").addClass("after");        
}

function startAgainClick() {

    location.reload(false);
}
