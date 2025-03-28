function processTasks() {
    let btnAdd = document.getElementById("add");
    let taskInput = document.getElementById("taskName");
    let pendingTasks = document.getElementById("pendingTasks");
    let inProgressTasks = document.getElementById("inProgressTasks");
    let doneTasks = document.getElementById("doneTasks");

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        pendingTasks.innerHTML = "";
        inProgressTasks.innerHTML = "";
        doneTasks.innerHTML = "";

        tasks.forEach((task, index) => {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.setAttribute("data-id", index);

            let taskName = document.createElement("span");
            taskName.textContent = task.name;
            taskDiv.appendChild(taskName);

            if (task.status === "pending") {
                let btnMove = document.createElement("button"); // tạo ra một phần tử ... trên HTML 
                btnMove.textContent = "Chuyển tiếp";
                btnMove.onclick = function () {
                    updateTaskStatus(index, "inProgress");
                };
                taskDiv.appendChild(btnMove); // thêm một phần tử con vào phần tử cha
                pendingTasks.appendChild(taskDiv); 
            } else if (task.status === "inProgress") {
                let btnMove = document.createElement("button");
                btnMove.textContent = "Hoàn thành";
                btnMove.onclick = function () {
                    updateTaskStatus(index, "done");
                };
                taskDiv.appendChild(btnMove);
                inProgressTasks.appendChild(taskDiv);
            } else {
                doneTasks.appendChild(taskDiv);
            }
        });
    }
    function updateTaskStatus(index, newStatus) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (tasks[index]) {
            tasks[index].status = newStatus;
            saveTasks(tasks);
            loadTasks();
        }
    }
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    btnAdd.onclick = function () {
        let taskName = taskInput.value.trim();
        if (taskName === "") {
            alert("Vui lòng nhập tên công việc");
            return;
        }
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ name: 
            taskName, 
            status: "pending" 
        });
        saveTasks(tasks);
        taskInput.value = "";
        loadTasks();
    };

    loadTasks();
}
document.addEventListener("DOMContentLoaded", processTasks);
