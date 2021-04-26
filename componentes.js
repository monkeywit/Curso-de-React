const VideoTitle = () => {
  return <h3>Video 04: Componentes</h3>;
};

const CourseTitle = () => {
  return (
    <>
      <h1>Curso de React</h1>
      <VideoTitle />
    </>
  );
};

ReactDOM.render(<CourseTitle />, document.getElementById("container"));
