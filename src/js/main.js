function parallax() {
  var img = document.getElementById('img-parallax');
  img.style.top = -(window.pageYOffset / 5 - 200)  + 'px';
}

window.addEventListener('scroll', parallax, false)

// SMOOTH SCROLL
$(".nav-link").click(function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 0
    }, 1000, function () {
      window.location.hash = hash;
    });
  }
});
