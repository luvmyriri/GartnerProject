import React from 'react';
import { ArrowRight, Users, FileText, TrendingUp, Globe } from 'lucide-react';
import { prcStats } from '../data/prcData';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              PRC Digital Transformation
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-95 animate-fade-in font-light">
              Applying Gartner Enterprise Architecture Framework
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-85 animate-fade-in leading-relaxed">
              Comprehensive modernization strategy for the Professional Regulation Commission
              using real data from 2023-2025 to showcase digital transformation through
              Enterprise Architecture best practices.
            </p>
            <button
              onClick={() => onSectionChange('overview')}
              className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 inline-flex items-center shadow-2xl hover:shadow-3xl"
            >
              Explore the Framework
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Current PRC Scale & Challenge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the massive scale of operations that require digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="stats-card bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <div className="text-4xl font-bold mb-3">{prcStats.regulatedProfessions}</div>
                <div className="text-blue-100 text-lg font-medium">Regulated Professions</div>
                <div className="text-blue-200 text-sm mt-2">Nationwide oversight</div>
              </div>
              
              <div className="stats-card bg-gradient-to-br from-emerald-600 to-green-700 text-white">
                <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <div className="text-4xl font-bold mb-3">{formatNumber(prcStats.centralLuzonProfessionals)}</div>
                <div className="text-green-100 text-lg font-medium">Central Luzon Professionals</div>
                <div className="text-green-200 text-sm mt-2">Active registrations</div>
              </div>
              
              <div className="stats-card bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
                <FileText className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <div className="text-4xl font-bold mb-3">{formatNumber(prcStats.letMarch2024.totalExaminees)}</div>
                <div className="text-purple-100 text-lg font-medium">LET March 2024 Examinees</div>
                <div className="text-purple-200 text-sm mt-2">Teacher licensure exam</div>
              </div>
              
              <div className="stats-card bg-gradient-to-br from-amber-600 to-orange-700 text-white">
                <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <div className="text-4xl font-bold mb-3">{prcStats.letMarch2024.overallPassRate}%</div>
                <div className="text-orange-100 text-lg font-medium">LET Overall Pass Rate</div>
                <div className="text-orange-200 text-sm mt-2">Success metrics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">The Digital Transformation Challenge</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                PRC faces significant scalability and efficiency challenges in managing
                high-volume examinations and professional licensing processes across 46 regulated professions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div className="section-card border-l-4 border-red-500 bg-gradient-to-br from-red-50 to-pink-50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-700">Current Pain Points</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Manual/semi-manual processes causing delays in result release <span className="text-red-600 font-bold">(47+ working days)</span></span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">High inactive professional rates <span className="text-red-600 font-bold">(38-60% across health professions)</span></span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Fragmented data systems across different functions</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Regional service access inequalities</span>
                  </li>
                </ul>
              </div>

              <div className="section-card border-l-4 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700">Future Vision</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Fully integrated digital platform for all PRC services</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Real-time professional status tracking and management</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Citizen-friendly mobile apps and online portals</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-800 font-medium">Scalable systems handling exam surges efficiently</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => onSectionChange('domains')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                Explore EA Domains
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gartner Framework Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Gartner EA Framework Application</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Six comprehensive domains working together to transform PRC operations
                and improve service delivery across the Philippines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Business Architecture', icon: '🏢', color: 'from-blue-600 to-blue-700', desc: 'Strategic alignment & KPIs' },
                { name: 'Information Architecture', icon: '📊', color: 'from-emerald-600 to-green-700', desc: 'Data governance & insights' },
                { name: 'Application Architecture', icon: '💻', color: 'from-purple-600 to-indigo-700', desc: 'System integration & apps' },
                { name: 'Technology Architecture', icon: '⚙️', color: 'from-amber-600 to-orange-700', desc: 'Infrastructure & platforms' },
                { name: 'Security & Risk Architecture', icon: '🔒', color: 'from-red-600 to-rose-700', desc: 'Protection & compliance' },
                { name: 'Governance Architecture', icon: '📋', color: 'from-slate-600 to-gray-700', desc: 'Policies & oversight' }
              ].map((domain, index) => (
                <div key={index} className="domain-card bg-white group hover:bg-gray-50">
                  <div className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{domain.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{domain.name}</h3>
                  <p className="text-gray-600 text-center font-medium">{domain.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={() => onSectionChange('domains')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 inline-flex items-center shadow-xl hover:shadow-2xl"
              >
                Explore All Domains
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;