import twitter from '../assets/twitter.svg';
import guthub from '../assets/github.svg';

const Footer = () => {
  return (
    <footer className="mt-5 py-5 text-center">
      <div className="flex justify-center items-center gap-2">
        <a href="https://twitter.com/ivanosquis13" target="_blank">
          <img src={twitter} alt="logo de twitter" />
        </a>
        <a href="https://github.com/ivanosquis10" target="_blank">
          <img src={guthub} alt="logo de github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
