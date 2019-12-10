var images = getElementsByTagName("img");

$(document).ready(function(){
  for (var i = 0; i < images.length; i++) {
    images[i].on("click", brightness(60%));
    })
  }
})

for (var i = 0; i < images.length; i++) {
  images[i].style.size = "2em";
}
