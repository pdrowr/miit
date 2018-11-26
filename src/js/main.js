function parallax() {
  var img1 = document.getElementById('img-parallax');
  var img2 = document.getElementById('img-parallax-about-1');
  var img3 = document.getElementById('img-parallax-about-2');

  img1.style.top = -(window.pageYOffset / 1000 - 300)  + 'px';
  img2.style.top = +(window.pageYOffset / 10)  + 'px';
  img3.style.top = -(window.pageYOffset / 5 - 200)  + 'px';
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
