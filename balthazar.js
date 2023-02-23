
const form = document.querySelector('form');

const pilha = [];
var id = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputNome = document.getElementById('inputNome');
  const inputSetor = document.getElementById('inputSetor');
  const inputEquipamento = document.getElementById('inputEquipamento');
  const selectAtividade = document.querySelector('#atividade');
  const inputDescricao = document.getElementById('inputDescricao');

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };


    const ordemServico = {
    
    id: ++id.toString(),  
    dataAbertura: new Date().toLocaleDateString("PT-br", options),
    cliente: inputNome.value,
    setor: inputSetor.value,
    equipamento: inputEquipamento.value,
    atividade: selectAtividade.value,
    descricao: inputDescricao.value,


  }

  //console.log(ordemServico)

  form.reset();

  pilha.push(ordemServico);

  localStorage.setItem('ordemServico', JSON.stringify(pilha));

  

})


const ordemServicoSalva = JSON.parse(localStorage.getItem('ordemServico'));
  console.table(ordemServicoSalva);

// recuperando o objeto de LocalStorage

