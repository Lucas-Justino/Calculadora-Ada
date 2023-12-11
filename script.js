function lerNumero(){
    let valor = prompt("Digite o valor:");

    while(isNaN(valor) || valor === "" || valor.trim() === ""){ //VERIFICAÇÃO PARA ACEITAR APENAS NÚMEROS, O TRIM USADO PARA REMOVER TODOS OS ESPAÇOS DA ENTRADA
        valor = prompt("Valor incorreto! Digite novamente:")
    }
    return parseFloat(valor);
}

function lerOperacao(){
    let operacao = prompt("Digite a operação: '+', '-', '*', '/', '%', 'LN', 'RAIZ', 'EXP'");
    const operacoesValidas = ['+', '-', '*', '/', '%', 'LN', 'RAIZ', 'EXP'];

    while (!operacoesValidas.includes(operacao)) { //SE ACASO A OPERACAO LIDA NÃO ESTIVER DENTRO DAS OPERAÇÕES VÁLIDAS, REPETE A LEITURA DA OPERAÇÃO
        operacao = prompt("Operação inválida! Digite novamente: '+', '-', '*', '/', '%', 'LN', 'RAIZ', 'EXP'");
    }

    return operacao;
}


//função criada para aparecer os valores e resultado no corpo da página, ficando mais fácil a visualização 
// e evitando usar o CONSOLE para visualização do cálculo
function escreve(numero) {
    let output = document.querySelector('#output')
    output.innerHTML = numero; 
}

function escreverOperacao(numero1, operacao, numero2, resultado) {
    operacaoTotal = numero1 + ' ' + operacao + ' ' + numero2 + ' = ' + resultado;
    escreve(operacaoTotal);
}

function calcular(){
    let numero1 = lerNumero();
    let operacao = lerOperacao();
    let numero2 = "";
    let resultado;
    
    switch(operacao){
        case "+":
            numero2 = lerNumero();
            resultado = numero1 + numero2; 
            break;

        case "-":
            numero2 = lerNumero();
            resultado = numero1 - numero2;
            break;

        case "*":
            numero2 = lerNumero();
            resultado = numero1 * numero2;
            break;
            
        case "/":
            numero2 = lerNumero();
            if (numero2 === 0) {
                console.log('Não é possível dividir por 0')
                return; //isso aqui vai fazer com que a função se encerre caso tente uma divisão por 0.
            } 

            resultado = numero1 / numero2;
            break;

        case "%":
            numero2 = lerNumero();
            resultado = (numero1 / 100) * numero2;
            break;  
            
        case "LN":
            resultado = Math.log(numero1);
            break;

        case "RAIZ":
            resultado = Math.sqrt(numero1);
            break;
            
        case "EXP":
            numero2 = lerNumero();
            resultado = Math.pow(parseFloat(numero1 ), parseFloat(numero2));
            break;

        default:
            console.log("Operacao Inválida");
            break;
    }
    
    escreverOperacao(numero1, operacao, numero2, resultado)
    return resultado;
}

console.log(calcular());