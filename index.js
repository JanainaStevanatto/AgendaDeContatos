function adicionarContato() {
  // Obter valores do formulário
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  // Criar uma nova linha na tabela
  var tabela = document.getElementById("tabelaContatos");
  var novaLinha = tabela.insertRow(tabela.rows.length);

  // Inserir células na nova linha
  var celulaNome = novaLinha.insertCell(0);
  var celulaTelefone = novaLinha.insertCell(1);

  // Preencher células com os valores do formulário
  celulaNome.innerHTML = nome;
  celulaTelefone.innerHTML = telefone;

  // Limpar valores do formulário
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
}