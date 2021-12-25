import  Formulario  from "./components/Formulario.jsx";
import  ListaPacientes  from "./components/ListadoPacientes";
import Header  from './components/Header.jsx'

function App() {
return (
  <div className="container mx-auto">
      <Header />
    <div className="mt-12 md:flex">
      <Formulario />
      <ListaPacientes />
    </div>
  </div>
);
}
export default App

