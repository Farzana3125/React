const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"title"},"helloi world"),React.createElement("h1",{id:"title2"},"helloi world2")]))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)