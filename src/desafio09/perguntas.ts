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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
      dificuldade: "médio",
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
    }
  ];
  