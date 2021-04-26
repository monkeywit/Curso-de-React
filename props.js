const CustomInput = ({ label, placeholder }) => {
  return (
    <div style={{marginBottom: "10px"}}>
      <label htmlFor="name">{label} </label>
      <input id="name" type="text" placeholder={placeholder} />
    </div>
  );
};

const FormTitle = ({children}) => {
    return <h1>{children}</h1>
}

const CustomForm = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <form action="">
          <FormTitle>
             <span style={{color: "green"}}>Formulario</span>
          </FormTitle>
          <CustomInput label="Nombre" placeholder="Digite su nombre"/>
          <CustomInput label="Edad" placeholder="Digite su edad"/>
          <CustomInput label="Nacionalidad" placeholder="Digite su nacionalidad"/>
      </form>
    </div>
  );
};

ReactDOM.render(<CustomForm />, document.getElementById("container"));
