// selecionando o formulário
const form = document.querySelector('form');

// criando a pilha (array) para armazenar os objetos
const pilha = [];

// adicionando um listener de evento para o formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne que a página seja recarregada

  // selecionando os campos do formulário
  const inputNome = document.getElementById('inputNome');
  const inputSetor = document.getElementById('inputSetor');
  const inputEquipamento = document.getElementById('inputEquipamento');
  const selectAtividade = document.querySelector('#atividade');
  const inputDescricao = document.getElementById('inputDescricao');

  // criando um objeto com os valores dos campos
  const obj = {
    nome: inputNome.value,
    setor: inputSetor.value,
    equipamento: inputEquipamento.value,
    atividade: selectAtividade.value,
    descricao: inputDescricao.value
  };

  // empilhando o objeto na pilha (array)
  pilha.push(obj);

  // limpando os campos do formulário
  form.reset();

  console.log(pilha); // exibindo a pilha no console
});
