import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Error from './Error'

const Formulario = ({ pacientes, set_pacientes }) => {
  //Logíca del programa
  const [nombre, set_nombre] = useState("");
  const [propietario, set_propietario] = useState("");
  const [email, set_email] = useState("");
  const [fecha, set_fecha] = useState("");
  const [sintomas, set_sintomas] = useState("");
  const [error, set_error] = useState(false);

  //funciones
  const notify = (dato) => toast.error(`${dato}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      set_error(true);
      notify("Hay almenos un campo vacio");
      return;
    }
    
    set_pacientes([...pacientes,{nombre,propietario,email,fecha,sintomas}])
    set_error(false);
    set_nombre('')
    set_propietario('')
    set_email('')
    set_fecha('')
    set_sintomas('')
  };

  return (
    <>
      <Toaster /> {/* alerta */}
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className="text-bold mt-5 text-center text-xl  mb-10">
          Añade pacientes y{" "}
          <span className="text-indigo-600 font-bold"> Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
          action=""
        >
          {error && (<Error mensaje ="Todos los campos son requeridos"/>  )}
          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Mascota
            </label>
            <input
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de la mascota"
              value={nombre}
              onChange={(e) => set_nombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre del propietario
            </label>
            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre del propietario"
              value={propietario}
              onChange={(e) => set_propietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              placeholder="Email del propietario"
              value={email}
              onChange={(e) => set_email(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="alata"
              className="block text-gray-700 uppercase font-bold"
            >
              Fecha de alta
            </label>
            <input
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date"
              value={fecha}
              onChange={(e) => set_fecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              className="border-2  w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name=""
              cols="3"
              rows="3"
              value={sintomas}
              onChange={(e) => set_sintomas(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
            value="Agregar paciente"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
