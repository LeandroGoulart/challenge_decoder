let textoRecebido = document.getElementById('campo-texto');
let mensagem = document.getElementById('campo-mensagem');

let matrizComandos = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]

const listaImagensResposta = [
    { id: 1, name: "opened", src: "./assets/images/opened.jpg" },
    { id: 2, name: "locked", src: "./assets/images/locked.jpg" },
    { id: 3, name: "copy", src: "./assets/images/copy.png" },
    { id: 4, name: "search", src: "./assets/images/search.jpg" }
];

// Função para criptografar o texto
function criptografar(strEncriptada) {
    let textoCriptografado = '';

    for (let i = 0; i < strEncriptada.length; i++) {
        let letraOriginal = strEncriptada[i];
        let letraCriptografada = letraOriginal;

        for (let j = 0; j < matrizComandos.length; j++) {
            if (letraOriginal === matrizComandos[j][0]) {
                letraCriptografada = matrizComandos[j][1];
                break;
            }
        }

        textoCriptografado += letraCriptografada;
    }

    return textoCriptografado;
}

function btnEncriptar(){
    const textoCriptografado = criptografar(textoRecebido.value);
    mensagem.innerText = textoCriptografado;
    trocarImagemResposta('locked');
    textoRecebido.value = '';
}



// Função para decodificar o texto
function decodificar(strDecodificada) {
    let textoDecodificado = '';

    for (let i = 0; i < strDecodificada.length; i++) {
        let letraCriptografada = strDecodificada[i];
        let letraDecodificada = letraCriptografada;

        for (let j = 0; j < matrizComandos.length; j++) {
            if (letraCriptografada === matrizComandos[j][1]) {
                letraDecodificada = matrizComandos[j][0];
                break;
            }
        }

        textoDecodificado += letraDecodificada;
    }

    return textoDecodificado;
}

function btnDecodificar(){
    const textoDecodificado = decodificar(textoRecebido.value);
    mensagem.innerText = textoDecodificado;
    trocarImagemResposta('opened');
    textoRecebido.value = '';
}




// Função para limpar o texto
function limparTexto() {
    textoRecebido.value = '';
    mensagem.value = 'Mensagem não encontrada';
    trocarImagemResposta('search');
}

// Função para copiar o conteúdo da caixa de texto
function copiarTexto() {
    const texto = mensagem.value;

    navigator.clipboard.writeText(texto)
        .then(() => {
            mensagem.value = 'Mensagem copiada!';
            trocarImagemResposta('copy');
            textoRecebido.value = '';
        })
        .catch((error) => {
            console.error('Erro ao copiar texto:', error);
            alert('Erro ao copiar texto. Por favor, tente novamente.');
        });
}

// Função para trocar a imagem de resposta
function trocarImagemResposta(nomeImagem) {
    const imagem = listaImagensResposta.find(img => img.name === nomeImagem);
    if (imagem) {
        const divImagemResposta = document.getElementById('imagem-resposta');
        divImagemResposta.style.backgroundImage = `url(${imagem.src})`;
    } else {
        console.error('Imagem não encontrada:', nomeImagem);
    }
}

