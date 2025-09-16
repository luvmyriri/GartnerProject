import React from 'react';
import { AlertTriangle, Shield, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { risks } from '../data/prcData';

const Risks: React.FC = () => {
  const riskLevels = ['High', 'High', 'Medium', 'Medium', 'Low'];
  const riskColors = {
    'High': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600' },
    'Medium': { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: 'text-yellow-600' },
    'Low': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: 'text-green-600' }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'High': return XCircle;
      case 'Medium': return AlertCircle;
      case 'Low': return CheckCircle2;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Risk Assessment & Mitigation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive risk analysis and mitigation strategies for PRC's digital transformation,
            ensuring proactive management of potential challenges and obstacles.
          </p>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-500">
            <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">2</div>
            <div className="text-gray-700 text-sm">High Risk Items</div>
            <div className="text-red-600 text-xs mt-1">Immediate attention required</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-yellow-500">
            <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
            <div className="text-gray-700 text-sm">Medium Risk Items</div>
            <div className="text-yellow-600 text-xs mt-1">Active monitoring needed</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-green-500">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className="text-gray-700 text-sm">Low Risk Items</div>
            <div className="text-green-600 text-xs mt-1">Standard controls sufficient</div>
          </div>
        </div>

        {/* Detailed Risk Analysis */}
        <div className="space-y-6 mb-12">
          {risks.map((risk, index) => {
            const level = riskLevels[index];
            const colors = riskColors[level as keyof typeof riskColors];
            const RiskIcon = getRiskIcon(level);
            
            return (
              <div key={index} className={`bg-white rounded-xl shadow-lg ${colors.border} border-l-4`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <RiskIcon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{risk.risk}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} mt-1`}>
                          {level} Risk
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Potential Impact</h4>
                      <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{risk.impact}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Mitigation Strategy</h4>
                      <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{risk.mitigation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Matrix */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment Matrix</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Risk Factor</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Probability</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Impact</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Risk Level</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Response Strategy</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk, index) => {
                  const level = riskLevels[index];
                  const colors = riskColors[level as keyof typeof riskColors];
                  const probability = index < 2 ? 'High' : index < 4 ? 'Medium' : 'Low';
                  const impact = index < 2 ? 'High' : 'Medium';
                  
                  return (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{risk.risk}</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          probability === 'High' ? 'bg-red-100 text-red-800' : 
                          probability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {probability}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {impact}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                          {level}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-2 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {level === 'High' ? 'Mitigate' : level === 'Medium' ? 'Monitor' : 'Accept'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Management Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Monitoring Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Identification</h4>
                  <p className="text-gray-600 text-sm">Continuous scanning for new risks and emerging threats</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment</h4>
                  <p className="text-gray-600 text-sm">Evaluate probability and impact using standardized criteria</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Response</h4>
                  <p className="text-gray-600 text-sm">Implement appropriate mitigation strategies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Monitoring</h4>
                  <p className="text-gray-600 text-sm">Regular review and adjustment of risk controls</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Escalation Procedures</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">High Risk</h4>
                </div>
                <p className="text-red-800 text-sm">Immediate escalation to EA Governance Board and PRC leadership</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-900">Medium Risk</h4>
                </div>
                <p className="text-yellow-800 text-sm">Weekly review with project steering committee</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Low Risk</h4>
                </div>
                <p className="text-green-800 text-sm">Monthly monitoring through standard reporting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Mitigation Success Factors */}
        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Risk Mitigation Success Factors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">Proactive Planning</div>
              <div className="text-sm opacity-90">
                Early identification and preparation for potential risks
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">Stakeholder Engagement</div>
              <div className="text-sm opacity-90">
                Active involvement in risk assessment and response
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">Contingency Planning</div>
              <div className="text-sm opacity-90">
                Ready alternatives for high-impact scenarios
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <XCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">Regular Reviews</div>
              <div className="text-sm opacity-90">
                Continuous monitoring and adaptive management
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risks;