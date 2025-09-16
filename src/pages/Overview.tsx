import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { prcStats } from '../data/prcData';

const Overview: React.FC = () => {
  const formatNumber = (num: number) => num.toLocaleString();

  const examData = [
    {
      exam: 'LET Elementary March 2024',
      examinees: prcStats.letMarch2024.elementary.examinees,
      passers: prcStats.letMarch2024.elementary.passers,
      passRate: prcStats.letMarch2024.elementary.passRate
    },
    {
      exam: 'LET Secondary March 2024',
      examinees: prcStats.letMarch2024.secondary.examinees,
      passers: prcStats.letMarch2024.secondary.passers,
      passRate: prcStats.letMarch2024.secondary.passRate
    },
    {
      exam: 'LET Elementary Sept 2024',
      examinees: prcStats.letSeptember2024.elementary.examinees,
      passers: prcStats.letSeptember2024.elementary.passers,
      passRate: prcStats.letSeptember2024.elementary.passRate
    },
    {
      exam: 'LET Secondary Sept 2024',
      examinees: prcStats.letSeptember2024.secondary.examinees,
      passers: prcStats.letSeptember2024.secondary.passers,
      passRate: prcStats.letSeptember2024.secondary.passRate
    },
    {
      exam: 'PLE March 2025',
      examinees: prcStats.pleMarch2025.examinees,
      passers: prcStats.pleMarch2025.passers,
      passRate: prcStats.pleMarch2025.passRate
    }
  ];

  const healthProfessionalsData = [
    {
      profession: 'Doctors',
      registered: prcStats.healthProfessionalsActive.doctors.registered,
      active: prcStats.healthProfessionalsActive.doctors.active,
      activeRate: prcStats.healthProfessionalsActive.doctors.activeRate
    },
    {
      profession: 'Nurses',
      registered: prcStats.healthProfessionalsActive.nurses.registered,
      active: prcStats.healthProfessionalsActive.nurses.active,
      activeRate: prcStats.healthProfessionalsActive.nurses.activeRate
    },
    {
      profession: 'Midwives',
      registered: prcStats.healthProfessionalsActive.midwives.registered,
      active: prcStats.healthProfessionalsActive.midwives.active,
      activeRate: prcStats.healthProfessionalsActive.midwives.activeRate
    }
  ];

  const pieColors = ['#3B82F6', '#10B981', '#F59E0B'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">PRC Current State Overview</h1>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Comprehensive analysis of PRC operations using recent data (2023-2025) 
            highlighting scale, challenges, and opportunities for digital transformation across
            46 regulated professions serving millions of Filipino professionals and citizens.
          </p>
        </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          <div className="stats-card bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="text-4xl font-bold mb-3">{prcStats.regulatedProfessions}</div>
            <div className="text-blue-100 text-lg font-medium">Regulated Professions</div>
            <div className="text-blue-200 text-sm mt-2">46 Professional Boards</div>
          </div>
          
          <div className="stats-card bg-gradient-to-br from-emerald-600 to-green-700 text-white">
            <div className="text-4xl font-bold mb-3">{formatNumber(prcStats.centralLuzonProfessionals)}</div>
            <div className="text-green-100 text-lg font-medium">Registered Professionals</div>
            <div className="text-green-200 text-sm mt-2">Central Luzon Region Only</div>
          </div>
          
          <div className="stats-card bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
            <div className="text-4xl font-bold mb-3">{formatNumber(prcStats.letMarch2024.totalExaminees)}</div>
            <div className="text-purple-100 text-lg font-medium">LET Examinees</div>
            <div className="text-purple-200 text-sm mt-2">March 2024 Cycle</div>
          </div>
          
          <div className="stats-card bg-gradient-to-br from-amber-600 to-orange-700 text-white">
            <div className="text-4xl font-bold mb-3">47</div>
            <div className="text-orange-100 text-lg font-medium">Working Days</div>
            <div className="text-orange-200 text-sm mt-2">Result Release Time</div>
          </div>
        </div>

        {/* Examination Results Analysis */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Examination Results (2024-2025)</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Examinees vs Passers</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={examData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="exam" angle={-45} textAnchor="end" height={100} fontSize={10} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="examinees" fill="#8884d8" name="Examinees" />
                  <Bar dataKey="passers" fill="#82ca9d" name="Passers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pass Rates by Examination</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={examData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="exam" angle={-45} textAnchor="end" height={100} fontSize={10} />
                  <YAxis domain={[0, 70]} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="passRate" fill="#ffc658" name="Pass Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Health Professionals Status */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Professionals Active Status (March 2023)</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Registered vs Active Professionals</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={healthProfessionalsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="profession" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="registered" fill="#8884d8" name="Registered" />
                  <Bar dataKey="active" fill="#82ca9d" name="Active" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Rates by Profession</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={healthProfessionalsData.map(item => ({
                      name: item.profession,
                      value: item.activeRate
                    }))}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {healthProfessionalsData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthProfessionalsData.map((profession, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold mb-2" style={{ color: pieColors[index] }}>
                  {profession.activeRate}%
                </div>
                <div className="text-gray-700 font-semibold">{profession.profession}</div>
                <div className="text-sm text-gray-500">
                  {formatNumber(profession.active)} of {formatNumber(profession.registered)} active
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Challenges Summary */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges Identified</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">Process Inefficiencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">47+ working days for LET result release</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Manual examination and licensing workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Limited online services and digital payments</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">Data Management Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">High inactive professional rates (38-60%)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Fragmented data across different systems</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Limited real-time professional status tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;