refreshPage();

    function refreshPage() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskList = document.getElementById('task-list');

      storedTasks.forEach(task => {
        const listItem = createTaskElement(task);
        taskList.appendChild(listItem);
      });
    }

    function addTask() {
      const newTask = document.getElementById('new-task').value.trim();
      if (newTask) {
        const taskList = document.getElementById('task-list');
        const listItem = createTaskElement(newTask);
        taskList.appendChild(listItem);
        document.getElementById('new-task').value = '';
        saveTasks();
      }
    }

    function createTaskElement(taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      listItem.addEventListener('click', function () {
        listItem.style.textDecoration = "line-through";
        saveTasks();
      });

      listItem.addEventListener('dblclick', function () {
        this.remove();
        saveTasks();
      });

      return listItem;
    }

    function saveTasks() {
      const tasks = Array.from(document.querySelectorAll('#task-list li')).map(task => task.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }