
 const navbarnav = document.querySelector('.navbarnav');
 
 document.querySelector('#menu').onclick = () => {
   event.preventDefault();
 navbarnav.classList.toggle('active');
 
 };

 


 const hamburger = document.querySelector('#menu');

 document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
 })




 ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 
 ScrollReveal().reveal('.home', {origin: 'top'});
 ScrollReveal().reveal('.gambar', {origin: 'bottom'});
 ScrollReveal().reveal('.content', {origin: 'right'});
 ScrollReveal().reveal('.gambar2', {origin: 'bottom'});
 ScrollReveal().reveal('.skill h2',  {origin: 'right'});
 ScrollReveal().reveal('.gambar3',  {origin: 'top'});
 ScrollReveal().reveal('.skill-title',  {origin: 'left'});
 ScrollReveal().reveal('.skill-price',  {origin: 'right'});
 ScrollReveal().reveal('.lg-about h2',  {origin: 'top'});
 ScrollReveal().reveal('.contact h2',  {origin: 'top'});
 ScrollReveal().reveal('form',  {origin: 'left'});
 ScrollReveal().reveal('.get-isi .pr', {origin: 'top'});
 ScrollReveal().reveal('.get h2',  {origin: 'top'});
 ScrollReveal().reveal('.pq',  {origin: 'top'});
 
