const form = document.querySelector("form");
let ordemServicoList = JSON.parse(localStorage.getItem("ordemServico")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputNome = document.getElementById("inputNome");
  const inputSetor = document.getElementById("inputSetor");
  const inputEquipamento = document.getElementById("inputEquipamento");
  const selectAtividade = document.querySelector("#atividade");
  const inputDescricao = document.getElementById("inputDescricao");

  const ordemServico = {
    id: generateCode(),
    dataAbertura: new Date().toLocaleString("pt-BR", { hour12: false }),
    cliente: inputNome.value,
    setor: inputSetor.value,
    equipamento: inputEquipamento.value,
    atividade: selectAtividade.value,
    descricao: inputDescricao.value,
  };

  ordemServicoList.push(ordemServico);
  localStorage.setItem("ordemServico", JSON.stringify(ordemServicoList));
  form.reset();

  const textConfirm = document.getElementById("confirm-text")

  textConfirm.innerHTML = `Ordem de Serviço [${ordemServico.id}] Cadastrada!`


  function generateCode() {
    const codigo = Math.floor(Math.random() * 10000);
    const codigoComPrefixo = `OS${codigo.toString().padStart(4, '0')}`; // adiciona 'OS' no início do código
    return codigoComPrefixo;
  }


});

//console.table(ordemServicoList);

