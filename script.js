document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio do formulário

        // Aqui você faria o processamento de dados (ex: envio para o servidor)
        // Como estamos apenas simulando, vamos apenas mostrar uma mensagem

        message.style.display = 'block';
        message.textContent = 'Pagamento realizado com sucesso! Aguardando confirmação do PIX.';
        
        // Limpa os campos do formulário após a submissão
        form.reset();
    });
});

// Função para selecionar o sabor e mudar a cor da caixinha
document.querySelectorAll('.flavor-option').forEach(option => {
    option.addEventListener('click', function() {
        const flavorBox = this.querySelector('.flavor-box');
        
        // Troca a cor da caixinha para laranja quando o sabor for selecionado
        flavorBox.style.backgroundColor = 'orange';

        // Desmarcar as outras opções e resetar a cor das caixinhas
        this.parentElement.querySelectorAll('.flavor-box').forEach(box => {
            if (box !== flavorBox) {
                box.style.backgroundColor = 'transparent'; // Resetando as caixinhas não selecionadas
            }
        });

        // Marcar o botão "Comprar" com a borda laranja
        this.closest('.product').querySelector('.buy-btn').classList.add('selected');
    });
});

// Remover a borda laranja do botão "Comprar" quando o produto for desmarcado
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedBox = this.closest('.product').querySelector('.flavor-box[style="background-color: orange;"]');

        if (!selectedBox) {
            alert('Por favor, selecione um sabor antes de comprar!');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("checkout-form");
    const mensagem = document.getElementById("mensagem");
    const barraPagamento = document.getElementById("barra-pagamento");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que a página recarregue

        // Exibe a mensagem
        mensagem.classList.remove("hidden");

        // Faz a barra de pagamento descer após 1.5s
        setTimeout(() => {
            barraPagamento.style.bottom = "20px";
        }, 1500);
    });
});

