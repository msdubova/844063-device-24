

// var openform = document.querySelector(".feedback");
// var popup = document.querySelector(".write-us");
// var closeform = form.querySelector(".close");
// var name = popup.querySelector("[name=name-surname]");
// var mail = popup.querySelector("[name=e-mail]");
// var text = popup.querySelector("textarea");
// var form = popup.querySelector("form");
// var isStorageSupport = true;
// var storage = "";
// var openmap = document.querySelector(".mapping");
// var map = document.querySelector(".map");
// var closemap = map.querySelector(".close");

// try {
// storage = localStorage.getItem("name");
// } catch (err){
// isStorageSupport = false;
// }


// form.addEventListener ("submit", function(evt){
// if(!name.value || !mail.value || !text.value){
// evt.preventDefault();
// console.log("Введите имя почту и сообщение");
// }
// else {
// if(isStorageSupport){
// localStorage.setItem("name",name.value);
// localStorage.setItem("mail",mail.value);
// localStorage.setItem("text",text.value);
// }
// }

// });


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
  console.log("введите данные")
} else {
  if(isStorageSupport){
    localStorage.setItem("first", first.value);
    localStorage.setItem("second", second.value);
    localStorage.setItem("third", third.value);};}

});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show")
    }
    else { if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show")
    }
  }
  }
});
