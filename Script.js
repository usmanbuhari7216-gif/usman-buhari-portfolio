function togglemenu() {
    let menu = document.getElementById("menu");

    menu.classList.toggle("active");
}

function darkMode() {
    document.body.classList.toggle("dark-mode");
}
function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message is ready to send.");
}
let count = 0;

function increase() {
    count++;
    document.getElementById("counter").textContent = count;
}

function decrease() {
    count--;
    document.getElementById("counter").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").textContent = count;
}
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
li.innerHTML = task +
    ' <button onclick="completeTask(this)">Done</button>' +
    ' <button onclick="editTask(this)">Edit</button>' +
    ' <button onclick="deleteTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    saveTasks();

    input.value = "";
}
function editTask(button) {
    let li = button.parentElement;

    let oldTask = li.firstChild.textContent.trim();

    let newTask = prompt("Edit your task:", oldTask);

    if (newTask === null || newTask.trim() === "") {
        return;
    }

    li.firstChild.textContent = newTask + " ";

    saveTasks();
}
function completeTask(button) {
    button.parentElement.style.textDecoration = "line-through";
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    let tasks = localStorage.getItem("tasks");

    if (tasks) {
        document.getElementById("taskList").innerHTML = tasks;
    }
}
loadTasks();
let skills = ["HTML", "CSS", "JavaScript", "AI"];

console.log(skills);

console.log(skills[0]);
console.log(skills[2]);

skills.push("Python");

console.log(skills);
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
let skillsList = ["HTML", "CSS", "JavaScript", "AI", "Python"];

let skillsContainer = document.querySelector(".skills-container");

skillsContainer.innerHTML = "";

for (let i = 0; i < skillsList.length; i++) {
    let card = document.createElement("div");

    card.className = "skills-card";

    card.innerHTML = `
        <h3>${skillsList[i]}</h3>
        <p>Learning and improving my ${skillsList[i]} skills.</p>
    `;

    skillsContainer.appendChild(card);
}
let developer = {
    name: "Usman Buhari",
    role: "Software Developer",
    skill: "JavaScript"
};

console.log(developer.name);
console.log(developer.role);
console.log(developer.skill);
