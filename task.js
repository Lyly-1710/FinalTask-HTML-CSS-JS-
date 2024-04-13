// Khai báo biến items và lấy dữ liệu từ localStorage hoặc một mảng rỗng nếu không có dữ liệu
var items = JSON.parse(localStorage.getItem("todo-list")) || [];

// Lấy các phần tử HTML mỗi khi DOM được load
const newCate = document.querySelector("#Cate");
const newTitle = document.querySelector("#Title");
const newContent = document.querySelector("#Content");

const neweCate = document.querySelector("#eCate");
const neweTitle = document.querySelector("#eTitle");
const neweContent = document.querySelector("#eContent");

// Thêm sự kiện "oninput" cho các trường 
document.addEventListener("DOMContentLoaded", function() {
    newCate.addEventListener("input", function() {
        removeBorderColor("Cate");
    });

    newTitle.addEventListener("input", function() {
        removeBorderColor("Title");
    });

    newContent.addEventListener("input", function() {
        removeBorderColor("Content");
    });

    // Hiển thị danh sách ban đầu
    display();
});

// Hiển thị overlay khi người dùng nhấn nút "New Task"
function overlay() {
    document.getElementById("addTask").style.display = "flex";
}

// Thêm một mục mới vào danh sách và cập nhật localStorage
function addTodo() {
    if (!checkEmpty(newCate) && !checkEmpty(newTitle) && !checkEmpty(newContent)) {
        var item1 = newCate.value;
        var item2 = newTitle.value;
        var item3 = newContent.value;
        items.push({
            category: item1,
            title: item2,
            content: item3
        });
        newCate.value = ""
        newTitle.value = ""
        newContent.value = ""
        localStorage.setItem('todo-list', JSON.stringify(items));
        display(); 
        document.getElementById("addTask").style.display = "none";
    } else {
        check(); // Nếu có trường rỗng, kiểm tra và hiển thị borderColor
    }
}

// Kiểm tra xem một trường nhập liệu có rỗng không
function checkEmpty(check) {
    return check.value === "";
}

// Loại bỏ viền đỏ khi người dùng điền dữ liệu vào trường nhập liệu
function removeBorderColor(id) {
    document.getElementById(id).style.borderColor = "";
}

// Hiển thị danh sách các mục trong localStorage
function display() { 
    var list = "";
    for (var i = 0; i < items.length; i++) {
        list += "<div id='task'>";
        list += "<div id='taskHeader'><div id='category'>" + items[i].category + "</div>" +
        "<div class='taskIcon'><i class='fa-regular fa-pen-to-square' onclick='editTask(" + i + ")' style='margin-right: 4px'></i>" +
        "<i class='fa-solid fa-trash' onclick='delTask(" + i + ")'></i></div></div>";
        list += "<div id='title'><h1>" + items[i].title + "</h1>" +
        "<div class='h1_line'></div>" +
        "</div>";
        list += "<div id='content'>" + items[i].content + "</div>";
        list += "</div>";
    }
    document.querySelector("#todo-list").innerHTML = list;
}

//dong bang add
function aclose()
{
    document.getElementById("addTask").style.display = "none";
}
function eclose()
{
    document.getElementById("edittask").style.display = "none";
}

// xoa task
function delTask(index)
{
    items.splice(index, 1);
    localStorage.setItem("todo-list", JSON.stringify(items));
    display();
}

//edit Task
//edit Task
var num;
function editTask(index) {
    document.getElementById("edittask").style.display = "flex";

    var getItems1 = items[index].category;
    var getItems2 = items[index].title;
    var getItems3 = items[index].content;

    neweCate.value = getItems1;
    neweTitle.value = getItems2;
    neweContent.value = getItems3;
    
    num = index;
    
}
function editTodo()
{
    
    items.push({
        category: neweCate.value,
        title: neweTitle.value,
        content: neweContent.value
    });
    localStorage.setItem('todo-list', JSON.stringify(items));
    display(); 
    delTask(num);
}
function out()
{
    window.location.href = "./index.html";
}

