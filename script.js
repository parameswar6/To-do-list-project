// script.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        // Add a complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.marginRight = '10px';
        completeButton.onclick = function () {
            li.classList.toggle('completed');
        };
        
        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            li.remove();
        };
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
}
