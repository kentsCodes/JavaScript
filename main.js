// gets the text in <h1>
let demo = document.getElementById("demo").innerHTML;

// converts the text in <h1> to uppercase and replaces the orginal text
demo = demo.toUpperCase();
document.getElementById("demo").innerHTML = demo;
