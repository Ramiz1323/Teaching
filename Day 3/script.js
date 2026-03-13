// setTimeout and setInterval
let innerBar = document.querySelector(".innerBar");
let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");

let grow = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  let intervalId = setInterval( () => {
    grow++;
    h1.innerHTML = grow + "%";
    innerBar.style.width = grow + "%";
  }, 30);

  setTimeout( () => {
    clearInterval(intervalId);
    btn.innerHTML = "Downloaded!!!";
    btn.style.opacity = "0.5";
  }, 3000);
});
