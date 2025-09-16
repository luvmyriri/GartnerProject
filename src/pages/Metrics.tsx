import React from 'react';
import { TrendingUp, Target, BarChart3, ArrowUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { kpiMetrics } from '../data/prcData';

const Metrics: React.FC = () => {
  const parseImprovement = (improvement: string): number => {
    const match = improvement.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const chartData = kpiMetrics.map(metric => ({
    name: metric.metric.replace(' ', '\n'),
    baseline: parseFloat(metric.baseline.replace(/[^\d.]/g, '')) || 0,
    target: parseFloat(metric.target.replace(/[^\d.]/g, '')) || 0,
    improvement: parseImprovement(metric.improvement)
  }));

  const timelineData = [
    { month: 'Current', let: 47, ple: 0, active: 50 },
    { month: '6 months', let: 40, ple: 0, active: 52 },
    { month: '12 months', let: 32, ple: 0, active: 58 },
    { month: '18 months', let: 28, ple: 55, active: 62 },
    { month: '24 months', let: 25, ple: 58, active: 65 },
    { month: '36 months', let: 22, ple: 60, active: 70 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KPIs & Success Metrics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable outcomes and performance indicators tracking PRC's digital transformation 
            progress from current baseline to target achievements.
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">47→25</div>
            <div className="text-gray-700 text-sm">LET Result Days</div>
            <div className="text-green-600 text-xs mt-1">47% improvement</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-green-500">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">49→60%</div>
            <div className="text-gray-700 text-sm">PLE Pass Rate</div>
            <div className="text-green-600 text-xs mt-1">+11 points</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-purple-500">
            <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">53→65%</div>
            <div className="text-gray-700 text-sm">Active Nurses</div>
            <div className="text-green-600 text-xs mt-1">+12 points</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-orange-500">
            <ArrowUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-700 text-sm">System Uptime</div>
            <div className="text-green-600 text-xs mt-1">Target</div>
          </div>
        </div>

        {/* Detailed KPI Table */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed KPI Breakdown</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Metric</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Current Baseline</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Target</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Improvement</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Priority</th>
                </tr>
              </thead>
              <tbody>
                {kpiMetrics.map((metric, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{metric.metric}</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                        {metric.baseline}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {metric.target}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        {metric.improvement}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        index < 3 ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {index < 3 ? 'High' : 'Medium'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Baseline vs Target Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.slice(0, 6)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={10} angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="baseline" fill="#ef4444" name="Current" />
                <Bar dataKey="target" fill="#10b981" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Projected Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="let" stroke="#3b82f6" name="LET Release Days" strokeWidth={2} />
                <Line type="monotone" dataKey="ple" stroke="#10b981" name="PLE Pass Rate" strokeWidth={2} />
                <Line type="monotone" dataKey="active" stroke="#f59e0b" name="Active Rate %" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Success Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Operational Efficiency</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">LET Result Release</span>
                <span className="text-sm font-semibold text-blue-600">-47%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">System Availability</span>
                <span className="text-sm font-semibold text-blue-600">99%+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">Online Services</span>
                <span className="text-sm font-semibold text-blue-600">90%+</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Professional Outcomes</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">LET Pass Rates</span>
                <span className="text-sm font-semibold text-green-600">+5-10pts</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">PLE Pass Rate</span>
                <span className="text-sm font-semibold text-green-600">+10pts</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">Active Professionals</span>
                <span className="text-sm font-semibold text-green-600">+10-12pts</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Service Quality</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">Citizen Satisfaction</span>
                <span className="text-sm font-semibold text-purple-600">High</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">Regional Access</span>
                <span className="text-sm font-semibold text-purple-600">Equitable</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">Data Accuracy</span>
                <span className="text-sm font-semibold text-purple-600">Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Measurement Framework */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Measurement Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Monthly</div>
              <div className="text-sm opacity-90">
                Operational metrics monitoring and reporting
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Quarterly</div>
              <div className="text-sm opacity-90">
                Strategic KPI assessment and course correction
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Annually</div>
              <div className="text-sm opacity-90">
                Comprehensive transformation review
              </div>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Ad-hoc</div>
              <div className="text-sm opacity-90">
                Critical incident and milestone tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;