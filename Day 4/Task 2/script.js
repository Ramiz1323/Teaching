let arr = [
  {
    name: "Disha Patani",
    desc: "Bold Actress",
    img: "https://source.unsplash.com/400x600/?indian,actress,bollywood,model",
  },
  {
    name: "Urvashi Rautela",
    desc: "Glamorous Diva",
    img: "https://source.unsplash.com/400x600/?indian,model,glamour",
  },
  {
    name: "Jacqueline Fernandez",
    desc: "Stylish & Bold Actress",
    img: "https://source.unsplash.com/400x600/?bollywood,actress,fashion",
  },
  {
    name: "Nora Fatehi",
    desc: "Bold Dancer & Actress",
    img: "https://source.unsplash.com/400x600/?indian,dancer,actress",
  },
  {
    name: "Kriti Sanon",
    desc: "Elegant & Glamorous",
    img: "https://source.unsplash.com/400x600/?indian,woman,model",
  },
  {
    name: "Kiara Advani",
    desc: "Charming & Stylish",
    img: "https://source.unsplash.com/400x600/?bollywood,woman,fashion",
  },
  {
    name: "Tara Sutaria",
    desc: "Bold & Trendy Actress",
    img: "https://source.unsplash.com/400x600/?indian,fashion,portrait",
  },
  {
    name: "Pooja Hegde",
    desc: "Glamorous Actress",
    img: "https://source.unsplash.com/400x600/?indian,beauty,model",
  },
  {
    name: "Rashmika Mandanna",
    desc: "Cute & Glamorous",
    img: "https://source.unsplash.com/400x600/?indian,girl,smile",
  },
  {
    name: "Alaya F",
    desc: "Modern & Bold Actress",
    img: "https://source.unsplash.com/400x600/?modern,indian,woman",
  },
];

let main = document.querySelector("main");
// main.innerHTML = arr.map((lol) => {
//   return `        
//         <div class="card">
//          <img src="${lol.img}" alt="">
//             <h2>${lol.name}</h2>
//             <h3>${lol.desc}</h3>
//         </div>
//         `;
// }).join("");

arr.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${item.img}" alt="">
        <h2>${item.name}</h2>
        <h3>${item.desc}</h3>
    `;
    main.appendChild(card);
});