import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Building2, Database, Monitor, Cog, Shield, FileCheck } from 'lucide-react';
import { gartnerDomains } from '../data/prcData';

const EADomains: React.FC = () => {
  const [expandedDomain, setExpandedDomain] = useState<string>('business');

  const domainIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    business: Building2,
    information: Database,
    application: Monitor,
    technology: Cog,
    security: Shield,
    governance: FileCheck,
  };

  const domainColors: { [key: string]: string } = {
    business: 'blue',
    information: 'green',
    application: 'purple',
    technology: 'orange',
    security: 'red',
    governance: 'indigo',
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Gartner EA Framework Domains</h1>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Six comprehensive architectural domains applied to PRC's digital transformation,
            each addressing specific aspects of enterprise modernization and optimization to serve
            over 500,000 professionals and millions of citizens nationwide.
          </p>
        </div>

        {/* Framework Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enterprise Architecture Framework Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {gartnerDomains.map((domain) => {
              const IconComponent = domainIcons[domain.id];
              const color = domainColors[domain.id];
              
              return (
                <div 
                  key={domain.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    expandedDomain === domain.id 
                      ? `bg-${color}-100 border-${color}-300 transform scale-105` 
                      : `bg-${color}-50 border-${color}-200 hover:bg-${color}-100`
                  }`}
                  onClick={() => setExpandedDomain(expandedDomain === domain.id ? '' : domain.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className={`w-8 h-8 text-${color}-600`} />
                    <span className={`text-2xl`}>{domain.icon}</span>
                  </div>
                  <h3 className={`text-lg font-semibold text-${color}-900 mb-2`}>{domain.name}</h3>
                  <p className={`text-sm text-${color}-700 leading-relaxed`}>{domain.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Domain Information */}
        <div className="space-y-6">
          {gartnerDomains.map((domain) => {
            const IconComponent = domainIcons[domain.id];
            const isExpanded = expandedDomain === domain.id;
            const color = domainColors[domain.id];
            
            return (
              <div 
                key={domain.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl' : ''
                }`}
              >
                <div 
                  className={`p-6 cursor-pointer ${
                    isExpanded 
                      ? `bg-${color}-50 border-l-4 border-${color}-500` 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setExpandedDomain(isExpanded ? '' : domain.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-${color}-100`}>
                        <IconComponent className={`w-6 h-6 text-${color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{domain.name}</h3>
                        <p className="text-gray-600">{domain.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl">{domain.icon}</span>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-6 bg-gray-50 border-t animate-fade-in">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Implementation Areas for PRC
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {domain.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                          <div className={`w-2 h-2 bg-${color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Domain-specific insights */}
                    <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-semibold text-gray-900 mb-2">PRC-Specific Application:</h5>
                      <p className="text-gray-700 text-sm">
                        {getDomainInsight(domain.id)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Integrated Approach</h3>
            <p className="text-lg mb-6 opacity-90">
              These six domains work synergistically to transform PRC operations, 
              ensuring comprehensive modernization that addresses technical, process, 
              and governance aspects simultaneously.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Business-Driven</div>
                <div className="opacity-80">Aligned with PRC mission</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Data-Centric</div>
                <div className="opacity-80">Single source of truth</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Technology-Enabled</div>
                <div className="opacity-80">Scalable & secure</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Risk-Aware</div>
                <div className="opacity-80">Compliant & protected</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Well-Governed</div>
                <div className="opacity-80">Sustainable practices</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <div className="font-semibold">Citizen-Focused</div>
                <div className="opacity-80">Improved service delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to provide domain-specific insights
const getDomainInsight = (domainId: string): string => {
  const insights: { [key: string]: string } = {
    business: "With over 130,000 LET examinees and 529,772 professionals in Central Luzon alone, PRC needs robust business capabilities that can scale efficiently while maintaining service quality and reducing the current 47-day result release timeframe.",
    information: "Creating a unified database for 46 regulated professions will enable real-time tracking of professional status, addressing the current issue where 38-60% of health professionals are registered but inactive.",
    application: "Integrated digital platforms will streamline the entire professional lifecycle from examination registration to license renewal, supporting the high-volume seasonal demands of examinations like LET and PLE.",
    technology: "Cloud infrastructure and distributed architecture will ensure the system can handle peak loads during examination cycles while providing equitable access across all Philippine regions.",
    security: "With sensitive examination and professional data for hundreds of thousands of individuals, robust security measures and Data Privacy Act compliance are essential to maintain public trust.",
    governance: "Strong governance frameworks will ensure coordinated implementation across PRC, CHED, DOH, and other agencies, maintaining alignment with national workforce development goals."
  };
  
  return insights[domainId] || "This domain provides essential architectural guidance for PRC's digital transformation initiative.";
};

export default EADomains;