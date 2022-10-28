import get from './getElement.js'
import { people } from './data.js'

const article = get('.slide-container');
const prevBtn = get('.prev-btn');
const nextBtn = get('.next-btn');

article.innerHTML = people.map((person, personIndex) => {
  const { img, name, job, text } = person;
  let position = "next";

  if (personIndex === 0) {
    position = "active";
  }

  if (personIndex === people.length - 1) {
    position = "last";
  }

  return ` <article class="slide ${position}">
        <img
        src="${img}"
         alt="${name}"
         class="slide-img"/>
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="desc">
          ${text}
        </p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article> `
})
  .join('');


const startView = (type) => {
  const active = get('.active');
  const last = get('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = article.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last'])
  next.classList.remove(['next']);
  if (type === "prev") {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = article.lastElementChild;
    }
    next.classList.remove(['next']);
    next.classList.add('last');
    return
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active')
}

prevBtn.addEventListener('click', () => {
  startView("prev")
});

nextBtn.addEventListener('click', () => {
  startView();
})