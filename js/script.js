// navbar
function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
}


// slideshow beranda
const images = [
  'images/background.jpg',  // Tambahkan path ke gambar Anda di sini
  'images/tugu.jpg',
  'images/lepubung_desa.jpg'
];

let currentIndex = 0;

function changeBackground() {
  const berandaSection = document.querySelector('.beranda');
  berandaSection.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Ganti gambar setiap 5 detik

window.onload = changeBackground;
