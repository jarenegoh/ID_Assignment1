window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
    console.log("You have reached the end of the page!")
}

document.addEventListener("DOMContentLoaded", function() {
    var container1 = document.querySelector("#about-us");

    function showContainer() {
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > 70) {
            container1.classList.add("show");
        }
    }

    window.addEventListener("scroll", showContainer);
});

var slider_img = document.querySelector('.slider-img');
var images = ['images/Dusty_Bunny.png', 'images/Kaya_Bunny.jpeg', 'images/Bella_Bunny.jpg', 'images/Hazel_Bunny.jpg', 'images/Simba_Bunny.jpeg', 'images/Minty_Bunny.png'];
var i = 0;

function prev(){
  if(i <= 0) i = images.length;  
  i--;
  return setImg();       
}

function next(){
  if(i >= images.length-1) i = -1;
  i++;
  return setImg();       
}

function setImg(){
  return slider_img.setAttribute('src', images[i]);
  
}

