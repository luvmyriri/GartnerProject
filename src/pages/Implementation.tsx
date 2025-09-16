import React from 'react';
import { Clock, CheckCircle, ArrowRight, Target, Users, Zap } from 'lucide-react';
import { implementationPhases } from '../data/prcData';

const Implementation: React.FC = () => {
  const phaseColors = ['blue', 'green', 'purple'];
  const phaseIcons = [Zap, Target, Users];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Implementation Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Phased approach to PRC digital transformation, progressing from quick wins 
            to comprehensive modernization over 36+ months.
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Three-Phase Transformation Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {implementationPhases.map((phase, index) => {
                const color = phaseColors[index];
                const IconComponent = phaseIcons[index];
                
                return (
                  <div key={phase.phase} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className={`hidden md:flex w-16 h-16 bg-${color}-100 border-4 border-${color}-500 rounded-full items-center justify-center z-10`}>
                      <IconComponent className={`w-6 h-6 text-${color}-600`} />
                    </div>
                    
                    {/* Phase content */}
                    <div className="md:ml-8 w-full">
                      <div className={`bg-${color}-50 border border-${color}-200 rounded-xl p-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold text-${color}-900`}>
                              Phase {phase.phase}: {phase.name}
                            </h3>
                            <div className="flex items-center mt-2">
                              <Clock className={`w-4 h-4 text-${color}-600 mr-2`} />
                              <span className={`text-${color}-700 font-medium`}>{phase.timeframe}</span>
                            </div>
                          </div>
                          <div className="md:hidden">
                            <IconComponent className={`w-8 h-8 text-${color}-600`} />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Actions */}
                          <div>
                            <h4 className={`text-lg font-semibold text-${color}-900 mb-3`}>Key Actions</h4>
                            <ul className="space-y-2">
                              {phase.actions.map((action, actionIndex) => (
                                <li key={actionIndex} className="flex items-start">
                                  <ArrowRight className={`w-4 h-4 text-${color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                                  <span className={`text-${color}-800 text-sm`}>{action}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Benefits */}
                          <div>
                            <h4 className={`text-lg font-semibold text-${color}-900 mb-3`}>Expected Benefits</h4>
                            <ul className="space-y-2">
                              {phase.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start">
                                  <CheckCircle className={`w-4 h-4 text-${color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                                  <span className={`text-${color}-800 text-sm`}>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phase Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {implementationPhases.map((phase, index) => {
            const color = phaseColors[index];
            const IconComponent = phaseIcons[index];
            
            return (
              <div key={phase.phase} className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-${color}-500`}>
                <div className={`p-6 bg-${color}-50`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold text-${color}-900`}>
                      Phase {phase.phase}
                    </h3>
                    <IconComponent className={`w-8 h-8 text-${color}-600`} />
                  </div>
                  <h4 className={`text-lg font-semibold text-${color}-800 mb-2`}>{phase.name}</h4>
                  <p className={`text-${color}-700 text-sm`}>{phase.timeframe}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Focus Areas</h5>
                    <div className="text-sm text-gray-600">
                      {phase.actions.length} key initiatives
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Success Metrics</h5>
                    <div className="text-sm text-gray-600">
                      {phase.benefits.length} measurable outcomes
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementation Strategy */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600 text-sm">Quick wins in 6-12 months to show immediate value</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Iterative Approach</h3>
              <p className="text-gray-600 text-sm">Continuous feedback and improvement cycles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakeholder Engagement</h3>
              <p className="text-gray-600 text-sm">Continuous involvement of all stakeholders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
              <p className="text-gray-600 text-sm">Proactive risk management and contingency planning</p>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Critical Success Factors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Leadership Commitment</h3>
              <p className="text-sm opacity-90">
                Strong executive sponsorship and change leadership from PRC senior management
              </p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Stakeholder Buy-in</h3>
              <p className="text-sm opacity-90">
                Active participation from examinees, professionals, and partner agencies
              </p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Technical Excellence</h3>
              <p className="text-sm opacity-90">
                Robust architecture and skilled implementation teams
              </p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Change Management</h3>
              <p className="text-sm opacity-90">
                Comprehensive training and communication programs
              </p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Adequate Resources</h3>
              <p className="text-sm opacity-90">
                Sufficient budget allocation and skilled personnel
              </p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-sm opacity-90">
                Regular progress tracking and course correction as needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;