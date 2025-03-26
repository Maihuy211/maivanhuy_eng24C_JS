let btn = document.getElementById("btn-addBookMark");
let div = document.getElementById("addBookMark");
let body = document.getElementById("body");
let close_container = document.getElementById("container-title-close");
let btnSave = document.getElementById("btn-save");
let bookmarksContainer = document.getElementById("bookmarkList");
let arr = JSON.parse(localStorage.getItem("arrlist")) || [];
btn.onclick = function () {
    div.style.display = "block";
    body.style.backgroundColor = "cornsilk";
};

close_container.onclick = function () {
    div.style.display = "none";
    body.style.backgroundColor = "white";
};
btnSave.onclick = function () {
    let nameWeb = document.getElementById("nameWeb").value;
    let url = document.getElementById("url").value;
    if (nameWeb === "" || url === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    arr.push({
        id: arr.length + 1,
        name: nameWeb,
        url: url,
    });
    save();
    div.style.display = "none";
    body.style.backgroundColor = "white";
    add();
};
function add() {
    bookmarksContainer.innerHTML = "";
    arr.forEach((element) => {
        bookmarksContainer.innerHTML += `
            <div class="bookMark">
                <div onclick="locate(${element.id})">${element.name}</div>
                <div onclick="removeBookmark(${element.id})">x</div>
            </div>
        `;
    });
}
function locate(id) {
    let index = arr.findIndex((element) => element.id == id);
    if (index !== -1) {
        window.location.href = arr[index].url;
    }
}
function removeBookmark(id) {
    arr = arr.filter((element) => element.id !== id);
    save();
    add();
}
function save() {
    localStorage.setItem("arrlist", JSON.stringify(arr));
}
add();
