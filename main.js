const cardImg = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__body-title');
const cardSub = document.querySelector('.card__body-sub');
const cardDescription = document.querySelector('.card__body-description');

const leftArrowBtn = document.querySelector('.btn-left');
const rightArrowBtn = document.querySelector('.btn-right');

let counter = 0;

let persons = [
  {name: 'Sarah Patrick',
  occupation: 'WEB DEVELOPER',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Quas quia corporis dolorum fugiat iste repellat nostrum repudiandae, 
  totam modi maiores animi cumque natus expedita optio fuga nisi, 
  debitis voluptatem itaque.`,
  src: 'images/person-1.jpg'
  },

  {name: 'Matthew Lopez',
   occupation: 'WEB DESIGNER',
   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Quas quia corporis dolorum fugiat iste repellat nostrum repudiandae, 
   totam modi maiores animi cumque natus expedita optio fuga nisi, 
   debitis voluptatem itaque.`,
   src: 'images/person-2.jpg'
  },

  {name: 'Michael Smith',
   occupation: 'INTERN',
   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Quas quia corporis dolorum fugiat iste repellat nostrum repudiandae, 
   totam modi maiores animi cumque natus expedita optio fuga nisi, 
   debitis voluptatem itaque.`,
   src: 'images/person-3.jpg'
  },

  {name: 'Destiny Williams',
   occupation: 'THE BOSS',
   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Quas quia corporis dolorum fugiat iste repellat nostrum repudiandae, 
   totam modi maiores animi cumque natus expedita optio fuga nisi, 
   debitis voluptatem itaque.`,
   src: 'images/person-4.jpg'
  },
];

leftArrowBtn.addEventListener('click', () => {
  counter--;

  if (counter < 0) {
    counter = persons.length - 1;
    changePerson(counter);
  } else {
    changePerson(counter);
  }

});

rightArrowBtn.addEventListener('click', () => {
  counter++;

  if (counter > 3) {
    counter = 0;
    changePerson(counter)
  } else {
    changePerson(counter)
  }
  
});

window.addEventListener('load', () => {
  changePerson(counter);
});

function changePerson(counter) {
  cardImg.src = persons[counter].src;
  cardTitle.textContent = persons[counter].name;
  cardSub.textContent = persons[counter].occupation;
  cardDescription.textContent = persons[counter].description;
}