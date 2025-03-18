let choice;
let taskList = [];
do {
    choice = +prompt(`
        1. Thêm công việc mới.
        2. Hiển thị tất cả các công việc.
        3. Cập nhật trạng thái công việc theo ID.
        4. Lọc các công việc theo trạng thái (hoàn thành / chưa hoàn thành).
        5. Sắp xếp các công việc theo trạng thái công việc.
        6. Thoát.`);
    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            displayTasks();
            break;
        case 3:
            updateTaskStatusById();
            break;
        case 4:
            filterTasksByStatus();
            break;
        case 5:
            sortTasksByStatus();
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Không hợp lệ");
    }
} while (choice !== 6);
function addTask() {
    let count = +prompt("Nhập số lượng công việc cần thêm:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho công việc thứ ${i + 1}:`);
        let name = prompt("Nhập tên công việc:");
        let description = prompt("Nhập mô tả công việc:");
        let startTime = prompt("Nhập thời gian bắt đầu:");
        let status = prompt("Nhập trạng thái (hoàn thành / chưa hoàn thành):").toLowerCase();
        if (status !== "hoàn thành" && status !== "chưa hoàn thành") {
            console.log("Trạng thái không hợp lệ! Mặc định là 'chưa hoàn thành'.");
            status = "chưa hoàn thành";
        }
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newTask = {
            id: id,
            name: name,
            description: description,
            startTime: startTime,
            status: status
        };
        taskList.push(newTask);
        console.log("Thêm công việc thành công", newTask);
    }
}
function displayTasks() {
    if (taskList.length === 0) {
        console.log("Danh sách công việc trống!");
    } else {
        taskList.forEach(function (element, index) {
            console.log(`Công việc ${index + 1}`);
            console.log("ID: ", element.id);
            console.log("Tên: ", element.name);
            console.log("Mô tả: ", element.description);
            console.log("Thời gian bắt đầu: ", element.startTime);
            console.log("Trạng thái: ", element.status);
            console.log("-------------------------");
        });
    }
}
function updateTaskStatusById() {
    let id = +prompt("Nhập ID của công việc cần cập nhật trạng thái:");
    let findIndex = taskList.findIndex(task => task.id === id);
    if (findIndex !== -1) {
        let newStatus = prompt("Nhập trạng thái mới (hoàn thành / chưa hoàn thành):").toLowerCase();
        if (newStatus === "hoàn thành" || newStatus === "chưa hoàn thành") {
            taskList[findIndex].status = newStatus;
            console.log("Cập nhật trạng thái thành công!", taskList[findIndex]);
        } else {
            console.log("Trạng thái không hợp lệ!");
        }
    } else {
        console.log("Không tìm thấy công việc có ID:", id);
    }
}
function filterTasksByStatus() {
    let status = prompt("Nhập trạng thái cần lọc (hoàn thành / chưa hoàn thành):").toLowerCase();
    let filteredTasks = taskList.filter(task => task.status === status);
    if (filteredTasks.length === 0) {
        console.log(`Không có công việc nào có trạng thái: ${status}`);
    } else {
        filteredTasks.forEach(function (element, index) {
            console.log(`Công việc ${index + 1}`);
            console.log("ID: ", element.id);
            console.log("Tên: ", element.name);
            console.log("Mô tả: ", element.description);
            console.log("Thời gian bắt đầu: ", element.startTime);
            console.log("Trạng thái: ", element.status);
            console.log("-------------------------");
        });
    }
}
function sortTasksByStatus() {
    taskList.sort((a, b) => {
        return a.status.localeCompare(b.status);
    });
    console.log("Danh sách công việc đã được sắp xếp theo trạng thái!");
    displayTasks();
}