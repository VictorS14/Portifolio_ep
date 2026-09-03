import Navbar from './components/Navbar';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="inicio" className="min-h-screen bg-dark-bg overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-700/5 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <main>
        <SobreMim />
        <Habilidades />
        <Projetos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
