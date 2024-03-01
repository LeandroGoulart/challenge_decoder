const textoEntrada = document.querySelector('.area-texto-entrada');
const mensagem = document.querySelector('.mensagem');
let matrizComandos = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

const imagensResposta [
    
]

// Função para criptografar o texto
function criptografar(string) {
    let msgEncriptada = string.toLowerCase();
    for (let i = 0; i < matrizComandos.length; i++) {
        msgEncriptada = msgEncriptada.replaceAll(matrizComandos[i][0], matrizComandos[i][1]);
    }

    // Trocar a imagem
    const enderecoImagem = "caminho/para/imagem.png";
    trocarImagem(enderecoImagem);

    // Mudar o foco para a textarea "mensagem"
    focusTextArea();

    return msgEncriptada;
}



function descriptografar(string) {
    let msgDecodificada = string.toLowerCase();
    for (let i = 0; i < matrizComandos.length; i++) {
        msgDecodificada = msgDecodificada.replaceAll(matrizComandos[i][1], matrizComandos[i][0]);
    }
    
    // Trocar a imagem
    const enderecoImagem = "caminho/para/imagem.png";
    trocarImagem(enderecoImagem);

    // Mudar o foco para a textarea "mensagem"
    focusTextArea();

    return msgDecodificada;
}

function focusTextArea() {
    const textareaMensagem = document.querySelector('.mensagem');
    textareaMensagem.focus();
}


// Função para limpar o texto
function limparTexto() {
    textoEntrada.value = '';
    mensagem.value = 'Mensagem não encontrada';
}

// Função para copiar o conteúdo da caixa de texto
function copiarTexto() {
    const mensagem = document.querySelector('.mensagem');
    const texto = mensagem.value; // Obtém o texto da área de texto

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao copiar texto:', error);
            alert('Erro ao copiar texto. Por favor, tente novamente.');
        });
}
