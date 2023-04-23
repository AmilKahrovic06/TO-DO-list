let btn = document.getElementById('btn-add');
let input = document.getElementById('input-task');
let zadaci = document.getElementById('zadaci');
btn.addEventListener('click', function() {
  if (input.value === '') {
  alert('Unesite zadatak u polje.');
  } else {
  let task = document.createElement('div');
  task.className = 'task';
  zadaci.appendChild(task);
  let taskContent = document.createElement('div');
  taskContent.className = 'task-content';
  task.appendChild(taskContent);

  let taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.className = 'task-checkbox';
  taskContent.appendChild(taskCheckbox);

  let taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = input.value;
  taskContent.appendChild(taskText);

  let taskDelete = document.createElement('button');
  taskDelete.className = 'task-delete';
  taskDelete.textContent = 'Obriši';
  task.appendChild(taskDelete);

  input.value = '';

  taskDelete.addEventListener('click', function() {
      task.remove();
  });

  taskCheckbox.addEventListener('change', function() {
      if (taskCheckbox.checked) {
          taskText.style.textDecoration = 'line-through';
      } else {
          taskText.style.textDecoration = 'none';
      }
  });
}
});