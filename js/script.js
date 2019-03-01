var link  = document.querySelector(".feedback");
var map = document.querySelector(".mapping");
var popup = document.querySelector(".write-us");
var mapbig = document.querySelector(".map");
var close = popup.querySelector(".close");
var closemap = mapbig.querySelector(".close");
var login = popup.querySelector("[name=name-surname]");
link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
map.addEventListener("click", function(evt){
  evt.preventDefault();
  mapbig.classList.add("modal-show");
});
closemap.addEventListener("click", function(evt){
  evt.preventDefault();
  mapbig.classList.remove("modal-show");
});
