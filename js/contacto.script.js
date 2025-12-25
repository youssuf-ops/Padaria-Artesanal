// Envio de dados em Formulários

// formData = {nome: "Mileidi", email: "email@email.com"}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");
  const phoneInput = document.getElementById("phone");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // impede a submissão tradicional do formulario

    //Validação simples: Se o nome estiver vazio, para aqui

    if (nomeInput.value.trim() === "") {
      alert("Por favor, preencha o seu nome.");
      return;
    }

    let dados = new FormData(formulario);

    // exibir os dados no console
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ":" + valor);
    }

    alert("Obrigado! Em breve falamos consigo. 🥐");

    //PARA REINICIAR O FORMULARIO
    formulario.reset();
  });

  //Evento "input" corrigido para disparar erro Apenas em letras
  phoneInput.addEventListener("input", function (event) {
    const errorSpan = document.getElementById("phone-error");

    //Pegamos o valor atual e o último carácter digitado
    const valorAtual = this.value;

    //testamos se o valor atual contem qualquer caractere que nao seja 0 a 9
    if (valorAtual.length > 0 && /[^0-9]/.test(valorAtual)) {
      // 1. Mostra o erro apenas se houver letras
      errorSpan.style.display = "block";
      // 2. Limpa o caracter inválido imediatamente
      this.value = valorAtual.replace(/[^0-9]/g, "");

      //3. Esconde o erro após 2 segundos
      setTimeout(() => {
        errorSpan.style.display = "none";
      }, 2000);
    } else {
      // se estiver tudo bem ou vazio, esconde o erro
      errorSpan.style.display = "none";
    }
  });
});
