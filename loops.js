function showTask() {
    var task = document.getElementById("input-task").value;
    var inputField = document.getElementById("input-task");
    var btn = document.getElementsByTagName("button");
    var tasklist = document.getElementsByTagName("ul")[0];
    var apndTask = document.getElementsByTagName("li")[0];

    var newTask = document.createElement("li");
    var textnode = document.createTextNode(task);
    newTask.appendChild(textnode);
    tasklist.appendChild(newTask);

    newTask.onclick = function () {
        tasklist.removeChild(newTask);
    };

    inputField.onfocus = function () {
        inputField.value = '';
    };
}