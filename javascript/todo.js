var input = document.getElementById('input_');
var button = document.getElementById('submit_btn');
var output = document.getElementById('output_div');

button.addEventListener('click', function (){
 var p = document.createElement("p");
    var task = document.createTextNode(input.value);
    p.appendChild(task);
    output.appendChild(p);

});

