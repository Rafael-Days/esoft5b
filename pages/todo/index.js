

localStorage.setItem(lsTarefasKey, JSON.stringify(lsTarefasObj))

salvarTarefa()

function salvarTarefa() {
    var tarefa = document.getElementById('tarefa').value;
    
    if (tarefa.trim() !== '') {
      var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  
      tarefas.push(tarefa);
  
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
  
      document.getElementById('tarefa').value = '';
  
      //mostrarTarefas();
    }
  }
