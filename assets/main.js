// Matriz de comandos para criptografar e descriptografar
const matrizComandos = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];
console.log(matrizComandos);

// Função para criptografar uma string
function criptografar(string) {
    let stringEncriptada = string.toLowerCase();
    for (let i = 0; i < matrizComandos.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizComandos[i][0], matrizComandos[i][1]);
    }
    return stringEncriptada;
}

// Função para descriptografar uma string
function descriptografar(string) {
    let stringDescriptada = string.toLowerCase();
    for (let i = 0; i < matrizComandos.length; i++) {
        stringDescriptada = stringDescriptada.replaceAll(matrizComandos[i][1], matrizComandos[i][0]);
    }
    return stringDescriptada;
}

// Função para limpar o texto de entrada e a área de saída
function limparTexto() {
    const textoEntrada = document.querySelector('.area-texto-entrada');
    const mensagem = document.querySelector('.mensagem');
    textoEntrada.value = '';
    mensagem.value = 'Mensagem não encontrada';
}

// Função para copiar o texto da área de saída para a área de transferência
function copiarTexto() {
    const mensagem = document.querySelector('.mensagem');
    mensagem.select();
    document.execCommand('copy');
}

// Adicionar eventos de clique aos botões de limpar e copiar
document.querySelector('.btn-limpar').addEventListener('click', limparTexto);
document.querySelector('.btn-copiar').addEventListener('click', copiarTexto);

// Adicionar evento de clique ao botão de criptografar
document.querySelector('.btn-criptografar').addEventListener('click', () => {
    const textoEntrada = document.querySelector('.area-texto-entrada').value;
    const mensagem = document.querySelector('.mensagem');
    mensagem.value = criptografar(textoEntrada);
});

// Adicionar evento de clique ao botão de descriptografar
document.querySelector('.btn-descriptografar').addEventListener('click', () => {
    const textoEntrada = document.querySelector('.area-texto-entrada').value;
    const mensagem = document.querySelector('.mensagem');
    mensagem.value = descriptografar(textoEntrada);
});
