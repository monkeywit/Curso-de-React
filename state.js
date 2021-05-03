const ProductCart = () => {

    const [count, setCount] = React.useState(0);

    const handleAddProduct = () => {
        setCount(count + 1);
    }

    const handleRemoveProduct = () => {
        if(count > 0) setCount(count - 1);
    }


    return(
        <>
            <h2>Cantidad de productos: {count}</h2>
            <button onClick={handleAddProduct}>Adicionar</button>
            <button onClick={handleRemoveProduct}>Eliminar</button>
        </>
    )
}

ReactDOM.render(<ProductCart/>, document.getElementById("container"));    

