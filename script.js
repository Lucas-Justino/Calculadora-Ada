function lerNumero(){
    let valor = prompt("Digite o valor:");

    while(isNaN(valor) || valor === "" || valor.trim() === ""){ //VERIFICAÇÃO PARA ACEITAR APENAS NÚMEROS, O TRIM USADO PARA REMOVER TODOS OS ESPAÇOS DA ENTRADA
        valor = prompt("Valor incorreto! Digite novamente:")
    }
    return valor;
}

function lerOperacao(){
    let operacao = prompt("Digite a operação: '+', '-', '*', '/', '%', 'LOG', 'RAIZ'");
    const operacoesValidas = ['+', '-', '*', '/', '%', 'LOG', 'RAIZ'];

    while (!operacoesValidas.includes(operacao)) { //SE ACASO A OPERACAO LIDA NÃO ESTIVER DENTRO DAS OPERAÇÕES VÁLIDAS, REPETE A LEITURA DA OPERAÇÃO
        operacao = prompt("Operação inválida! Digite novamente:");
    }

    return operacao;
}

function calcular(){
    let numero1 = lerNumero();
    let operacao = lerOperacao();
    let numero2 = lerNumero();
    let resultado;
    
    switch(operacao){
        case "+":
            resultado = numero1 + numero2; 
            break;

        case "-":
            resultado = numero1 - numero2;
            break;
            
        case "*":

            break;
        case "/":

            break;
        case "%":

            break;
        case "LOG":

            break;
        case "RAIZ":

            break;
        default:
            console.log("Operacao Inválida");
            break;
    }
    return resultado;
}

console.log(calcular());