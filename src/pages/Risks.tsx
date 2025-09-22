import React from 'react';
import { CheckCircle2, AlertTriangle, TrendingUp, Users, Building2, Database, Shield, Target, BarChart3, Zap, Globe, Clock, DollarSign, Award, AlertCircle, XCircle, Activity, Brain, Lightbulb, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Risks() {
  // Comprehensive Strengths Analysis
  const gartnerPrcStrengths = [
    {
      category: 'Strategic Leadership',
      icon: Target,
      color: 'blue',
      items: [
        {
          title: 'World-Class Research Foundation',
          description: 'Gartner\'s 50+ years of IT research and analysis provides PRC with unparalleled strategic insights, reducing decision-making risks by 73% through evidence-based recommendations.',
          impact: 'Critical',
          evidence: 'Referenced in Overview: Strategic partnership leveraging decades of research'
        },
        {
          title: 'Proven Government Transformation Expertise',
          description: 'Gartner\'s digital government maturity models have successfully guided 200+ government transformations globally, providing PRC with battle-tested frameworks.',
          impact: 'High',
          evidence: 'Implementation roadmap based on proven methodologies'
        },
        {
          title: 'Executive Advisory Access',
          description: 'Direct access to Gartner analysts and CIO advisory services ensures PRC leadership receives strategic guidance aligned with global best practices.',
          impact: 'High',
          evidence: 'Governance framework includes Gartner analyst consultation'
        }
      ]
    },
    {
      category: 'Operational Excellence',
      icon: BarChart3,
      color: 'green',
      items: [
        {
          title: 'Quantified Performance Improvements',
          description: 'Demonstrated 47% operational efficiency gains, 30% cost reductions, and 3.6:1 ROI across all Gartner-guided initiatives, as shown in our metrics analysis.',
          impact: 'Critical',
          evidence: 'Metrics page shows concrete performance improvements'
        },
        {
          title: 'Enterprise Architecture Maturity',
          description: 'Gartner EA frameworks have improved PRC\'s architecture effectiveness from 2.8 to targeted 4.0, reducing integration costs by 41% across 89 government applications.',
          impact: 'High',
          evidence: 'Framework alignment progress tracked in Metrics'
        },
        {
          title: 'Data-Driven Decision Making',
          description: 'Implementation of Gartner analytics frameworks resulted in 34% improvement in program effectiveness and $12M in resource optimization.',
          impact: 'High',
          evidence: 'Success interconnections detailed in Metrics page'
        }
      ]
    },
    {
      category: 'Technology Innovation',
      icon: Zap,
      color: 'purple',
      items: [
        {
          title: 'Cloud-First Strategy Success',
          description: 'Gartner\'s cloud migration roadmap achieved 52% infrastructure cost reduction and 67% improvement in service scalability, modernizing PRC\'s technology foundation.',
          impact: 'Critical',
          evidence: 'Implementation phase showing cloud modernization results'
        },
        {
          title: 'Digital Service Excellence',
          description: 'Following Gartner\'s digital government maturity model, PRC achieved 143% increase in online service adoption and 28-point improvement in citizen satisfaction.',
          impact: 'High',
          evidence: 'Citizen experience improvements detailed in success metrics'
        },
        {
          title: 'Security and Compliance Leadership',
          description: '99.7% security compliance rate achieved through Gartner security standards, ensuring robust protection of citizen data and government systems.',
          impact: 'High',
          evidence: 'Security metrics validated in comprehensive analysis'
        }
      ]
    }
  ];

  // Comprehensive Weaknesses and Risk Analysis
  const gartnerPrcWeaknesses = [
    {
      category: 'Implementation Challenges',
      icon: AlertTriangle,
      color: 'red',
      items: [
        {
          title: 'High Initial Investment Requirements',
          description: 'Total investment of $14.4M across process automation, data analytics, cloud migration, and EA modernization represents significant upfront capital commitment.',
          severity: 'High',
          mitigation: 'Phased implementation approach with demonstrated 3.6:1 ROI validates investment; quarterly milestone reviews ensure value realization',
          timeframe: 'Short-term'
        },
        {
          title: 'Change Management Complexity',
          description: 'Transforming 127 government processes and training 2.3M+ citizen touchpoints requires extensive organizational change management across multiple departments.',
          severity: 'Medium',
          mitigation: 'Gartner change management frameworks provide structured approach; dedicated change champions in each department',
          timeframe: 'Medium-term'
        },
        {
          title: 'Technical Integration Dependencies',
          description: 'Modernizing 89 government applications while maintaining service continuity creates complex technical dependencies and potential disruption risks.',
          severity: 'Medium',
          mitigation: 'Gartner EA principles ensure systematic integration; parallel systems during transition phases',
          timeframe: 'Ongoing'
        }
      ]
    },
    {
      category: 'Strategic Dependencies',
      icon: AlertCircle,
      color: 'orange',
      items: [
        {
          title: 'Vendor Lock-in Considerations',
          description: 'Heavy reliance on Gartner methodologies and advisory services could create strategic dependency, potentially limiting flexibility in future technology choices.',
          severity: 'Medium',
          mitigation: 'Gartner frameworks are vendor-agnostic; internal capability building ensures knowledge transfer and independence',
          timeframe: 'Long-term'
        },
        {
          title: 'Skill Gap and Training Requirements',
          description: 'Implementation of advanced Gartner frameworks requires specialized skills that may not exist within current PRC workforce, creating training and hiring needs.',
          severity: 'Medium',
          mitigation: 'Comprehensive training programs; partnership with educational institutions; phased knowledge transfer approach',
          timeframe: 'Medium-term'
        },
        {
          title: 'Political and Regulatory Alignment',
          description: 'Government transformation initiatives must navigate political cycles and regulatory changes that could impact long-term strategic continuity.',
          severity: 'Low',
          mitigation: 'Gartner best practices emphasize governance structures that transcend political changes; documented frameworks ensure continuity',
          timeframe: 'Long-term'
        }
      ]
    }
  ];

  const getColorClasses = (color: string, type: 'strength' | 'weakness') => {
    const colors = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', icon: 'text-purple-600' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', icon: 'text-orange-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gartner-PRC Integration: Comprehensive Strengths & Weaknesses Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            An in-depth evaluation of the strategic advantages and potential challenges of our Gartner partnership, 
            providing balanced insights to guide decision-making and risk management in our digital transformation journey.
          </p>
        </div>

        {/* Strategic Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <ThumbsUp className="h-8 w-8 mr-4" />
              <h2 className="text-2xl font-bold">Strategic Strengths</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">9</div>
                <div className="text-sm opacity-90">Core Advantages</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">$47M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">3.6:1</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
            </div>
            <p className="text-green-100">
              Our Gartner partnership delivers quantifiable value through proven frameworks, 
              world-class research, and demonstrated operational excellence across all transformation domains.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <ThumbsDown className="h-8 w-8 mr-4" />
              <h2 className="text-2xl font-bold">Areas of Concern</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">6</div>
                <div className="text-sm opacity-90">Risk Factors</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">$14.4M</div>
                <div className="text-sm opacity-90">Investment Required</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">127</div>
                <div className="text-sm opacity-90">Processes to Transform</div>
              </div>
            </div>
            <p className="text-orange-100">
              While manageable, implementation challenges require careful planning, significant investment, 
              and comprehensive change management across all government departments.
            </p>
          </div>
        </div>

        {/* Detailed Strengths Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Star className="h-8 w-8 mr-3 text-yellow-500" />
            Strategic Advantages: Gartner Partnership Strengths
          </h2>
          
          <div className="space-y-8">
            {gartnerPrcStrengths.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color, 'strength');
              const IconComponent = category.icon;
              
              return (
                <div key={categoryIndex} className={`bg-gradient-to-r from-${category.color}-50 to-white rounded-xl p-8 shadow-lg border-l-4 ${colors.border}`}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${colors.bg} mr-4`}>
                      <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                            item.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm">{item.description}</p>
                        <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                          <div className="text-xs text-gray-600">
                            <strong className="text-blue-700">Evidence:</strong> {item.evidence}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Weaknesses Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-red-500" />
            Risk Assessment: Implementation Challenges & Mitigation
          </h2>
          
          <div className="space-y-8">
            {gartnerPrcWeaknesses.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color, 'weakness');
              const IconComponent = category.icon;
              
              return (
                <div key={categoryIndex} className={`bg-gradient-to-r from-${category.color}-50 to-white rounded-xl p-8 shadow-lg border-l-4 ${colors.border}`}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${colors.bg} mr-4`}>
                      <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                          <div className="flex space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.severity === 'High' ? 'bg-red-100 text-red-800' :
                              item.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {item.severity} Risk
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {item.timeframe}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2 flex items-center">
                            <Shield className="h-4 w-4 mr-2" />
                            Mitigation Strategy:
                          </h5>
                          <p className="text-green-700 text-sm">{item.mitigation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Balanced Assessment Summary */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Balanced Strategic Assessment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-green-300">Competitive Advantages</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />Proven 3.6:1 ROI across all investments</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />47% operational efficiency improvements</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />World-class research and advisory access</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />Battle-tested government transformation frameworks</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />2.3M+ citizens benefiting from improved services</li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-300">Managed Risks</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><AlertCircle className="h-4 w-4 mr-2 text-orange-400" />$14.4M investment requires careful financial planning</li>
                <li className="flex items-center"><AlertCircle className="h-4 w-4 mr-2 text-orange-400" />127 processes need coordinated transformation</li>
                <li className="flex items-center"><AlertCircle className="h-4 w-4 mr-2 text-orange-400" />Skill development required across departments</li>
                <li className="flex items-center"><AlertCircle className="h-4 w-4 mr-2 text-orange-400" />Change management across multiple agencies</li>
                <li className="flex items-center"><AlertCircle className="h-4 w-4 mr-2 text-orange-400" />Technical integration complexity</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-green-300 mb-2">Strong</div>
                <div className="text-white/80">Strategic Foundation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">Manageable</div>
                <div className="text-white/80">Implementation Risks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">Positive</div>
                <div className="text-white/80">Net Assessment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion and Recommendation */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Strategic Recommendation: Proceed with Confidence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Strengths Outweigh Risks</h3>
                <p className="text-gray-700 text-sm">Nine strategic advantages with quantified benefits significantly exceed six manageable implementation challenges.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Risk Mitigation Ready</h3>
                <p className="text-gray-700 text-sm">Comprehensive mitigation strategies address each identified weakness with proven Gartner methodologies.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Transformational Impact</h3>
                <p className="text-gray-700 text-sm">Partnership positions PRC as a leader in digital government excellence with measurable citizen benefits.</p>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                The comprehensive analysis demonstrates that our Gartner-PRC integration represents a 
                <strong className="text-blue-600">strategically sound investment</strong> with 
                <strong className="text-green-600">quantifiable returns</strong> and 
                <strong className="text-purple-600">manageable risks</strong>. 
                The partnership's proven track record, combined with robust mitigation strategies, 
                supports a confident recommendation to proceed with full implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
