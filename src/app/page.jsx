import './main.scss'
import PriceSection from './components/PriceSection/PriceSection';
import HeroSection from './components/HeroSection/HeroSection';
import TimeSection from './components/TimeSection/TimeSection';
import ContactsSection from './components/ContactsSection/ContactsSection';

export default function HomePage() {

  return (
    <main>
      <HeroSection/>
      <PriceSection/>
      <TimeSection/>
      <ContactsSection/>
    </main>
  );
}
