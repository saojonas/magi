const form = document.querySelector("form");
const ordemServicoList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputNome = document.getElementById("inputNome");
  const inputSetor = document.getElementById("inputSetor");
  const inputEquipamento = document.getElementById("inputEquipamento");
  const selectAtividade = document.querySelector("#atividade");
  const inputDescricao = document.getElementById("inputDescricao");

  const ordemServico = {
    id: ordemServicoList.length + 1,
    dataAbertura: new Date().toLocaleString("pt-BR", { hour12: false }),
    cliente: inputNome.value,
    setor: inputSetor.value,
    equipamento: inputEquipamento.value,
    atividade: selectAtividade.value,
    descricao: inputDescricao.value,
  };

  form.reset();
  ordemServicoList.push(ordemServico);
  localStorage.setItem("ordemServico", JSON.stringify(ordemServicoList));
});

const ordemServicoSalva = JSON.parse(localStorage.getItem("ordemServico")) || [];
console.table(ordemServicoSalva);
