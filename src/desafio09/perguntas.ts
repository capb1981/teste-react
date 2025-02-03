export interface Pergunta {
    id: number;
    dificuldade: string;
    categoria: string;
    pergunta: string;
    opcoes: string[];
    correta: string;
  }
  
  export const perguntas: Pergunta[] = [
    {
      id: 1,
      dificuldade: "fácil",
      categoria: "react+typescript",
      pergunta: "O que é React?",
      opcoes: [
        "Um banco de dados",
        "Uma linguagem de programação",
        "Uma biblioteca JavaScript",
        "Um framework CSS"
      ],
      correta: "Uma biblioteca JavaScript"
    },
    {
      id: 2,
      dificuldade: "fácil",
      categoria: "react+typescript",
      pergunta: "O que é TypeScript?",
      opcoes: [
        "Um framework frontend",
        "Um superset do JavaScript",
        "Um banco de dados SQL",
        "Uma biblioteca para CSS"
      ],
      correta: "Um superset do JavaScript"
    },
    {
      id: 3,
      dificuldade: "fácil",
      categoria: "react+typescript",
      pergunta: "O que é Tailwind CSS?",
      opcoes: [
        "Uma biblioteca para manipular estados no React",
        "Um framework CSS utilitário",
        "Um compilador de JavaScript",
        "Uma ferramenta para bancos de dados"
      ],
      correta: "Um framework CSS utilitário"
    },
    {
      id: 4,
      dificuldade: "média",
      categoria: "react+typescript",
      pergunta: "Qual hook do React é usado para gerenciar efeitos colaterais em um componente funcional?",
      opcoes: [
        "useState",
        "useEffect",
        "useReducer",
        "useContext"
      ],
      correta: "useEffect"
    },
    {
      id: 5,
      dificuldade: "média",
      categoria: "react+typescript",
      pergunta: "O que acontece se um estado for atualizado com o mesmo valor no React?",
      opcoes: [
        "O componente será renderizado novamente",
        "O React ignora a atualização e não re-renderiza o componente",
        "Um erro será lançado",
        "A aplicação será encerrada"
      ],
      correta: "O React ignora a atualização e não re-renderiza o componente"
    },
    {
      id: 6,
      dificuldade: "média",
      categoria: "react+typescript",
      pergunta: "Qual destas opções melhor descreve a funcionalidade do TypeScript?",
      opcoes: [
        "Executa código mais rápido que JavaScript",
        "Oferece tipagem estática e suporte a interfaces",
        "É um substituto completo do JavaScript",
        "Elimina a necessidade de transpilar código"
      ],
      correta: "Oferece tipagem estática e suporte a interfaces"
    },    
    {
      id: 7,
      dificuldade: "difícil",
      categoria: "react+typescript",
      pergunta: "Qual a diferença entre uma função componente e uma classe componente no React?",
      opcoes: [
        "Funções componentes não podem conter estado interno, ao contrário das classes componentes",
        "Funções componentes não podem aceitar props como argumentos, ao contrário das classes componentes",
        "Funções componentes são menos eficientes em termos de performance comparadas às classes componentes",
        "Funções componentes e classes componentes são equivalentes em funcionalidade no React"
      ],
      correta: "Funções componentes não podem conter estado interno, ao contrário das classes componentes"
    },
    {
      id: 8,
      dificuldade: "difícil",
      categoria: "react+typescript",
      pergunta: "Como você pode otimizar o desempenho de um aplicativo React?",
      opcoes: [
        "Utilizando componentes de classe em vez de componentes funcionais",
        "Evitando o uso de hooks do React",
        "Implementando memoização em componentes funcionais",
        "Não usando TypeScript junto com React"
      ],
      correta: "Implementando memoização em componentes funcionais"
    },
    {
      id: 9,
      dificuldade: "difícil",
      categoria: "react+typescript",
      pergunta: "Quais são os benefícios principais do TypeScript em um projeto React?",
      opcoes: [
        "Melhoria na performance geral do aplicativo",
        "Capacidade de detectar mais erros em tempo de compilação",
        "Facilidade na integração com bibliotecas de terceiros",
        "Possibilidade de renderizar componentes de forma mais eficiente"
      ],
      correta: "Capacidade de detectar mais erros em tempo de compilação"
    },
    {
      id: 10,
      dificuldade: "fácil",
      categoria: "html",
      pergunta: "Qual é a função da tag <p> em HTML?",
      opcoes: [
        "Criar um parágrafo",
        "Criar um link",
        "Inserir uma imagem",
        "Definir um título"
      ],
      correta: "Criar um parágrafo"
    },
    {
      id: 11,
      dificuldade: "fácil",
      categoria: "html",
      pergunta: "Qual tag HTML é usada para criar um link?",
      opcoes: [
        "<a>",
        "<link>",
        "<href>",
        "<url>"
      ],
      correta: "<a>"
    },
    {
      id: 12,
      dificuldade: "fácil",
      categoria: "html",
      pergunta: "Qual atributo da tag <img> define a URL da imagem?",
      opcoes: [
        "href",
        "src",
        "alt",
        "link"
      ],
      correta: "src"
    },
    {
      id: 13,
      dificuldade: "média",
      categoria: "html",
      pergunta: "Qual dessas tags HTML é usada para criar uma lista ordenada?",
      opcoes: [
        "<ul>",
        "<ol>",
        "<li>",
        "<list>"
      ],
      correta: "<ol>"
    },
    {
      id: 14,
      dificuldade: "média",
      categoria: "html",
      pergunta: "Qual é o propósito do atributo 'alt' na tag <img>?",
      opcoes: [
        "Definir a largura da imagem",
        "Fornecer um texto alternativo caso a imagem não carregue",
        "Criar um link na imagem",
        "Mudar a posição da imagem na página"
      ],
      correta: "Fornecer um texto alternativo caso a imagem não carregue"
    },
    {
      id: 15,
      dificuldade: "média",
      categoria: "html",
      pergunta: "Qual das opções abaixo NÃO é uma tag semântica em HTML5?",
      opcoes: [
        "<article>",
        "<section>",
        "<div>",
        "<header>"
      ],
      correta: "<div>"
    },
    {
      id: 16,
      dificuldade: "difícil",
      categoria: "html",
      pergunta: "O que acontece quando uma tag <meta charset='UTF-8'> é usada em um documento HTML?",
      opcoes: [
        "Define a codificação de caracteres como UTF-8",
        "Aumenta a performance da página",
        "Torna o site responsivo",
        "Adiciona um estilo CSS ao HTML"
      ],
      correta: "Define a codificação de caracteres como UTF-8"
    },
    {
      id: 17,
      dificuldade: "difícil",
      categoria: "html",
      pergunta: "Qual é a principal diferença entre os elementos <section> e <article>?",
      opcoes: [
        "Nenhuma, ambos são idênticos",
        "O <section> agrupa conteúdos relacionados, enquanto <article> representa um conteúdo independente",
        "O <article> é usado para cabeçalhos e rodapés, enquanto <section> para conteúdo principal",
        "O <section> é sempre dentro de <div>"
      ],
      correta: "O <section> agrupa conteúdos relacionados, enquanto <article> representa um conteúdo independente"
    },
    {
      id: 18,
      dificuldade: "difícil",
      categoria: "html",
      pergunta: "Qual dessas tags HTML é usada para incluir código-fonte formatado?",
      opcoes: [
        "<pre>",
        "<code>",
        "<script>",
        "<text>"
      ],
      correta: "<code>"
    },
    {
      id: 19,
      dificuldade: "fácil",
      categoria: "Java",
      pergunta: "Qual palavra-chave é usada para definir uma classe em Java?",
      opcoes: [
        "class",
        "define",
        "struct",
        "object"
      ],
      correta: "class"
    },
    {
      id: 20,
      dificuldade: "fácil",
      categoria: "Java",
      pergunta: "Qual dos seguintes tipos de dados é usado para armazenar números inteiros em Java?",
      opcoes: [
        "float",
        "char",
        "int",
        "boolean"
      ],
      correta: "int"
    },
    {
      id: 21,
      dificuldade: "fácil",
      categoria: "Java",
      pergunta: "Qual é a função principal de um método 'main' em um programa Java?",
      opcoes: [
        "Criar objetos",
        "Executar o código principal do programa",
        "Declarar variáveis",
        "Encerrar o programa"
      ],
      correta: "Executar o código principal do programa"
    },
    {
      id: 22,
      dificuldade: "média",
      categoria: "Java",
      pergunta: "O que acontece se tentarmos acessar um índice inválido de um array em Java?",
      opcoes: [
        "O programa entra em loop infinito",
        "O Java retorna um valor padrão",
        "Uma exceção é lançada",
        "Nada acontece"
      ],
      correta: "Uma exceção é lançada"
    },
    {
      id: 23,
      dificuldade: "média",
      categoria: "Java",
      pergunta: "Qual interface em Java é usada para armazenar um conjunto de elementos únicos?",
      opcoes: [
        "List",
        "Queue",
        "Set",
        "Map"
      ],
      correta: "Set"
    },
    {
      id: 24,
      dificuldade: "média",
      categoria: "Java",
      pergunta: "Qual das seguintes palavras-chave impede que uma classe seja herdada?",
      opcoes: [
        "static",
        "final",
        "abstract",
        "private"
      ],
      correta: "final"
    },
    {
      id: 25,
      dificuldade: "difícil",
      categoria: "Java",
      pergunta: "Qual estrutura de dados é implementada internamente pela classe HashMap em Java?",
      opcoes: [
        "Lista ligada",
        "Árvore binária",
        "Tabela Hash",
        "Fila"
      ],
      correta: "Tabela Hash"
    },
    {
      id: 26,
      dificuldade: "difícil",
      categoria: "Java",
      pergunta: "O que acontece quando um objeto perde todas as referências em Java?",
      opcoes: [
        "O programa encerra imediatamente",
        "O objeto é coletado pelo Garbage Collector",
        "O objeto é automaticamente reutilizado",
        "O Java lança uma exceção"
      ],
      correta: "O objeto é coletado pelo Garbage Collector"
    },
    {
      id: 27,
      dificuldade: "difícil",
      categoria: "Java",
      pergunta: "Qual é a principal diferença entre StringBuffer e StringBuilder em Java?",
      opcoes: [
        "StringBuffer é mutável e StringBuilder é imutável",
        "StringBuilder é thread-safe e StringBuffer não é",
        "StringBuffer é thread-safe e StringBuilder não é",
        "Não há diferença entre eles"
      ],
      correta: "StringBuffer é thread-safe e StringBuilder não é"
    },    
    {
      id: 28,
      dificuldade: "fácil",
      categoria: "CSS",
      pergunta: "Qual propriedade é usada para mudar a cor do texto?",
      opcoes: ["background-color", "text-style", "color", "font-color"],
      correta: "color"
    },
    {
      id: 29,
      dificuldade: "média",
      categoria: "CSS",
      pergunta: "Qual unidade de medida é relativa ao tamanho da fonte do elemento?",
      opcoes: ["px", "em", "vh", "%"],
      correta: "em"
    },
    {
      id: 30,
      dificuldade: "média",
      categoria: "CSS",
      pergunta: "Qual dessas opções é um seletor CSS válido?",
      opcoes: ["#classe", ".id", ".classe", "&elemento"],
      correta: ".classe"
    },
    {
      id: 31,
      dificuldade: "difícil",
      categoria: "CSS",
      pergunta: "Qual propriedade CSS define a ordem de exibição de elementos sobrepostos?",
      opcoes: ["position", "display", "z-index", "order"],
      correta: "z-index"
    },
    {
      id: 32,
      dificuldade: "fácil",
      categoria: "CSS",
      pergunta: "Qual propriedade define o espaço interno de um elemento?",
      opcoes: ["margin", "padding", "border", "spacing"],
      correta: "padding"
    },
    {
      id: 33,
      dificuldade: "média",
      categoria: "CSS",
      pergunta: "Qual das opções abaixo NÃO é um valor válido para a propriedade 'display'?",
      opcoes: ["block", "inline", "relative", "flex"],
      correta: "relative"
    },
    {
      id: 34,
      dificuldade: "difícil",
      categoria: "CSS",
      pergunta: "O que a propriedade 'object-fit' faz?",
      opcoes: [
        "Define a transparência de um elemento",
        "Controla o tamanho e o ajuste de uma imagem dentro de um contêiner",
        "Adiciona uma sombra a um elemento",
        "Altera o espaçamento entre letras"
      ],
      correta: "Controla o tamanho e o ajuste de uma imagem dentro de um contêiner"
    },
    {
      id: 35,
      dificuldade: "difícil",
      categoria: "CSS",
      pergunta: "Qual das seguintes pseudo-classes aplica estilos a um elemento quando o usuário passa o mouse sobre ele?",
      opcoes: [":focus", ":hover", ":checked", ":before"],
      correta: ":hover"
    },
    {
      id: 36,
      dificuldade: "média",
      categoria: "CSS",
      pergunta: "Qual propriedade CSS permite criar animações sem JavaScript?",
      opcoes: ["animation", "transition", "transform", "keyframes"],
      correta: "animation"
    },
    {
      id: 37,
      dificuldade: "fácil",
      categoria: "expressões numéricas",
      pergunta: "Qual é o resultado de 3 + 5 * 2?",
      opcoes: [
        "16",
        "13",
        "10",
        "11"
      ],
      correta: "13"
    },
    {
      id: 38,
      dificuldade: "fácil",
      categoria: "expressões numéricas",
      pergunta: "O que é o valor de 6 ÷ 3 + 2?",
      opcoes: [
        "4",
        "2",
        "3",
        "6"
      ],
      correta: "4"
    },
    {
      id: 39,
      dificuldade: "média",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de (4 + 2) * (6 - 3)?",
      opcoes: [
        "18",
        "24",
        "12",
        "16"
      ],
      correta: "18"
    },
    {
      id: 40,
      dificuldade: "média",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de 9 - 4 * 3 + 6?",
      opcoes: [
        "11",
        "10",
        "15",
        "7"
      ],
      correta: "7"
    },
    {
      id: 41,
      dificuldade: "difícil",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de 2 * (3 + 5) - 4 ÷ 2?",
      opcoes: [
        "12",
        "14",
        "16",
        "10"
      ],
      correta: "12"
    },
    {
      id: 42,
      dificuldade: "fácil",
      categoria: "expressões numéricas",
      pergunta: "O que é o valor de 5 + 2 * 3?",
      opcoes: [
        "16",
        "11",
        "10",
        "13"
      ],
      correta: "11"
    },
    {
      id: 43,
      dificuldade: "média",
      categoria: "expressões numéricas",
      pergunta: "Qual é o resultado de (8 + 4) ÷ 2 * 3?",
      opcoes: [
        "18",
        "12",
        "15",
        "20"
      ],
      correta: "18"
    },
    {
      id: 44,
      dificuldade: "difícil",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de 7 + 3 * (6 ÷ 2) - 4?",
      opcoes: [
        "17",
        "13",
        "18",
        "19"
      ],
      correta: "17"
    },
    {
      id: 45,
      dificuldade: "fácil",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de 10 ÷ 2 + 4?",
      opcoes: [
        "7",
        "6",
        "5",
        "8"
      ],
      correta: "7"
    },
    {
      id: 46,
      dificuldade: "média",
      categoria: "expressões numéricas",
      pergunta: "Qual é o valor de 3 * (2 + 4) ÷ 3?",
      opcoes: [
        "6",
        "4",
        "8",
        "7"
      ],
      correta: "6"
    },
    {
      "id": 47,
      "dificuldade": "difícil",
      "categoria": "expressões numéricas",
      "pergunta": "Qual é o valor de (8 + 2 × 5) ÷ 10?",
      "opcoes": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correta": "1"
    },
    {
      "id": 48,
      "dificuldade": "difícil",
      "categoria": "expressões numéricas",
      "pergunta": "Qual é o valor de 4 × (3 + 2) ÷ 5?",
      "opcoes": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correta": "4"
    },
    {
      "id": 49,
      "dificuldade": "difícil",
      "categoria": "expressões numéricas",
      "pergunta": "Qual é o valor de 3 × 2 + (6 ÷ 3) - 5?",
      "opcoes": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correta": "3"
    }
  ];
  