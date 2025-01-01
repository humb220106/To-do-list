function addTask() {
   const taskInput = document.getElementById('taskInput');
   const taskList = document.getElementById('taskList');

   if (taskInput.value.trim() !== '') {
       const li = document.createElement('li');
       li.className = 'todo-item';
       li.innerHTML = `
         <input type="checkbox" onclick="toggleTask(this)" />
         <span>${taskInput.value}</span>
         <button class="delete-icon" onclick="deleteTask(this)">×</button>
       `;
       taskList.appendChild(li);
       taskInput.value = '';
   }
}

function deleteTask(button) {
   const taskItem = button.parentElement;
   taskItem.remove();
}

function toggleTask(checkbox) {
   const taskText = checkbox.nextElementSibling;
   if (checkbox.checked) {
       taskText.style.textDecoration = 'line-through';
       taskText.style.color = 'gray';
   } else {
       taskText.style.textDecoration = 'none';
       taskText.style.color = 'black';
   }
}