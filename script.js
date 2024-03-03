document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Obtém os valores do formulário
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  // Adiciona uma nova linha à tabela
  var table = document.getElementById("contactsTable").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();

  // Adiciona as células à nova linha
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Adiciona os valores do formulário às células
  cell1.innerHTML = name;
  cell2.innerHTML = phone;

  // Limpa os campos do formulário
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
});
