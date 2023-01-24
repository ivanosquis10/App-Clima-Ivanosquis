import useClima from '../hooks/useClima.jsx';

const ClimaResultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  // Operacion de Kelvin a grados centigrados
  const kelvin = 273.15;
  return (
    <div className="text-white rounded-md uppercase bg-slate-800 shadow-md shadow-slate-600 border-2 border-gray-600">
      <h2 className="text-center text-xl md:text-3xl py-2 md:py-4 border-b-2 border-slate-700 text-gray-400">
        El clima en{' '}
        <span className="font-bold text-2xl md:text-4xl text-gray-200">
          {' '}
          <br />
          {name}
        </span>{' '}
      </h2>

      <div className="mt-4">
        <p className="text-center text-gray-400 font-bold text-2xl md:text-3xl">
          Actual:{' '}
          <span className="font-bold text-gray-200 text-3xl md:text-4xl">
            {parseInt(main.temp - kelvin)} &#x2103;
          </span>
        </p>
        <div className="flex flex-col items-center gap-2 my-5">
          <p className="text-2xl md:text-3xl text-gray-400">
            Min:{' '}
            <span className="font-bold text-gray-200 text-3xl md:text-4xl">
              {parseInt(main.temp_min - kelvin)} &#x2103;
            </span>
          </p>
          <p className="text-2xl  md:text-3xl text-gray-400">
            Max:{' '}
            <span className="font-bold text-gray-200 text-3xl md:text-3xl">
              {parseInt(main.temp_max - kelvin)} &#x2103;
            </span>
          </p>
          <p className="text-2xl  md:text-3xl text-gray-400">
            Humedad:{' '}
            <span className="font-bold text-gray-200 text-2xl md:text-3xl">
              {main.humidity}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClimaResultado;
