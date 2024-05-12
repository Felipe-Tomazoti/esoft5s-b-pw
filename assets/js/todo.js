function callTask(event) {
    event.preventDefault();

    var taskInput = document.getElementById('todo-name');
    var descriptionInput = document.getElementById('todo-description');
    var taskText = taskInput.value.trim();
    var descriptionText = descriptionInput.value.trim();

    if (taskText !== '' && descriptionText !== '') {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        var newTask = {
            task: taskText,
            description: descriptionText
        };

        tasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
        descriptionInput.value = '';

        displayTasks();
    }
}

function displayTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('task-list');

    taskList.innerHTML = '';

    tasks.forEach(function(task) {
        var listItem = document.createElement('li');
        var taskTitle = document.createElement('span'); // Cria um elemento span para o título
        var descriptionText = document.createTextNode(task.description);
        
        // Configura o texto do título
        taskTitle.textContent = task.task + ':';
        taskTitle.className = 'title-bold'; // Adiciona a classe CSS
        
        // Insere o título e a quebra de linha
        listItem.appendChild(taskTitle);
        listItem.appendChild(document.createElement('br')); // Adiciona a quebra de linha
        listItem.appendChild(descriptionText);

        taskList.appendChild(listItem);
    });
}

window.onload = function() {
    displayTasks();
};