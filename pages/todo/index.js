const taskKey = '@tasks'

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault() // Evita o recarregamento da página
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')
  const button = formData.get('button')

  const li = document.createElement('li')


  li.id = taskId
  li.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
      <button>✏️</button>
  `


  taskList.appendChild(li)

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({ title: taskTitle, description: taskDescription, button: button })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList') 
  taskList.innerHTML = tasks
    .map((task) => `<li><h2>${task.title}</h2><p>${task.description}</p><button>✏️</button></li>`)
    .join('')
})

const buttons = document.querySelectorAll('li button');
buttons.forEach(button => {
  button.style.position = 'absolute';
  button.style.top = '10px'; // Ajuste conforme necessário
  button.style.right = '10px'; // Ajuste conforme necessário
  button.style.backgroundColor = '#676767';
  button.style.borderRadius = '5px';
});
