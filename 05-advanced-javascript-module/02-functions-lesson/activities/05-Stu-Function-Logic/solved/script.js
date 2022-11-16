function equality(a,b) {
    var output = a + "[" + typeof(a) + "]" + " and " + b + "[" + typeof(b) + "]";
    if (a===b)     { output += " are equal in value and type"; }
    else if (a==b) { output += " are equal in value"; }
    else if (a!=b) { output += " are not equal"; }
    console.log(output);
}

equality(10,10);
equality(10,"10");
equality(10,"banana");

console.log("\n");

var iterateArray = function(array) {
    for(var i = 0; i < array.length; i++) {
        var output = "index is " + i;
        if (i < 10) { output += " which is less than 10"; }
        else { output += " which is not less than 10"; }
        console.log(output);
    }
}

var myArray = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ];
iterateArray(myArray);
