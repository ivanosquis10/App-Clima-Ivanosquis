import cloud from '../assets/cloud-svg.svg';

const Header = () => {
  return (
    <header className="border-b py-5 text-center flex justify-center gap-3 items-center">
      <img src={cloud} alt="imagen de una nube" />
      <div>
        <h1 className="text-xl md:text-4xl text-white font-bold uppercase">
          {' '}
          Buscador de clima
        </h1>
      </div>
      <img src={cloud} alt="imagen de una nube" />
    </header>
  );
};

export default Header;
