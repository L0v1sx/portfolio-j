document.querySelector('.area-contato form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios antes do envio.");
        return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail com formato válido (exemplo: usuario@dominio.com).");
        return;
    }

    console.log("Formulário enviado com sucesso!", { nome, email, mensagem });

    alert(`Obrigada pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);

    this.reset();
});