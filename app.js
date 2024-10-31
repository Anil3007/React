
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"children"},React.createElement("h1",{},"hi")))

const heading = React.createElement("h1",{id:"heading"},"Hello world from React");
       
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);