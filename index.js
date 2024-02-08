//array 'perguntas' com 'pergunta' e 'resposta' como objetos
const perguntas = [
  {
    pergunta: 'Qual é a nacionalidade de Rodrigo Amarante?',
    respostas: [
      'Brasileira',
      'Argentina',
      'Mexicana',
    ],
    correta: 0
  },
  {
    pergunta: 'Em qual banda Rodrigo Amarante foi o vocalista e guitarrista?',
    respostas: [
      'Los Hermanos',
      'The Strokes',
      'Radiohead',
    ],
    correta: 0
  },
  {
    pergunta: 'Qual instrumento Rodrigo Amarante toca principalmente?',
    respostas: [
      'Bateria',
      'Violão',
      'Teclado',
    ],
    correta: 1
  },
  {
    pergunta: 'Rodrigo Amarante é conhecido por sua participação na trilha sonora de qual série de TV?',
    respostas: [
      'Breaking Bad',
      'Game of Thrones',
      'Narcos',
    ],
    correta: 2
  },
  {
    pergunta: 'Em que ano Rodrigo Amarante lançou seu álbum solo "Cavalo"?',
    respostas: [
      '2010',
      '2013',
      '2016',
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é o nome da música mais conhecida de Rodrigo Amarante?',
    respostas: [
      'Tuyo',
      'Anna Julia',
      'Last Nite',
    ],
    correta: 0
  },
  {
    pergunta: 'Quantos álbuns de estúdio a banda Los Hermanos lançou com a participação de Rodrigo Amarante?',
    respostas: [
      '2',
      '4',
      '6',
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é o nome da série da HBO que conta com a música "Tuyo" na abertura, composta por Rodrigo Amarante?',
    respostas: [
      'Narcos',
      'Westworld',
      'True Detective',
    ],
    correta: 0
  },
  {
    pergunta: 'Além de músico, em qual outra área artística Rodrigo Amarante atua?',
    respostas: [
      'Cinema',
      'Pintura',
      'Literatura',
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é o nome do primeiro álbum solo de Rodrigo Amarante?',
    respostas: [
      'Cavalo',
      'Mana',
      'Clarão',
    ],
    correta: 0
  },
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