let textoRecebido = document.getElementById('campo-texto');
let mensagem = document.getElementById('campo-mensagem');

// Mapa de decodificação
const encryptMap = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };
  
  const descryptMap = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  };

  //endereço da troca de imagem
const listaImagensResposta = [
    { id: 1, name: "opened", src: "./assets/images/opened.jpg" },
    { id: 2, name: "locked", src: "./assets/images/locked.jpg" },
    { id: 3, name: "copy", src: "./assets/images/copy.png" },
    { id: 4, name: "search", src: "./assets/images/search.jpg" }
];

// Função para criptografar o texto
function criptografar(txt) {
    for(const key in encryptMap) {
        txt = txt.replace(encryptMap[key], key);
      }
     return txt;
    }
function btnEncriptar(){
    const textoCriptografado = criptografar(textoRecebido.value);
    mensagem.value = textoCriptografado;
    trocarImagemResposta('locked');
    textoRecebido.value = '';
}

// Função para decodificar
function decodificar(txt) {
    for(const key in descryptMap){
        txt = txt.replace(descryptMap[key], key);
    }
    return txt;
}
function btnDecodificar(){
    const textoDecodificado = decodificar(textoRecebido.value);
    mensagem.value = textoDecodificado;
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