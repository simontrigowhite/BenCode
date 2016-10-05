// Ben's code. Written in JavaScript language.


function factorial(x) {
	if (isNaN(x)) {
		alert ("That's not a number");
		return "";
	}
	var i;
	var total;

	total=1;
	for (i = 1; i <= x; i++) {
		total=total*i;
	}


    return total;

}
