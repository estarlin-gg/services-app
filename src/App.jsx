import "./App.css";
import { Container } from "./components/Containers";
import { Form } from "./components/Form";
import { Servicios } from "./components/Servicios";
import "./index.css";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState([]);
  const GuardarServicio = (servicio) => {
    setLista([servicio,...lista]);
  };
  const eliminar = (id) => {
     let nuevaLista = lista.filter(item => item.id !== id)
     setLista([...nuevaLista])
  }

  return (
    <>
      <Container>
        <Form GuardarServicio={GuardarServicio} />
        <Servicios servicios={lista} eliminar={eliminar} />
      </Container>
    </>
  );
}

export default App;
