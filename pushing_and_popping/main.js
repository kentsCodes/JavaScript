document.write("<h2>Popping an item off an array</h2>");

let companies = ["Apple","Microsoft","Canonical","Samsung"];
document.write("Before popping: " + companies.join(", ") + "<br>");

// pops the last item off the array
companies.pop();
document.write("After popping: " + companies.join(", ") + "<br><br>");

document.write("<h2>Pushing an item onto an array</h2>");

// put the popped item back
companies[companies.length] = "Samsung";
document.write("Before pushing: " + companies.join(", ") + "<br>");

// push an item
companies.push("Huawei");
document.write("After popping: " + companies.join(", ") + "<br>");
