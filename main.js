//Menu animation
(function() {
var menu = document.querySelector('ul'),
menulink = document.querySelector('img');
menuclose = document.querySelector('ul i');
var h1 = document.querySelector('h1');
var lien = document.getElementsByClassName('icons');


menulink.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    h1.style.visibility="hidden";
    e.preventDefault();
  });

menuclose.addEventListener('click', function(a) {
    menu.classList.toggle('noactive');
    menu.style.visibility="hidden";
    h1.style.visibility="visible";
    a.preventDefault();
  });


});

//Title animation

setInterval(function(){
    var one = document.getElementById('one');
    one.innerHTML="web designer"; }, 1250);
                 
setInterval(function(){
    one.innerHTML="web developper"; }, 2500);

//Box modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Box modal 2
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function(){
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}
//Progress bar
function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
//Progress bar2
function move2() {
  var elem2 = document.getElementById("myBar2"); 
  var width2 = 1;
  var id2 = setInterval(frame2, 10);
  function frame2() {
    if (width2 >= 85) {
      clearInterval(id2);
    } else {
      width2++; 
      elem2.style.width = width2 + '%'; 
    }
  }
}
//Progress bar
function move3() {
  var elem3 = document.getElementById("myBar3"); 
  var width3 = 1;
  var id3 = setInterval(frame3, 10);
  function frame3() {
    if (width3 >= 65) {
      clearInterval(id3);
    } else {
      width3++; 
      elem3.style.width = width3 + '%'; 
    }
  }
}
//Progress bar
function move4() {
  var elem4 = document.getElementById("myBar4"); 
  var width4 = 1;
  var id4 = setInterval(frame4, 10);
  function frame4() {
    if (width4 >= 50) {
      clearInterval(id4);
    } else {
      width4++; 
      elem4.style.width = width4 + '%'; 
    }
  }
}
