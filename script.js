const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tá assistindo um jogo e percebe que agora tem câmera em todo canto do estádio, até no vestiário! O que você pensa?",
        alternativas: [
            {
                texto: "Ah não… isso tira toda a graça, o futebol tem que ter mistério.",
                afirmacao: "Você valoriza a tradição e prefere o futebol como ele sempre foi."
            },
            {
                texto: "Nossa, muito bom! Assim ninguém mais erra e fica mais justo.",
                afirmacao: "Você acredita que a tecnologia pode ajudar a melhorar o jogo."
            }
        ]
    },
    {
        enunciado: "Um amigo seu comenta que no futuro pode ter robô apitando os jogos. O que você responde pra ele?",
        alternativas: [
            {
                texto: "Robô apitando? Não tem chance, juiz tem que ser gente!",
                afirmacao: "Você acha que algumas funções no futebol sempre vão precisar de um toque humano."
            },
            {
                texto: "Por mim tudo bem, robô não erra impedimento.",
                afirmacao: "Você tá aberto às novas ideias e não liga pra quem faz, desde que funcione bem."
            }
        ]
    },
    {
        enunciado: "Imagina que daqui uns anos os jogadores usem sensores no corpo pra medir tudo: chute, corrida, cansaço… O que você acha?",
        alternativas: [
            {
                texto: "Legal! Assim o time pode treinar melhor e evitar contusão.",
                afirmacao: "Você enxerga a tecnologia como uma aliada dos jogadores."
            },
            {
                texto: "Ah, pra quê isso? Deixa os caras jogarem sossegado.",
                afirmacao: "Você acha que o futebol deve ser mais natural e menos controlado."
            }
        ]
    },
    {
        enunciado: "Te pedem pra desenhar ou imaginar como vai ser um estádio no futuro. O que vem na sua cabeça?",
        alternativas: [
            {
                texto: "Um estádio lotado, com torcida cantando e todo mundo feliz, igual hoje.",
                afirmacao: "Você espera que a essência da paixão pelo futebol nunca mude."
            },
            {
                texto: "Um estádio todo tecnológico, com telão gigante, drones filmando e gramado inteligente.",
                afirmacao: "Você se anima com a ideia de ver um futebol mais moderno e cheio de inovações."
            }
        ]
    },
    {
        enunciado: "Seu colega faz um trabalho sobre futebol no futuro, mas ele só copiou um texto da internet. O que você diz pra ele?",
        alternativas: [
            {
                texto: "Deixa pra lá, pelo menos já tá feito.",
                afirmacao: "Você prefere praticidade mesmo que perca um pouco da originalidade."
            },
            {
                texto: "Cara, vamos dar nossa cara pro trabalho, escrever do nosso jeito!",
                afirmacao: "Você valoriza as ideias próprias e acredita que vale a pena fazer diferente."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
