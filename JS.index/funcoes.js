function mudouTamanho() {
    if (window.innerWidth >= 1349) {
        const pe = document.getElementById('pe');
        pe.style.display = 'block'
    } else {
        pe.style.display = 'none'
    }
}

function clickMenu() {
    const pe = document.getElementById('pe');
    if (pe.style.display == 'block') {
        pe.style.display = 'none'
    } else {
        pe.style.display = 'block'
    }
}

window.addEventListener('scroll', function(){
    let cab = document.getElementById('header')
    
    cab.classList.toggle('rolagem', window.scrollY > 0) /* Toggle ex.: Se uma coisa existe, retira, senão, põe. */
});

window.onload = function() {
    const username = localStorage.getItem('usuario'); // Recupera o nome do usuário do armazenamento local
    const login = localStorage.getItem('login');
    if(username === login && username != null && login != null) {
      document.getElementById('user').textContent = 'Olá, ' + username + "!";
      document.getElementById('logout-button').style.display = 'block';
      document.getElementById('usu').style.display = 'none'; // Esconde as opções de login e cadastro
      document.getElementById('toggle-button').style.display = 'block';
  };
};

  function logout() {
    localStorage.removeItem('usuario'); // Remove o nome do usuário do armazenamento local
    document.getElementById('user').textContent = ''; // Limpa o texto de informação do usuário
    document.getElementById('logout-button').style.display = 'none'; // Esconde o botão de logout
    document.getElementById('usu').style.display = 'block'; // Mostra as opções de login e cadastro após o logout
    document.getElementById('toggle-button').style.display = 'none';
    document.getElementById('logout').style.display = 'none';

    window.location.href = "./index.html";
  };

let hamburguer = document.querySelector(".hamburguer");
let menu = document.getElementById("topo");

hamburguer.addEventListener("click", () => menu.classList.toggle("active"));

const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
})

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference =  firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart)

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);

let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);