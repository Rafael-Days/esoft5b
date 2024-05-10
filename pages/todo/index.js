
/*
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
  }*/

  function enviar(e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    const nome = formData.get('name');
    const descricao = formData.get('desc');

    let listaDeTarefas = JSON.parse(localStorage.getItem('listaDeTarefas')) || [];

    listaDeTarefas.push({ nome: nome, descricao: descricao });

    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));

    form.reset();

    alert('Tarefa salva com sucesso!');
}
