/*----- constants -----*/
const QUESTIONS_TEMPLATE = {
    'cat 0': [
      {
        text: 'Question cat0-0?',
        options: ['Answer 0-0a', 'Answer 0-0b'],
        correctIdx: 0,
        playerAnswer: null
      },
      {
        text: 'Question cat0-1?',
        options: ['Answer 0-1a', 'Answer 0-1b'],
        correctIdx: 1,
        playerAnswer: null
      }
    ],
    'cat 1': [
      {
        text: 'Question cat1-0?',
        options: ['Answer 1-0a', 'Answer 1-0b'],
        correctIdx: 0,
        playerAnswer: null
      },
      {
        text: 'Question cat1-1?',
        options: ['Answer 1-1a', 'Answer 1-1b'],
        correctIdx: 1,
        playerAnswer: null
      }
    ],
  };
  
  /*----- app's state (variables) -----*/
  let category;
  let results;
  let score;  
  
  /*----- cached element references -----*/
  const categoriesEl = document.getElementById('categories');
  const questionsEl = document.getElementById('questions');
  const msgEl = document.getElementById('message');
  const scoreBtn = document.getElementById('score-btn');
  
  /*----- event listeners -----*/
  categoriesEl.addEventListener('click', handleCategoryChoice);
  questionsEl.addEventListener('click', handleAnswer);
  scoreBtn.addEventListener('click', handleScore);
  
  /*----- functions -----*/
  init();
  
  function init() {
    category = 'cat 0';
    results = JSON.parse(JSON.stringify(QUESTIONS_TEMPLATE));
    score = null;
    render();
  }
  
  function render() {
    renderCategories();
    renderQuestions();
    renderScore();
    renderControls();
  }
  
  function renderScore() {
    if (score) {
      msgEl.innerHTML = `<span>${score.correct}</span> Out Of <span>${score.total}</span> Correct`;
    } else {
      msgEl.innerText = 'Good Luck!';
    }
  }
  
  function renderQuestions() {
    let html = '';
    results[category].forEach((question, qIdx) => {
      let answersHTML = question.options.map((option, oIdx) => `
        <div id="q${qIdx}o${oIdx}" ${oIdx === question.playerAnswer ? 'class="player-answer"' : ''}>${option}</div>
      `).join('');
      html += `
        <article>
          <h3>${question.text}</h3>
          <div class="answers">${answersHTML}</div>
        </article>
      `;
    });
    questionsEl.innerHTML = html;
  }
  
  function renderControls() {
    scoreBtn.disabled = !!getNumUnanswered();  
  }
  
  function renderCategories() {
    let html = '';
    Object.keys(results).forEach((cat) => {
      html += `<button ${cat === category ? 'class="active-cat"' : ''}>${cat}</button>`;
    });
    categoriesEl.innerHTML = html;
  }
  
  function handleCategoryChoice(evt) {
    if (evt.target.tagName === 'BUTTON') category = evt.target.innerText;
    render();
  }
  
  function handleAnswer(evt) {
    const questionIdx = parseInt(evt.target.id.charAt(1));
    const optionIdx = parseInt(evt.target.id.charAt(3));
    if (isNaN(questionIdx) || isNaN(optionIdx) ) return;
    results[category][questionIdx].playerAnswer = optionIdx;
    render();
  }
  
  function handleScore(evt) {
    let total = 0;
    let correct = 0;
    Object.keys(results).forEach((cat) => {
      total += results[cat].length;
      correct += results[cat].reduce((total, quest) => quest.playerAnswer === quest.correctIdx ? total + 1 : total, 0);
    });
    score = {total, correct};
    render();
  }
  
  function getNumUnanswered() {
    let count = 0;
    Object.keys(results).forEach((cat) => {
      count += results[cat].reduce((total, quest) => quest.playerAnswer === null ? total + 1 : total, 0);
    });
    return count;
  }
  