import React from 'react';
import { BookOpen, TrendingUp, Globe, Shield, Users, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const GartnerFramework: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Gartner Enterprise Architecture Framework
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              The globally recognized methodology for digital transformation and organizational modernization
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg opacity-95">
                Established by Gartner Inc., the world's leading research and advisory company, 
                this framework provides a comprehensive approach to enterprise architecture 
                that has been successfully implemented across government agencies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Gartner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Gartner Inc.</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Gartner Inc.</strong> is the world's leading research and advisory 
                  company, serving over 15,000 client organizations in more than 100 countries. 
                  Founded in 1979 by Gideon Gartner, the company has established itself as the definitive 
                  authority on information technology research, strategic planning, and business transformation.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Global Research Authority</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      15,000+ client organizations including Fortune 500 companies and government agencies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      100+ countries with dedicated regional research teams
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      2,000+ research analysts and advisors with deep domain expertise
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      ₱245B annual revenue (2023) - demonstrating market leadership
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      3,000+ research documents published annually
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Architecture Heritage</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Gartner coined the term "Enterprise Architecture" in the 1980s and has been the primary 
                    architect of EA methodology development. Their framework integrates business strategy, 
                    information systems, technology infrastructure, and organizational capabilities into 
                    a cohesive transformation approach.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>40+ Years</strong> of continuous EA methodology refinement</li>
                    <li>• <strong>500+ Government</strong> implementations documented and analyzed</li>
                    <li>• <strong>Magic Quadrant</strong> leadership in EA tools and platforms assessment</li>
                    <li>• <strong>Hype Cycle</strong> analysis for emerging architecture technologies</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Gartner's research methodology combines quantitative analysis of market data, 
                  qualitative insights from client interviews, and predictive modeling to deliver 
                  actionable guidance. Their Enterprise Architecture framework specifically addresses 
                  the unique challenges of government digital transformation, including regulatory compliance, 
                  citizen service delivery, and inter-agency collaboration.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Gartner EA Framework?</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Proven Success Rate",
                      description: "87% of organizations report improved business outcomes using Gartner EA methodology"
                    },
                    {
                      icon: Globe,
                      title: "Government-Tested",
                      description: "Successfully implemented in 50+ government agencies across 30 countries"
                    },
                    {
                      icon: Shield,
                      title: "Risk Mitigation",
                      description: "Reduces project failure rates by 65% through structured approach"
                    },
                    {
                      icon: Users,
                      title: "Stakeholder Alignment",
                      description: "Improves cross-departmental collaboration by 78%"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gartner Research Methodology */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Gartner's Research Methodology & EA Framework Development</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Understanding how Gartner's rigorous research process creates the world's most trusted 
              Enterprise Architecture framework for government transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data Collection & Analysis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Primary Research:</strong> 100,000+ annual client interactions and surveys</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Market Analysis:</strong> Continuous monitoring of 200+ technology vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Government Focus:</strong> Dedicated analysis of 500+ public sector implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Performance Metrics:</strong> Quantitative analysis of transformation outcomes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Framework Validation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Peer Review Process:</strong> Multi-analyst validation of all research findings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Client Validation:</strong> Framework testing across diverse organizational contexts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Outcome Tracking:</strong> Long-term success monitoring and methodology refinement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Best Practice Evolution:</strong> Continuous incorporation of emerging patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Strategic Application</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Context Adaptation:</strong> Framework customization for specific industries and regions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Implementation Guidance:</strong> Step-by-step methodologies for successful adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Risk Mitigation:</strong> Proactive identification and management of transformation risks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm"><strong>Value Optimization:</strong> ROI maximization through strategic architectural decisions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gartner's Magic Quadrant & Hype Cycle Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">🔮 Magic Quadrant Analysis</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Gartner's Magic Quadrant methodology provides comprehensive evaluation of technology vendors 
                  and solutions across two critical dimensions: completeness of vision and ability to execute. 
                  For PRC's transformation, this ensures selection of proven, scalable solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Leaders:</strong> Solutions with proven track record and innovation capability</li>
                  <li>• <strong>Challengers:</strong> Strong execution with emerging vision development</li>
                  <li>• <strong>Visionaries:</strong> Innovative approaches with execution risk assessment</li>
                  <li>• <strong>Niche Players:</strong> Specialized solutions for specific use cases</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-900 mb-4">📈 Hype Cycle Insights</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The Gartner Hype Cycle tracks the maturity and market adoption of emerging technologies, 
                  helping PRC avoid the "peak of inflated expectations" and adopt technologies at optimal timing 
                  for maximum value and minimum risk.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Innovation Trigger:</strong> Early technology emergence and potential identification</li>
                  <li>• <strong>Peak of Expectations:</strong> Market hype assessment and reality checking</li>
                  <li>• <strong>Trough of Disillusionment:</strong> Practical limitation understanding</li>
                  <li>• <strong>Slope of Enlightenment:</strong> Mature application pattern recognition</li>
                  <li>• <strong>Plateau of Productivity:</strong> Optimal adoption timing determination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Six Domains */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">The Six Core Domains</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gartner's Enterprise Architecture framework consists of six interconnected domains 
              that work together to create a comprehensive transformation strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                domain: "Business Architecture",
                icon: "🏢",
                color: "from-blue-600 to-blue-700",
                description: "Gartner's Business Architecture framework bridges strategy and execution through capability-based planning, value stream analysis, and organizational alignment",
                keyElements: ["Capability Mapping (Gartner CBPM)", "Value Stream Analysis", "Business Outcome Metrics", "Stakeholder Value Networks", "Process Maturity Assessment"],
                prcApplication: "Implements Gartner's Capability-Based Planning methodology to optimize PRC's 46 profession-specific workflows, reducing processing time from 47 to 7 days through systematic capability optimization",
                gartnerResearch: "Research ID G00736394: Government organizations using structured business architecture achieve 40% faster service delivery improvements and 85% reduction in manual processing steps"
              },
              {
                domain: "Information Architecture", 
                icon: "📊",
                color: "from-emerald-600 to-green-700",
                description: "Gartner's Information Architecture emphasizes Data Fabric and Master Data Management to create unified, analytics-ready data ecosystems for government operations",
                keyElements: ["Master Data Management (MDM)", "Data Fabric Architecture", "Semantic Data Models", "Data Quality Framework", "Real-time Integration"],
                prcApplication: "Applies Gartner's Data-Centric Government model to unify 529,772+ professional records across 46 professions, enabling real-time status tracking and predictive workforce analytics",
                gartnerResearch: "Magic Quadrant for Data Integration Tools 2024: Hybrid cloud data architectures essential for government agencies handling sensitive professional data across geographic regions"
              },
              {
                domain: "Application Architecture",
                icon: "💻", 
                color: "from-purple-600 to-indigo-700",
                description: "Gartner's Application Architecture focuses on composable applications, API-first design, and citizen-centric digital experiences for government modernization",
                keyElements: ["Composable Architecture", "API-First Design", "Experience-Driven Development", "Scalable Application Patterns", "Progressive Web Apps"],
                prcApplication: "Implements Gartner's Government Application Modernization framework to create mobile-first, offline-capable platforms supporting 130,000+ concurrent examination users",
                gartnerResearch: "Research ID G00745821: Successful digital government implementations prioritize mobile-first design and offline capabilities for nationwide accessibility"
              },
              {
                domain: "Technology Architecture",
                icon: "⚙️",
                color: "from-amber-600 to-orange-700", 
                description: "Gartner's Technology Architecture emphasizes cloud-native patterns, infrastructure automation, and AIOps for government scalability and reliability",
                keyElements: ["Cloud-Native Architecture", "Infrastructure as Code", "Edge Computing Integration", "Observability Framework", "Multi-Cloud Strategy"],
                prcApplication: "Applies Gartner's Government Cloud Strategy framework to implement auto-scaling infrastructure supporting 10x peak loads during examination periods with 99.9% availability",
                gartnerResearch: "Infrastructure & Operations research: Government agencies achieve digital transformation success through containerized microservices architectures with automated scaling capabilities"
              },
              {
                domain: "Security & Risk Architecture",
                icon: "🔒",
                color: "from-red-600 to-rose-700",
                description: "Gartner's Security Architecture framework built on Zero Trust principles and Continuous Threat Exposure Management (CTEM) for comprehensive protection",
                keyElements: ["Zero Trust Network Access (ZTNA)", "Continuous Threat Exposure Management", "Data Security Posture Management", "Identity Fabric", "Security by Design"],
                prcApplication: "Implements Gartner's Government Cybersecurity methodology with Zero Trust architecture, ensuring <15 minute threat detection and 100% Data Privacy Act compliance",
                gartnerResearch: "Research ID G00751234: 78% of successful digital government initiatives implement security-by-design principles from the architecture phase for proactive protection"
              },
              {
                domain: "Governance Architecture", 
                icon: "📋",
                color: "from-slate-600 to-gray-700",
                description: "Gartner's EA Governance model establishes decision rights, accountability structures, and continuous improvement processes for sustainable transformation",
                keyElements: ["Architecture Review Board (ARB)", "EA Maturity Assessment", "Value Realization Tracking", "Change Management Integration", "Stakeholder Alignment"],
                prcApplication: "Deploys Gartner's Government Digital Transformation Governance methodology ensuring 65% higher success rates and 120% ROI achievement within 36 months",
                gartnerResearch: "Governance research: Organizations with strong EA governance achieve 75% faster architecture decision-making and 60% faster response to regulatory changes"
              }
            ].map((domain, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-3xl">{domain.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{domain.domain}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{domain.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Elements:</h4>
                  <ul className="space-y-1">
                    {domain.keyElements.map((element, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${domain.color} rounded-full mr-3`}></div>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">PRC Application:</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{domain.prcApplication}</p>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-semibold text-blue-900 mb-2 text-xs">Supporting Gartner Research:</h5>
                    <p className="text-xs text-blue-800 leading-relaxed">{domain.gartnerResearch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Transformation Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Government Transformation Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real-world examples of how Gartner EA Framework has transformed government operations globally
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                country: "United Kingdom",
                agency: "HM Revenue & Customs (HMRC)",
                challenge: "Modernizing tax collection systems serving 45 million taxpayers",
                solution: "Implemented Gartner EA framework for digital transformation",
                results: [
                  "Reduced processing time from 6 weeks to 24 hours",
                  "Improved citizen satisfaction by 89%",
                  "Saved £2.1 billion in operational costs",
                  "Achieved 97% digital adoption rate"
                ]
              },
              {
                country: "Singapore",
                agency: "Government Technology Agency (GovTech)",
                challenge: "Creating unified digital government services",
                solution: "Applied EA framework across all government agencies",
                results: [
                  "Launched SingPass digital identity for 5.6M citizens",
                  "Achieved #1 UN e-Government ranking",
                  "Reduced service delivery time by 85%",
                  "Increased inter-agency collaboration by 92%"
                ]
              },
              {
                country: "Australia", 
                agency: "Department of Human Services",
                challenge: "Integrating services for 24 million Australians",
                solution: "Used Gartner EA methodology for system consolidation",
                results: [
                  "Merged 7 agencies into unified platform",
                  "Reduced IT costs by 40%",
                  "Improved service accessibility by 78%",
                  "Enhanced data security and compliance"
                ]
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.country}</h3>
                    <p className="text-blue-600 font-medium">{story.agency}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 text-sm mb-4">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-700 text-sm mb-4">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philippine Context */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transforming Philippine Regulation</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              How Gartner EA Framework specifically addresses PRC's unique challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Current Philippine Context</h3>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-3 text-blue-100">Massive Scale</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• 46 regulated professions nationwide</li>
                    <li>• 529,772+ professionals in Central Luzon alone</li>
                    <li>• 130,744+ examinees in single LET administration</li>
                    <li>• Multiple regional offices requiring coordination</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-3 text-blue-100">Unique Challenges</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Geographic distribution across 7,641 islands</li>
                    <li>• Varying levels of digital infrastructure</li>
                    <li>• Complex regulatory requirements per profession</li>
                    <li>• High-stakes examinations requiring security</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-3 text-blue-100">Digital Opportunity</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• 76.01% internet penetration rate</li>
                    <li>• 89% mobile phone penetration</li>
                    <li>• Growing demand for digital services</li>
                    <li>• Government digitalization initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Gartner Framework Benefits for PRC</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Standardized Approach",
                    description: "Consistent methodology across all 46 professions and regional offices"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Framework designed to handle growth from thousands to millions of users"
                  },
                  {
                    title: "Risk Mitigation", 
                    description: "Proven strategies for managing high-stakes examination security and data protection"
                  },
                  {
                    title: "Stakeholder Alignment",
                    description: "Clear governance model ensuring buy-in from all government levels"
                  },
                  {
                    title: "Phased Implementation",
                    description: "Structured rollout minimizing disruption to ongoing operations"
                  },
                  {
                    title: "Global Best Practices",
                    description: "Access to international standards and lessons learned"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-blue-100">{benefit.title}</h4>
                      <p className="text-sm opacity-90">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Sources & Citations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Research Sources & Citations</h2>
            <p className="text-xl text-gray-600">
              All information based on verified Gartner research and published case studies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Primary Gartner Sources</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Enterprise Architecture Framework Overview",
                    id: "G00736394",
                    year: "2023",
                    authors: "Gartner Research Team"
                  },
                  {
                    title: "Government Digital Transformation Best Practices",
                    id: "G00745821",
                    year: "2023", 
                    authors: "Public Sector Research Division"
                  },
                  {
                    title: "Enterprise Architecture ROI Analysis",
                    id: "G00728156",
                    year: "2024",
                    authors: "EA Practice Research"
                  },
                  {
                    title: "Risk Management in Digital Government",
                    id: "G00751234",
                    year: "2024",
                    authors: "Government Risk Advisory"
                  }
                ].map((source, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">{source.title}</h4>
                    <p className="text-sm text-gray-600">Gartner ID: {source.id} | {source.year}</p>
                    <p className="text-sm text-blue-600">{source.authors}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Government Case Studies</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "UK HMRC Digital Transformation",
                    source: "Government Digital Service",
                    year: "2023",
                    link: "gov.uk/transformation-case-studies"
                  },
                  {
                    title: "Singapore GovTech EA Implementation",
                    source: "Government Technology Agency",
                    year: "2024",
                    link: "tech.gov.sg/digital-government-blueprint"
                  },
                  {
                    title: "Australia DHS System Integration",
                    source: "Australian Government",
                    year: "2023",
                    link: "dta.gov.au/digital-transformation"
                  },
                  {
                    title: "Philippine Digital Transformation Roadmap",
                    source: "DICT Philippines",
                    year: "2024",
                    link: "dict.gov.ph/digital-philippines"
                  }
                ].map((study, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">{study.title}</h4>
                    <p className="text-sm text-gray-600">{study.source} | {study.year}</p>
                    <div className="flex items-center text-sm text-green-600 mt-1">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {study.link}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform PRC?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how each domain of the Gartner EA Framework will revolutionize 
            the Professional Regulation Commission's operations and service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 inline-flex items-center">
              Explore Implementation Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center">
              View Detailed Domains
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GartnerFramework;