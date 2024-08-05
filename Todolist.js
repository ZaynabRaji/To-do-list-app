
function addtask(event) {
    event.preventdefault(); // block the page from refreshing
    addtask();
    const from = document.querySelector("form");
    from.addEventListener("submit", addtask);

    const taskinput = document.queryselector('#task'); // or we can use document.getElementById("task");
    const tasktext = taskinput.value.trim(); // trim remove white spaces
    if (tasktext !== "") {
        var taskitem = document.createElement("div");
        taskitem.className = "Task-item";
        var taskvalue = document.createElement("textarea");
        taskvalue.textContent = tasktext;

        var editbutton = document.createElement("button");
        editbutton.textContent = "Edit";
        editbutton.className = "Edit-button";
        editbutton.addEventListener("click", function () { edittask(taskvalue); })

        var deletebutton = document.createElement("button");
        deletebutton.textContent = "delete";
        deletebutton.className = "Delete-button";
        deletebutton.addEventListener("click", function () { deletetask(taskitem); })

        // add elements to the task item div than to container : 
        taskitem.appendChild(taskvalue);
        taskitem.appendChild(editbutton);
        taskitem.appendChild(deletebutton);
        const container = document.querySelector(".container")
        container.appendChild(taskitem);

    }
}

function edittask(taskvalue) {
    var newtext = prompt("Edit-task", taskvalue.textContent); // ???????????
    if (newtext !== "") {
        taskvalue.textContent = newtext.trim();
    }
}

function deletetask(taskitem) {
    taskitem.remove();
}
