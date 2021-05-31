const CustomTitle = ({ children }) => {

  React.useEffect(() => {
    return () => {
      console.log("Desmontando titulo")
    }
  })

  return <h3>{children}</h3>;
};

const LifeCycle = () => {
  const [visible, setVisible] = React.useState(true);

  const handleShowTitle = () => {
    setVisible(!visible);
  };

  React.useEffect(() => {
    console.log("sin dependencias");
  })

  React.useEffect(() => {
    console.log("con dependencia vacia");
  }, [])

  React.useEffect(() => {
    console.log("con dependencia");
  }, [visible])

  return (
    <>
      {visible ? <CustomTitle>Life Cycle - useEffect</CustomTitle> : null}
      <button onClick={handleShowTitle}>Show title</button>
    </>
  );
};

ReactDOM.render(<LifeCycle />, document.getElementById("container"));
