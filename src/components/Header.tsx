import React, { useState } from 'react';
import { Menu, X, Home, BarChart3, Database, Monitor, Shield, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'gartner', name: 'Gartner Framework', icon: BookOpen },
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'domains', name: 'EA Domains', icon: Database },
    { id: 'implementation', name: 'Implementation', icon: Monitor },
    { id: 'metrics', name: 'KPIs & Metrics', icon: BarChart3 },
    { id: 'risks', name: 'Risks', icon: Shield },
  ];

  return (
    <header className="bg-white shadow-xl border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                P
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">PRC Digital Transformation</h1>
                <p className="text-sm text-blue-600 font-medium">Gartner EA Framework Showcase</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 shadow-md border border-blue-100'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;