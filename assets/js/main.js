function switchTheme() {
  const body = document.body;
  const button = document.getElementById('themeSwitcher'); 
  
  // Alterna as classes de tema no body
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Atualiza o atributo aria-label e o texto do botão com base no tema atual
  if (body.classList.contains('dark-theme')) {
    body.setAttribute('aria-label', 'O site está utilizando o tema dark');
    button.textContent = 'Voltar para o Mundo Normal';
  } else {
    body.setAttribute('aria-label', 'O site está utilizando o tema light');
    button.textContent = 'Entrar no Mundo Invertido';
  }
}

// Adiciona um event listener ao botão para chamar a função switchTheme
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcherButton = document.getElementById('themeSwitcher');
    if (themeSwitcherButton) {
        themeSwitcherButton.addEventListener('click', switchTheme);
    }
});