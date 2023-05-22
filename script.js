let btn = document.getElementById("btn");

function swap() {
    if (btn.textContent === "Discord") {
        btn.textContent = "M.Emanuel#6725";
        btn.value = "M.Emanuel#6725";
        var texto = "M.Emanuel#6725";
        /* Cria um elemento de área de transferência temporário */
        var textareaTemp = document.createElement("textarea");
        textareaTemp.value = texto;
        /* Adiciona o elemento temporário ao corpo do documento */
        document.body.appendChild(textareaTemp);
        /* Seleciona o texto no elemento de área de transferência temporário */
        textareaTemp.select();
        textareaTemp.setSelectionRange(0, textareaTemp.value.length);
        /* Copia o texto selecionado para a área de transferência */
        document.execCommand("copy");
        /* Remove o elemento de área de transferência temporário */
        document.body.removeChild(textareaTemp);
        /* Exibe uma mensagem de sucesso */
        alert(texto + " Copiado");

    } else {
        btn.textContent = "Discord";
        btn.value = "Discord";
    }
}

btn.addEventListener('click', swap);