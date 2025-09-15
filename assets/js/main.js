// Aguarda o carregamento completo do DOM para garantir que todos os elementos existam
window.addEventListener('DOMContentLoaded', (event) => {

    const switchThemeButton = document.getElementById('switch-theme-button');
    const body = document.body;
    const music = document.getElementById('music');

    // Músicas para os temas
    const lightThemeMusic = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    const darkThemeMusic = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';

    // Função para trocar o tema
    function switchTheme() {
        // Adiciona ou remove a classe 'dark-theme' do body
        body.classList.toggle('dark-theme');

        // Verifica se o tema atual é o escuro
        const isDarkMode = body.classList.contains('dark-theme');

        if (isDarkMode) {
            // MODO ESCURO (Mundo Invertido)
            body.setAttribute('aria-label', 'O site está utilizando o tema dark');
            switchThemeButton.textContent = 'Voltar ao Normal';
            music.src = darkThemeMusic;
        } else {
            // MODO CLARO (Mundo Normal)
            body.setAttribute('aria-label', 'O site está utilizando o tema light');
            switchThemeButton.textContent = 'Inverter Mundos';
            music.src = lightThemeMusic;
        }
        
        // Toca a música após a troca (o navegador pode bloquear o autoplay)
        music.play().catch(error => {
            console.log("O autoplay foi bloqueado pelo navegador. O usuário precisa interagir com a página primeiro.");
        });
    }

    // Adiciona o evento de clique ao botão de troca de tema
    if (switchThemeButton) {
        switchThemeButton.addEventListener('click', switchTheme);
    }
    
    // Funcionalidade do botão de inscrição
    const btnSubscribe = document.getElementById('btnSubscribe');
    if(btnSubscribe) {
        btnSubscribe.addEventListener('click', () => {
            // Pega os valores dos campos
            const name = document.getElementById('txtName').value;
            const email = document.getElementById('txtEmail').value;

            // Validação simples
            if(!name || !email) {
                alert('Por favor, preencha seu Nome e E-mail para se inscrever!');
                return;
            }
            
            // Simula o envio e mostra uma mensagem de sucesso
            alert('Inscrição confirmada! Prepare-se para a aventura no clube de D&D.');
        });
    }
});