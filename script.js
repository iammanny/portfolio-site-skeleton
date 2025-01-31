const data = [
  {
    name: 'Events price calculator',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Reaching for the stars',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: './images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Technology meetup website',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Daily Task Saver',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
];

const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-project');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelector('.project-image-desktop');
const tecnologiesArr = document.querySelector('.modal-tech');
const source = document.querySelector('.seeSource');
const live = document.querySelector('.seeLive');

function createChildItem(item) {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
}

function deleteChildListItems(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

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
    deleteChildListItems(tecnologiesArr);
    const Title = btn.parentElement.childNodes[1].textContent;
    const project = data.find((i) => i.name === Title);
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    projectImage.src = project.imageUrl;
    /* eslint-disable */
    project.tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
    });
    live.href = project.ProjectUrls.seeLive;
    source.href = project.ProjectUrls.seeSource;

    document.querySelector('.modal-wrapper').style.display = 'flex';
  });
});

goBack.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('blur');
  document.querySelector('.modal-wrapper').style.display = 'none';
});

const email = document.getElementById("Email");
const form = document.querySelector(".contact-us");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  const reg1 = /[a-z]/g;
  const reg2 = /[A-Z]/g;
  if (reg1.test(email.value.trim())&& !reg2.test(email.value.trim()) == false) {
    e.preventDefault();
    errorMsg.textContent = "Your email should be in lowercase";
    errorMsg.style.display = "inline-flex";
    email.value = email.value.toLowerCase();
  }
});



