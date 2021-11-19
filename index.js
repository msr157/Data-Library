let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; 
    arrowParent.classList.toggle("showMenu");
  });
}
let navbar = document.querySelector(".navbar");
let navbarBtn = document.querySelector(".bx-menu");
console.log(navbarBtn);
navbarBtn.addEventListener("click", () => {
  navbar.classList.toggle("close");
});

//*ChartJs Code ==>//
var ctx = $('#myChart').getContext("2d") 