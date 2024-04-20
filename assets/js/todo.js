// Função para adicionar uma tarefa
function callTask(event) {
    event.preventDefault();

    var taskInput = document.getElementById('todo-input');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';

        // Atualizar a lista de tarefas na página
        updateTaskList();
    }
}

// Função para atualizar a lista de tarefas na página
function updateTaskList() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('task-list');

    // Limpar a lista atual
    taskList.innerHTML = '';

    // Adicionar cada tarefa à lista
    tasks.forEach(function(task) {
        var listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

// Carregar tarefas existentes quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    updateTaskList();
});