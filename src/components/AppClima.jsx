import useClima from '../hooks/useClima.jsx';
import Formulario from './Formulario';
import Loading from './Loading';
import ClimaResultado from './ClimaResultado';
import Error from './Error.jsx';
import MsgHeading from './MsgHeading.jsx';

const AppClima = () => {
  const { resultado, loading, noResultado } = useClima();

  return (
    <>
      <main className="mx-auto px-2 mb-5 md:mb-0 grid md:w-11/12 md:grid-cols-2 md:px-0 md: gap-5 text-slate-900 mt-10 md:mt-20">
        <Formulario />

        {loading ? (
          <Loading />
        ) : resultado?.name ? (
          <ClimaResultado />
        ) : noResultado ? (
          <Error msg={noResultado} />
        ) : (
          <MsgHeading msg="Aquí aparecerá el clima :D" />
        )}
      </main>
    </>
  );
};

export default AppClima;
