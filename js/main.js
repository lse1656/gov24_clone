//lang-toggle
const langBtn = document.querySelector('.lang-btn');
const langToggle = document.querySelector('.lang-toggle');

function langToggleHandler(e) {
  e.preventDefault();
  langToggle.classList.toggle('active');
}

langBtn.addEventListener('click', langToggleHandler);

//recom-carousel toggle
const recomControl = document.querySelector('.recom-carousel-control');
const recomBtn = document.querySelector('.recom-carousel-control .open-btn');
const recomCont = document.querySelector('.recom-carousel-cont');

function recomHandler(e) {
  e.preventDefault();
  recomCont.classList.toggle('active');
  recomBtn.classList.toggle('active');
}

recomControl.addEventListener('click', recomHandler);

// match-service-tab
const matchItem = document.querySelectorAll('.match-service-tap .menu-item');

function matchServiceHandler(e) {
  e.preventDefault();

  for (j = 0; j < matchItem.length; j++) {
    matchItem[j].classList.remove('active');
  }
  e.target.parentNode.classList.add('active');
}

for (i = 0; i < matchItem.length; i++) {
  matchItem[i].addEventListener('click', matchServiceHandler);
}

// policy-infor-tab
const policyItem = document.querySelectorAll('.policy-infor-tab li');

function policyInforHandler(e) {
  e.preventDefault();

  for (j = 0; j < policyItem.length; j++) {
    policyItem[j].classList.remove('active');
  }
  e.target.parentNode.classList.add('active');
}

for (i = 0; i < policyItem.length; i++) {
  policyItem[i].addEventListener('click', policyInforHandler);
}
