//array 'perguntas' com 'pergunta' e 'resposta' como objetos
const perguntas = [
    { //o símbolo {} vai ser usado para separar as perguntas
      pergunta: 'O que é JavaScript?',
      respostas: 
      //array de opções de respostas
      ['Uma linguagem de programação para estilização de páginas web.',
        'Uma linguagem de programação para criação de páginas web interativas.',
        'Uma ferramenta de design gráfico para websites.'
      ],
      //a contagem começa do 0 na primeira linha
      correta: 1
    },
    {
      pergunta: 'Qual é a função do operador "===" em JavaScript?',
      respostas: [
        'Comparação estrita de valores e tipos.',
        'Comparação de valores apenas, independentemente dos tipos.',
        'Concatenação de strings.'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é uma função em JavaScript?',
      respostas: [
        'Um tipo de dado que representa uma lista ordenada de valores.',
        'Um conjunto de instruções que executa uma tarefa específica e pode ser reutilizado.',
        'Uma variável global.'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
      respostas: [
        'var myVar = 10;',
        'variavel myVar = 10;',
        'let myVar = 10;'
      ],
      correta: 2
    },
    {
      pergunta: 'Como você faz um comentário de linha em JavaScript?',
      respostas: [
        '// Este é um comentário de linha',
        '/* Este é um comentário de linha */',
        '# Este é um comentário de linha'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?',
      respostas: [
        'push()',
        'add()',
        'append()'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é uma "closure" em JavaScript?',
      respostas: [
        'Uma função que não tem acesso ao seu escopo léxico.',
        'Um tipo de variável global.',
        'Uma função que tem acesso ao seu escopo léxico, mesmo após sair desse escopo.'
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a diferença entre "null" e "undefined" em JavaScript?',
      respostas: [
        'São iguais em JavaScript, não há diferença.',
        '"null" indica a ausência de valor atribuído, enquanto "undefined" indica uma variável que foi declarada, mas não recebeu valor.',
        '"undefined" indica a ausência de valor atribuído, enquanto "null" indica uma variável que foi declarada, mas não recebeu valor.'
      ],
      correta: 1
    },
    {
      pergunta: 'Como você seleciona um elemento de HTML usando seu ID em JavaScript?',
      respostas: [
        'getElementByID()',
        'queryID()',
        'document.getElementById()'
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do método "addEventListener" em JavaScript?',
      respostas: [
        'Adiciona estilos CSS a um elemento HTML.',
        'Adiciona um evento a um elemento HTML para que uma função seja executada quando o evento ocorre.',
        'Adiciona um elemento HTML ao documento.'
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz') //seleciona o elemento 'quiz' na parte do html e torna uma constante; relacionado à tag <div>, que é usada para criar uma divisão ou contêiner genérico
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //clona a constante template para cada item das perguntas
    quizItem.querySelector('h3').textContent = item.pergunta //clona o título para item das perguntas
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) // fazendo com que possamos escolher uma resposta por pergunta; index0f pesquisa o índice
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
       
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      } 
      
      quizItem.querySelector('dl').appendChild(dt) 
    }
  
    quizItem.querySelector('dl dt').remove() //remove a opção "Resposta A"
  
    //coloca a pergunta na tela!
    quiz.appendChild(quizItem)
  }