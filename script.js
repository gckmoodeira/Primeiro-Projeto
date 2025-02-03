function converter() {
    let taxa = parseFloat(document.getElementById("taxa").value);
    let de = document.getElementById("de").value;
    let para = document.getElementById("para").value;
    let resultado = document.getElementById("resultado");
    let historico = document.getElementById("historico");

    if (isNaN(taxa) || taxa <= 0) {
        resultado.innerText = "Por favor, insira um valor válido para a taxa.";
        return;
    }

    let taxaConvertida;

    // Conversão baseada no tipo selecionado
    if (de === "anual" && para === "mensal") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 1 / 12) - 1) * 100).toFixed(4);
    } else if (de === "mensal" && para === "anual") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 12) - 1) * 100).toFixed(4);
    } else if (de === "anual" && para === "diaria") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 1 / 365) - 1) * 100).toFixed(4);
    } else if (de === "diaria" && para === "anual") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 365) - 1) * 100).toFixed(4);
    } else if (de === "mensal" && para === "diaria") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 1 / 30) - 1) * 100).toFixed(4);
    } else if (de === "diaria" && para === "mensal") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 30) - 1) * 100).toFixed(4);
    } else if (de === "anual" && para === "semestral") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 1 / 2) - 1) * 100).toFixed(4);
    } else if (de === "semestral" && para === "anual") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 2) - 1) * 100).toFixed(4);
    } else if (de === "mensal" && para === "semestral") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 6) - 1) * 100).toFixed(4);
    } else if (de === "semestral" && para === "mensal") {
        taxaConvertida = ((Math.pow(1 + (taxa / 100), 1 / 6) - 1) * 100).toFixed(4);
    } else {
        resultado.innerText = "Conversão inválida. Escolha unidades diferentes.";
        return;
    }

    let descricao = `Taxa ${de} para ${para}: ${taxaConvertida}%`;
    resultado.innerText = descricao;

    // Adiciona ao histórico
    let item = document.createElement("li");
    item.innerText = descricao;
    historico.appendChild(item);
}