import { useState } from 'react';
import useClima from '../hooks/useClima';
import Error from './Error.jsx';

const Formulario = () => {
  const [error, setError] = useState(false);

  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  // funcion que se va a encargar de manejar el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      return setError(true);
    }
    setError(false);
    consultarClima(busqueda);
  };

  return (
    <div className="bg-slate-800 shadow shadow-slate-600 rounded-md px-5 py-8 text-base md:text-2xl">
      <form onSubmit={handleSubmit}>
        {error && <Error msg="Todos los campos son obligatorios" />}
        <div className="mb-4">
          <label
            htmlFor="ciudad"
            className="block font-bold uppercase text-gray-400"
          >
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            className="text-gray-400 rounded-md w-full py-1 px-1 mt-2 border-2 border-slate-500 outline-none shadow-md bg-transparent"
            placeholder="Ingresa una ciudad..."
            autoComplete="off"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="pais"
            className="block text-gray-400 font-bold uppercase"
          >
            Pais
          </label>
          <select
            name="pais"
            id="pais"
            className="text-gray-400 rounded-md w-full py-1.5 px-1 mt-2 border-2 border-slate-500 outline-none shadow-md bg-transparent"
            onChange={datosBusqueda}
            value={pais}
          >
            <option className="bg-slate-800 text-white" value="" disabled>
              --Seleccione un Pais--
            </option>

            <option className="bg-slate-800 text-white" value="US">
              Estados Unidos
            </option>
            <option className="bg-slate-800 text-white" value="VE">
              Venezuela
            </option>
            <option className="bg-slate-800 text-white" value="AR">
              Argentina
            </option>
            <option className="bg-slate-800 text-white" value="MX">
              Mexico
            </option>
            <option className="bg-slate-800 text-white" value="CO">
              Colombia
            </option>
            <option className="bg-slate-800 text-white" value="ES">
              España
            </option>
            <option className="bg-slate-800 text-white" value="CR">
              Costa Rica
            </option>
          </select>
        </div>

        <input
          type="submit"
          value="Consultar Clima"
          className="w-full mt-5 border-2 border-gray-400 rounded-md py-2 uppercase font-bold cursor-pointer text-slate-500 hover:bg-slate-700 hover:text-slate-200 ease-in-out duration-300"
        />
      </form>
    </div>
  );
};

export default Formulario;
