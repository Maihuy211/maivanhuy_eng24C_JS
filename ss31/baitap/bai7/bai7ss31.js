let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    }
];
const ul = document.getElementById("myUL");
let listHTML = ""; 

todoList.forEach(item => {
    let className = ""; 
    if (item.completed) {
        className = "checked"; 
    }
    listHTML += `
        <li class="${className}">${item.task} <span class="close">×</span></li>
    `;
});

ul.innerHTML = listHTML;