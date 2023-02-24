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
      <td>
        <button class="btn-transform btn-edit" data-index="${i}"><span class="material-symbols-outlined">edit_note</span></button>
        <button class="btn-transform btn-delete" data-index="${i}"><span class="material-symbols-outlined">inventory_2</span></button>
        <button class="btn-transform btn-print" data-index="${i}"><span class="material-symbols-outlined">print</span></button>
      </td>
    `;

    tbody.appendChild(row);
  }

  // adiciona o tratamento de eventos aos botões
  const btnsEdit = document.querySelectorAll(".btn-edit");
  btnsEdit.forEach((btnEdit) => {
    btnEdit.addEventListener("click", (event) => {
      const index = event.currentTarget.getAttribute("data-index");
      const ordemServico = ordemServicoSalva[index];

      // código para edição da OS
    });
  });

  const btnsRemove = document.querySelectorAll(".btn-remove");
  btnsRemove.forEach((btnRemove) => {
    btnRemove.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      ordemServicoSalva.splice(index, 1);
      localStorage.setItem("ordemServico", JSON.stringify(ordemServicoSalva));
      popularTabela();
    });
  });

  const btnsPrint = document.querySelectorAll(".btn-print");
  btnsPrint.forEach((btnPrint) => {
    btnPrint.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      const ordemServico = ordemServicoSalva[index];

      const newDoc = document.implementation.createHTMLDocument();
      const section = newDoc.createElement('section');
      section.innerHTML = `
  <h1>Ordem de Serviço #${ordemServico.id}</h1>
  <p><strong>Data de Abertura:</strong> ${ordemServico.dataAbertura}</p>
  <p><strong>Cliente:</strong> ${ordemServico.cliente}</p>
  <p><strong>Setor:</strong> ${ordemServico.setor}</p>
  <p><strong>Equipamento:</strong> ${ordemServico.equipamento}</p>
  <p><strong>Atividade:</strong> ${ordemServico.atividade}</p>
  <p><strong>Descrição:</strong> ${ordemServico.descricao}</p>
`;
      newDoc.body.appendChild(section);

      // Abre a janela de impressão do navegador
      window.print();

    });
  });
}

popularTabela();

// atualiza a tabela a cada 5 segundos
setInterval(() => {
  popularTabela();
}, 5000);
