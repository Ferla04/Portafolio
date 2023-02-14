export const routes = [
  { name: 'Inicio', id: 'home', icon: 'fa-house-chimney' },
  { name: 'Sobre Mi', id: 'aboutMe', icon: 'fa-face-grin-stars' },
  { name: 'Proyectos', id: 'projects', icon: 'fa-folder' },
  { name: 'Contacto', id: 'contact', icon: 'fa-envelope' }
]

const urlIcons = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/'

export const skills = [
  { name: 'HTML', icon: `${urlIcons}html5/html5-original.svg` },
  { name: 'CSS', icon: `${urlIcons}css3/css3-original.svg` },
  { name: 'Javascript', icon: `${urlIcons}javascript/javascript-plain.svg` },
  { name: 'Typescript', icon: `${urlIcons}typescript/typescript-original.svg` },
  { name: 'Bootstrap', icon: `${urlIcons}bootstrap/bootstrap-original.svg` },
  { name: 'SASS', icon: `${urlIcons}sass/sass-original.svg` },
  { name: 'React', icon: `${urlIcons}react/react-original.svg` },
  { name: 'Redux-toolkit', icon: `${urlIcons}redux/redux-original.svg` },
  { name: 'NodeJS', icon: `${urlIcons}nodejs/nodejs-original.svg` },
  { name: 'ExpressJS', icon: `${urlIcons}express/express-original.svg` },
  { name: 'SQL', icon: '/assets/sql.png' },
  { name: 'MYSQL', icon: `${urlIcons}mysql/mysql-original.svg` },
  { name: 'PHP', icon: `${urlIcons}php/php-original.svg` },
  { name: 'GIT', icon: `${urlIcons}git/git-original.svg` }
]

export const projects = [
  { name: 'Calendar App', img: 'calendar.png', repo: 'https://github.com/Ferla04/Calendar-app', link: 'https://calendar-app-black.vercel.app', info: 'React - Redux-toolkit - NodeJS - ExpressJS - MongoDB - Bootstrap' },
  { name: 'Journal App', img: 'journal.png', repo: 'https://github.com/Ferla04/Journal-app', link: 'https://journal-app-topaz-eight.vercel.app', info: 'React - Redux-toolkit - Material UI - Firebase' },
  { name: 'Neweather', img: 'neweather.png', repo: 'https://github.com/juanerq/neweather', link: 'https://app-neweather.netlify.app', info: 'React - HTML -CSS' },
  { name: 'Snake', img: 'snake.png', repo: 'https://github.com/Ferla04/SnakeProyect', link: 'https://ferla04.github.io/SnakeProyect/', info: 'Javascript - HTML - CSS' },
  { name: 'Bookstore', img: 'bookstore.png', repo: 'https://github.com/Ferla04/PHP/tree/main/bookstore', link: 'https://bookstore-ferla04.000webhostapp.com/bookstore/', info: 'PHP - Bootstrap' }
]
