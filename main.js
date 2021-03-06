const cardImg = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__body-title');
const cardSub = document.querySelector('.card__body-sub');
const cardDescription = document.querySelector('.card__body-description');

const leftArrowBtn = document.querySelector('.btn-left');
const rightArrowBtn = document.querySelector('.btn-right');

let counter = 0;

let reviews = [
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
    counter = reviews.length - 1;
    changeReview(counter);
  } else {
    changeReview(counter);
  }

});

rightArrowBtn.addEventListener('click', () => {
  counter++;

  if (counter > 3) {
    counter = 0;
    changeReview(counter)
  } else {
    changeReview(counter)
  }
  
});

window.addEventListener('load', () => {
  changeReview(counter);
});

function changeReview(counter) {
  cardImg.src = reviews[counter].src;
  cardTitle.textContent = reviews[counter].name;
  cardSub.textContent = reviews[counter].occupation;
  cardDescription.textContent = reviews[counter].description;
}