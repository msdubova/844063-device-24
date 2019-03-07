var openForm = document.querySelector(".feedback");
var popup = document.querySelector(".write-us");
var closeForm  = popup.querySelector(".close");
var openMap = document.querySelector(".mapping");
var map = document.querySelector(".map");
var closeMap = map.querySelector(".close");
var form  = popup.querySelector("form");
var storage = "";
var isStorageSupport = true;
var first  = popup.querySelector("[name=name-surname]");
var second = popup.querySelector("[name=e-mail]");
var third = popup.querySelector("textarea");

try {
  storage=localStorage.getItem("name");
}
catch (err) {
  isStorageSupport = false;
}

openForm.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  if(storage){
    localStorage.getItem("first");
    second.focus();
  }
  else {
    first.focus();
  }
});

closeForm.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

openMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
  if (!first.value || !second.value || !third.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if(isStorageSupport){
      localStorage.setItem("first", first.value);
      localStorage.setItem("second", second.value);
      localStorage.setItem("third", third.value);
    }
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    else {
      if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");
    }
  }
}
});
