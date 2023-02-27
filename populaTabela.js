function popularTabela() {
  const ordemServicoSalva = JSON.parse(localStorage.getItem("ordemServico"));
  const tbody = document.querySelector(".content table tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < ordemServicoSalva.length; i++) {
    const ordemServico = ordemServicoSalva[i];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="idOS">${ordemServico.id}</td>
      <td class="dateOpen">${ordemServico.dataAbertura}</td>
      <td class="name">${ordemServico.cliente}</td>
      <td class="sector">${ordemServico.setor}</td>
      <td class="equip">${ordemServico.equipamento}</td>
      <td class="active">${ordemServico.atividade}</td>
      <td class="description">${ordemServico.descricao}</td>
    `;

    tbody.appendChild(row);
  }
}

popularTabela();

// atualiza a tabela a cada 5 segundos
setInterval(() => {
  popularTabela();
}, 5000);