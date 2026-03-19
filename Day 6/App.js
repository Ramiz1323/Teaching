import box from "./box.js";
import circle from "./circle.js";

const App = () => {
    return React.createElement("div", {id: "App"}, [box(), circle()]);
}

export default App;