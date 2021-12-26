import {useState} from 'react';

import  Formulario  from "./components/Formulario.jsx";
import  ListaPacientes  from "./components/ListadoPacientes";
import Header  from './components/Header.jsx'

function App() {
  const [pacientes,set_pacientes]=useState([])
return (
  <div className="container mx-auto">
    <Header />
    <div className="mt-12 md:flex">
      <Formulario pacientes={pacientes} set_pacientes={set_pacientes} />
      <ListaPacientes pacientes={pacientes} />
    </div>
  </div>
);
}
export default App

