function popularTabela() {
  const ordemServicoSalva = JSON.parse(localStorage.getItem("ordemServico"));
  const tbody = document.querySelector(".content table tbody");
  tbody.innerHTML = "";

  ordemServicoSalva.forEach((ordemServico) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="idOS">${ordemServico.id}</td>
      <td class="dateOpen">${ordemServico.dataAbertura}</td>
      <td class="name">${ordemServico.cliente}</td>
      <td class="sector">${ordemServico.setor}</td>
      <td class="equip">${ordemServico.equipamento}</td>
      <td class="active">${ordemServico.atividade}</td>
      <td class="description">${ordemServico.descricao}</td>
      <td class="actions-td">
        <button class="btn-transform btn-edit" data-index="${ordemServico.id}"><span class="material-symbols-outlined">edit_note</span></button>
        <button class="btn-transform btn-delete" data-index="${ordemServico.id}"><span class="material-symbols-outlined">inventory_2</span></button>
        <button class="btn-transform" id="btn-print" data-index="${ordemServico.id}"><span class="material-symbols-outlined">print</span></button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // adiciona o tratamento de eventos aos botões
  tbody.addEventListener("click", (event) => {
    const btnEdit = event.target.closest(".btn-edit");
    if (btnEdit) {
      const index = btnEdit.getAttribute("data-index");
      const ordemServico = ordemServicoSalva.find((ordem) => ordem.id === index);
      console.log("edita?", ordemServico);
    }

    const btnDelete = event.target.closest(".btn-delete");
if (btnDelete) {
  const index = btnDelete.getAttribute("data-index");
  const ordemServico = ordemServicoSalva.find((ordem) => ordem.id === index);
  const confirmDelete = confirm(`Deseja realmente excluir a ordem de serviço ${ordemServico.id}?`);
  
  if (confirmDelete) {
    const newOrdemServicoSalva = ordemServicoSalva.filter((ordem) => ordem.id !== index);
    localStorage.setItem("ordemServico", JSON.stringify(newOrdemServicoSalva));
    popularTabela();
  }
}

    const btnPrint = event.target.closest("#btn-print");
    if (btnPrint) {
      const index = btnPrint.getAttribute("data-index");
      const ordemServico = ordemServicoSalva.find((ordem) => ordem.id === index);
      const data = [ordemServico];
      const url = `nervnode.html?dados=${encodeURIComponent(JSON.stringify(data))}`;
      window.open(url, "_blank");
    }
  });
}

popularTabela();

// atualiza a tabela a cada 30 segundos
setInterval(() => {
  popularTabela();
}, 30000);
