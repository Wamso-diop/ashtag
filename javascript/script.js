const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    //console.log(panel)
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
const title = document.querySelector(".title");
console.log(title);
title.addEventListener("mouseover", () => {
  title.firstElementChild.classList.add("clicked");
  title.lastElementChild.classList.add("clicked");
});
title.addEventListener("mouseout", () => {
  title.firstElementChild.classList.remove("clicked");
  title.lastElementChild.classList.remove("clicked");
});

//section day2

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  //console.log(document.querySelectorAll(".active-circle"));
  currentActive++;
  if (currentActive + 1 > circle.length) {
    currentActive = circle.length;
  }
  update();
  changeImage();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  changeImage();
});
function update() {
  circle.forEach((circle, index) => {
    //console.log(circle, index);
    if (index < currentActive) circle.classList.add("active-circle");
    else circle.classList.remove("active-circle");
  });

  const actives = document.querySelectorAll(".active-circle");

  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  //console.log(actives.length, circle.length, actives.length / circle.length);
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive == circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
function changeImage() {
  const pictures = document.querySelectorAll(".picture");
  const parent = document.querySelector(".container-picture");
  for (picture of pictures) {
    picture.style.display = "none";
  }

  for (child of [1, 2, 3, 4]) {
    console.log("current:", currentActive, "child:", child);
    if (currentActive === child) {
      parent.children[child].style.display = "block";
      console.log("enfant: ", child, parent.children[child]);

      break;
    }
    //console.log("enfant: ", child, parent.children[child - 1]);
  }
}
function getScreenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

function menu() {
  /*
    let navr_bar = document.querySelector(".nav_bar");
    let list = document.querySelector(".malist");
    let li = document.querySelectorAll(".item");
    let a = document.querySelectorAll(".a_item");
    let MonMain = document.querySelector(".MonMain");
  
    if(list.firstChild.nextSibling.style.display == "grid" || list.firstChild.nextSibling.style.display == "" ){
      //list.classList.add("respList");
     
      //list.firstChild.nextSibling.style.display = "flex"
      //list.firstChild.nextSibling.classList.add("respOl")
      
      if (getScreenWidth()<=475) {

        list.firstChild.nextSibling.style.display = "flex"
      }
      if(getScreenWidth()>=775)  {

      }
    }else if( list.firstChild.nextSibling.style.display =="flex"|| list.firstChild.nextSibling.style.display == "" ){
      //list.classList.remove("respList");
      if (getScreenWidth()<=475) list.firstChild.nextSibling.style.display = "grid"
      //list.firstChild.nextSibling.classList.remove("respOl")
    }
 if (list.style.display == "block" || list.style.display == "") {
    //navr_bar.style.display="none"
    navr_bar.classList.add("active");
    list.classList.add("active");
    for (l of li) l.classList.add("active");
    for (aa of a) aa.classList.add("active");
    MonMain.classList.add("active");
    list.style.display = "flex";
    list.firstElementChild.style.display = "block"
   // document.querySelector(".fin").style.clear = "both";
  } else if (list.style.display == "flex" || list.style.display == "") {
    list.style.display = "block";
    navr_bar.classList.remove("active");
    list.classList.add("active");
    list.firstElementChild.style.display = "grid"
    for (l of li) l.classList.remove("active");
    for (aa of a) aa.classList.remove("active");
    MonMain.classList.remove("active");
    //navr_bar.style.display = "block";
  }*/
}
// Panier global
let panier = [];
let n_cart = document.querySelector(".n_cart");
n_cart.innerHTML = 0;

let cart = document.querySelectorAll(".cart");
for (i of cart){
  i.addEventListener("click", () => {
    let v = parseInt(n_cart.textContent)+1
    console.log("bonjour"+v)
    n_cart.textContent=v
  });
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line", // Type de graphe : 'line', 'bar', 'pie', etc.
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Noms des axes X
    datasets: [
      {
        label: "Ventes",
        data: [12, 19, 3, 5, 2], // Données des axes Y
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
function openSidebar(){
  sidebare = document.getElementById("sidebar");
  sidebare.style.display = "block"
}
function closeSidebar(){
  sidebare = document.getElementById("sidebar");
  sidebare.style.display = "none"
}
function fermer(){
  console("tu change")
  //if(getScreenWidth<=775) alert(getScreenWidth)
}
window.addEventListener('resize', fermer);
video = document.querySelector(".video")
window.addEventListener("resize", ()=>{
  video.style.display = "none"
});