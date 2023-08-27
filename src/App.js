import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import MainSection from './modules/Main/Index';
import AboutSection from './modules/About';
import HowSection from './modules/How';
import TokenomicsSection from './modules/Tokenomics';
import TestimotionalsSection from './modules/Testimotionals';
import PlanSection from './modules/Plan';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <MainSection />
        <AboutSection />
        <HowSection />
        <TokenomicsSection />
        <TestimotionalsSection />
        <PlanSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
