
// function myFunction() {
//     let x = document.getElementById("blueColor");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   };


const changeBlue = document.getElementById("blueColor");
changeBlue.addEventListener("click", function() {
    document.body.style.background = "blue";   
});

changeBlue.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

changeBlue.addEventListener("click", function() {
    let text = document.getElementById("p1");
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
});

const changeRed = document.getElementById("redColor");
changeRed.addEventListener("click", function() {
    document.body.style.background = "red";
});

changeRed.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

changeRed.addEventListener("click", function() {
    let text = document.getElementById("p2");
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
});

const changeYellow = document.getElementById("yellowColor");
changeYellow.addEventListener("click", function() {
    document.body.style.background = "yellow";
});

changeYellow.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

const changeOrange = document.getElementById("orangeColor");
changeOrange.addEventListener("click", function() {
    document.body.style.background = "orange";
});

changeOrange.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

const changeGreen = document.getElementById("greenColor");
changeGreen.addEventListener("click", function() {
    document.body.style.background = "green";
});

changeGreen.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

const changePurple = document.getElementById("purpleColor");
changePurple.addEventListener("click", function() {
    document.body.style.background = "purple";
});

changePurple.addEventListener("click", function() {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
});

let dropdownBtn = document.querySelector('.dropdown-menu-btn');
let menuContent = document.querySelector('.links');
dropdownBtn.addEventListener('click',() => {
   if(menuContent.style.display === "") {
      menuContent.style.display = "block";
   } else {
      menuContent.style.display = "";
   }
});

dropdownBtn.addEventListener('mouseover', () => {
    if(menuContent.style.display === "") {
        menuContent.style.display = "block";
     } else {
        menuContent.style.display = "";
     }
  });


