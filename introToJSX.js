const videoNumber = () => {
  return <span className="numberColor">03</span>;
};

const headerElement = (
  <div>
    <h1 id="03" style={{ color: "blue" }}>
      Curso de React {videoNumber()}{" "}
    </h1>
  </div>
);

ReactDOM.render(headerElement, document.getElementById("container"));
