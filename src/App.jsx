import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './layouts/Layout';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import MenuSection from './components/MenuSection';
import LocationsSection from './components/LocationsSection';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Identity / About Section */}
        <IdentitySection />

        {/* 3. Menu / Card Section */}
        <MenuSection />

        {/* 4. Locations Grid */}
        <LocationsSection />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
