(function () {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const addButton = document.getElementById("add-button");
  const categorySelect = document.getElementById("category-select");
  const filterSelect = document.getElementById("filter-select");

  // Function to add a new task
  function addTask() {
    const taskText = inputBox.value.trim();
    const taskCategory = categorySelect.value;

    if (taskText === "") {
      alert("Please enter a valid task!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${taskText} (${taskCategory})`;
    li.dataset.category = taskCategory;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;";
    deleteButton.className = "delete-button";
    deleteButton.ariaLabel = "Delete task";

    li.appendChild(deleteButton);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
  }

  // Save tasks to localStorage
  function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach((li) => {
      tasks.push({
        text: li.firstChild.textContent,
        category: li.dataset.category,
        completed: li.classList.contains("checked"),
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Load tasks from localStorage
  function showList() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    listContainer.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      li.dataset.category = task.category;
      if (task.completed) li.classList.add("checked");

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&times;";
      deleteButton.className = "delete-button";
      deleteButton.ariaLabel = "Delete task";

      li.appendChild(deleteButton);
      listContainer.appendChild(li);
    });
  }

  // Filter tasks by category
  function filterTasks() {
    const filter = filterSelect.value;
    listContainer.querySelectorAll("li").forEach((li) => {
      if (filter === "All" || li.dataset.category === filter) {
        li.style.display = "list-item";
      } else {
        li.style.display = "none";
      }
    });
  }

  // Event listener for adding tasks
  addButton.addEventListener("click", addTask);

  // Add task on pressing Enter
  inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Event listener for toggling and deleting tasks
  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("delete-button")) {
      e.target.parentElement.remove();
      saveData();
    }
  });

  // Event listener for filtering tasks
  filterSelect.addEventListener("change", filterTasks);

  showList();
})();
