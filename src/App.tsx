import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import GartnerFramework from './pages/GartnerFramework';
import Overview from './pages/Overview';
import EADomains from './pages/EADomains';
import Implementation from './pages/Implementation';
import Metrics from './pages/Metrics';
import Risks from './pages/Risks';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home onSectionChange={setActiveSection} />;
      case 'gartner':
        return <GartnerFramework />;
      case 'overview':
        return <Overview />;
      case 'domains':
        return <EADomains />;
      case 'implementation':
        return <Implementation />;
      case 'metrics':
        return <Metrics />;
      case 'risks':
        return <Risks />;
      default:
        return <Home onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="App min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PRC Digital Transformation</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive showcase of Gartner Enterprise Architecture Framework 
                application to Professional Regulation Commission modernization.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Framework Domains</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Business Architecture</li>
                <li>Information Architecture</li>
                <li>Application Architecture</li>
                <li>Technology Architecture</li>
                <li>Security & Risk Architecture</li>
                <li>Governance Architecture</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Statistics</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>46 Regulated Professions</li>
                <li>529,772 Professionals (Central Luzon)</li>
                <li>130,744+ LET Examinees</li>
                <li>47-day Result Release Target</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300 text-sm">
            <p>&copy; 2025 PRC Gartner EA Framework Showcase. Developed and Presented by Lamsen, Tabios, Evangelista, Agarano, Galdiano, and Garcia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;