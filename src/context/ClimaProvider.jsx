import { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResultado, setNoResultado] = useState(false);

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion que se va a encargar de conectarse a la APi del clima
  const consultarClima = async (datos) => {
    setLoading(true);
    setResultado(false);

    try {
      const { ciudad, pais } = datos;

      // se llama asi ya que la api del clima lo pide asi
      const appId = import.meta.env.VITE_API_KEY;

      // esta consulta es para extraer los datos de la API lo que necesitamos para hacer la consulta del clima
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      // de la data, extraemos "lat" y "long" que es informacion que necesitamos para hacer la peticion al clima
      const { lat, lon } = data[0];

      // la nueva consulta para traer la informacion del clima
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      // aqui renombramos "data" ya que se habia declaradoa anteriormente
      const { data: clima } = await axios(urlClima);

      setResultado(clima);
    } catch (error) {
      setNoResultado('No hay resultados :(');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        loading,
        noResultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
