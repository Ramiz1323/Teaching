import App from "./App.js";


ReactDOM.createRoot(document.getElementById("root")).render(
    App()
)








/* 
React -> UI
ReactDOM -> React and DOM communication

React.createElement(1,2,3)

let h1 = React.createElement("h1", {id: "h1", class: "heading"}, "This is H1")
let h2 = React.createElement("h2", {id: "h2"}, "This is H2")

let div = React.createElement("div", {class: "container"}, [h1, h2])

//Initialize ReactDOM
let root = ReactDOM.createRoot(document.querySelector(".root"))

root.render(div)

function h1() {
    return React.createElement("h1", {id: "h1", class: "heading"}, "This is H1");
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1())
*/

