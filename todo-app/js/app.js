let tasks = loadTasks();
let currentFilter = "all";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  input.value = "";

  saveTasks(tasks);
  renderTasks(tasks, currentFilter);
  updateTaskCount();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks(tasks, currentFilter);
  updateTaskCount();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(tasks, currentFilter);
  updateTaskCount();
}

function updateTaskCount() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;

  document.getElementById("taskCount").textContent =
    `全体: ${total} / 未完了: ${active} / 完了: ${completed}`;
}

addBtn.onclick = addTask;

input.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.onclick = () => {
    currentFilter = btn.dataset.filter;
    renderTasks(tasks, currentFilter);
  };
});

renderTasks(tasks, currentFilter);
updateTaskCount();