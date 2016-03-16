var input = document.getElementById('input_');
var button = document.getElementById('submit_btn');
var output = document.getElementById('output_div');

button.addEventListener('click', function (){
    var list = document.getElementById("list");
 var li = document.createElement("li");
    var task = document.createTextNode(input.value);
    li.appendChild(task);
    output.appendChild(li);
    list.insertBefore(li, list.childNodes[0]);

});

