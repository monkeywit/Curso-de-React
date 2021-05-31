const FunctionaComponent = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    console.log("Comp. Func - Rendereizando com dep. vacia");
  }, []);

  React.useEffect(() => {
    console.log("Comp. Func - Rendereizando sin dep.");
  }, [count]);

  React.useEffect(() => {
    return () => {
      console.log("Compo. Func. - Desmotando el componente");
    };
  }, []);

  return (
    <>
      <h4>{children}</h4>
      <div>Contador {count}</div>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("Comp. Classe - renderizando despues de montar el componente");
  }

  componentDidUpdate() {
    console.log(
      "Comp. Classe - renderizando despues de actualizar el componente"
    );
  }

  componentWillUnmount() {
    console.log("Comp. Classe - desmontando el componente");
  }

  render() {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div>Contandor {this.state.count}</div>
        <button onClick={this.handleAdd}>Adicionar</button>
      </>
    );
  }
}

const App = () => {
  const [vibible, setVisible] = React.useState(true);
  const handleToggle = () => {
    setVisible(!vibible);
  };
  return (
    <>
      <h1>Componente funcional Vs. componente de classe</h1>
      <button onClick={handleToggle}>Toggle</button>
      <hr />
      {vibible ? (
        <>
          <FunctionaComponent>Componente funcional</FunctionaComponent>
          <ClassComponent>Componente de clase</ClassComponent>
        </>
      ) : null}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
