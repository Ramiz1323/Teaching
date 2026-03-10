let box = document.querySelector(".box");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    // console.log(c1,c2,c3);
    let arr = ["Ramiz", "Dibyo", "Srijan", "Sourav", "NIGGA", "Sourav", "Ragiv", "Rajat", "Sneha", "Rajib"];
    let name = Math.floor(Math.random() * arr.length);
    console.log(arr[name]);
});
