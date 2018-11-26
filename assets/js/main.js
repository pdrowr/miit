function parallax() {
  var img = document.getElementById('img-parallax');
  img.style.top = -(window.pageYOffset / 5 - 200)  + 'px';
}



window.addEventListener('scroll', parallax, false)
