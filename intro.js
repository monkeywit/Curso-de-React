const containerElement = document.getElementById("container");

//CREANDO Y RENDERIZANDO UN ELEMENTO CON JAVASCRIPT PURO
// const headerElement = document.createElement("h1");
// headerElement.textContent = "Curso de React: 02 - javascript puro";
// containerElement.appendChild(headerElement);

//CREANDO Y RENDERIZANDO UN ELEMENTO CON REACT
const headerElement = React.createElement("h1", {
    children: "Curso de React: 02 - React"
});
ReactDOM.render(headerElement, containerElement);