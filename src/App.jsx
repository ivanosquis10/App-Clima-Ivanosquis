import { ClimaProvider } from './context/ClimaProvider';
import Header from './components/Header';
import AppClima from './components/AppClima';
import Footer from './components/Footer';

const App = () => {
  return (
    <ClimaProvider>
      <Header />
      <AppClima />
      <Footer />
    </ClimaProvider>
  );
};

export default App;
