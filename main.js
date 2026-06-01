// ===================== VALIDAÇÃO DO FORMULÁRIO =====================
const form = document.getElementById('youthForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value.trim();
  const idade = parseInt(document.getElementById('idade').value);

  // Limpa mensagem anterior
  messageDiv.className = '';
  messageDiv.textContent = '';

  let isValid = true;

  // Validação do Nome
  if (nome.length < 3) {
    showMessage('O nome deve ter pelo menos 3 caracteres.', 'error');
    isValid = false;
  }

  // Validação da Idade
  if (isNaN(idade) || idade < 14 || idade > 30) {
    if (isValid) {
      showMessage('A idade deve estar entre 14 e 30 anos.', 'error');
    } else {
      messageDiv.textContent += ' E a idade deve estar entre 14 e 30 anos.';
    }
    isValid = false;
  }

  // Sucesso
  if (isValid) {
    showMessage(`✅ Cadastro realizado com sucesso! Bem-vindo(a), ${nome}!`, 'success');
    form.reset(); // limpa o formulário
  }
});

// ===================== FUNÇÃO PARA EXIBIR MENSAGEM =====================
function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.classList.add(type);
}
