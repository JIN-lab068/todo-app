function createTaskElement(task, index) {
  const li = document.createElement("li");

  if (task.completed) {
    li.classList.add("completed");
  }

  const span = document.createElement("span");
  span.textContent = task.text;

  span.onclick = () => toggleTask(index);

  const delBtn = document.createElement("button");
  delBtn.textContent = "×";
  delBtn.onclick = () => deleteTask(index);

  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

function renderTasks(tasks, filter = "all") {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (
      (filter === "active" && task.completed) ||
      (filter === "completed" && !task.completed)
    ) return;

    list.appendChild(createTaskElement(task, index));
  });
}