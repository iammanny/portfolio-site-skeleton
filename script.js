import { data } from './data.js';

const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-project');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelectorAll('.modal img');
const tecnologiesArr = document.querySelectorAll('.modal-tech li');
const buttons = document.querySelectorAll('btn-group a');

/* eslint-disable */
const displayNav = () => {
  /* eslint-enable */
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'none';
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'block';
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
/* eslint-disable */
const closeNav = () => {
  /* eslint-enable */
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'flex';
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'none';
  body.style.height = 'auto';
  body.style.overflowY = 'scroll';
};

seeProject.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('blur');
    const Description = btn.parentElement.childNodes[1].textContent;
    data.map((project) => {
      if (project.description === Description) {

      }
    });
    document.querySelector('.modal-wrapper').style.display = 'flex';
  });
});

goBack.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('blur');
  document.querySelector('.modal-wrapper').style.display = 'none';
});
