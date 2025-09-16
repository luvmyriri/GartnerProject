export const prcStats = {
  regulatedProfessions: 46,
  centralLuzonProfessionals: 529772,
  letMarch2024: {
    totalExaminees: 130744,
    totalPassers: 71429,
    overallPassRate: 54.63,
    elementary: {
      examinees: 44764,
      passers: 20890,
      passRate: 46.67
    },
    secondary: {
      examinees: 85980,
      passers: 50539,
      passRate: 58.78
    }
  },
  letSeptember2024: {
    totalExaminees: 129928,
    totalPassers: 68900,
    elementary: {
      examinees: 44002,
      passers: 20025,
      passRate: 45.51
    },
    secondary: {
      examinees: 85926,
      passers: 48875,
      passRate: 56.88
    }
  },
  pleMarch2025: {
    examinees: 3827,
    passers: 1901,
    passRate: 49.7
  },
  healthProfessionalsActive: {
    doctors: {
      registered: 159283,
      active: 95039,
      activeRate: 59.7
    },
    nurses: {
      registered: 951105,
      active: 509297,
      activeRate: 53.55
    },
    midwives: {
      registered: 182300,
      active: 64475,
      activeRate: 38.1
    }
  }
};

export const gartnerDomains = [
  {
    id: 'business',
    name: 'Business Architecture',
    icon: '🏢',
    description: 'Define KPIs, business capabilities, and stakeholder alignment for PRC transformation',
    details: [
      'Reduce LET result release time to 20-30 working days',
      'Improve first-time pass rates by 5-10 percentage points',
      'Integrated exam & licensure service capabilities',
      'Mobile services for remote/rural areas',
      'Stakeholder alignment: examinees, professionals, government agencies'
    ]
  },
  {
    id: 'information',
    name: 'Information Architecture',
    icon: '📊',
    description: 'Create single source of truth for all 46 regulated professions with real-time tracking',
    details: [
      'Master database of all regulated professions',
      'Real-time status tracking (active/inactive/expired)',
      'Standardized data formats for exam results',
      'CPD completion tracking',
      'Exam history and renewal cycles management'
    ]
  },
  {
    id: 'application',
    name: 'Application Architecture',
    icon: '💻',
    description: 'Build unified systems for exam registration, licensing, and professional services',
    details: [
      'Online exam registration and payment systems',
      'Automated result publication and notifications',
      'License renewal and verification portals',
      'Mobile app for professionals',
      'Automated workflow for repeaters and scheduling'
    ]
  },
  {
    id: 'technology',
    name: 'Technology Architecture',
    icon: '⚙️',
    description: 'Cloud infrastructure to handle high-volume exam cycles and nationwide access',
    details: [
      'Scalable cloud infrastructure for exam results',
      'Distributed regional service centers',
      'Two-factor authentication and biometric verification',
      'Data backup and disaster recovery plans',
      'Mobile/rural connectivity support'
    ]
  },
  {
    id: 'security',
    name: 'Security & Risk Architecture',
    icon: '🔒',
    description: 'Protect sensitive data and ensure secure exam processes with compliance',
    details: [
      'Data Privacy Act compliance',
      'Secure exam result handling',
      'Professional data protection',
      'Fraud prevention in examinations',
      'Risk management for system downtime'
    ]
  },
  {
    id: 'governance',
    name: 'Governance Architecture',
    icon: '📋',
    description: 'Establish governance framework for sustainable digital transformation',
    details: [
      'EA governance board with PRC leadership',
      'Inter-agency cooperation policies (CHED, DOH, LGUs)',
      'Performance metrics and quarterly reporting',
      'Budget planning for upgrades and training',
      'Change control and version management'
    ]
  }
];

export const implementationPhases = [
  {
    phase: 1,
    name: 'Quick Wins',
    timeframe: '6-12 months',
    actions: [
      'Upgrade exam registration portal for peak loads',
      'Automate result publication and notifications',
      'Improve online license renewal with digital payments',
      'Begin centralizing exam and license records',
      'Implement chat support and FAQ systems'
    ],
    benefits: [
      'Faster LET/PLE result release',
      'Reduced bottlenecks during renewal',
      'Less backlog and improved satisfaction'
    ]
  },
  {
    phase: 2,
    name: 'Mid-term Integration',
    timeframe: '12-24 months',
    actions: [
      'Fully integrated digital platform for all PRC services',
      'Deploy systematic mobile service caravans',
      'Enhanced identity verification (2FA, biometrics)',
      'Stronger data governance and quality controls',
      'Cloud migration and system redundancy'
    ],
    benefits: [
      'Data consistency and higher uptime',
      'Reduced inactive licensee issues',
      'Improved reach to remote areas',
      'Enhanced trust in PRC services'
    ]
  },
  {
    phase: 3,
    name: 'Long-term Excellence',
    timeframe: '24-36+ months',
    actions: [
      'Predictive analytics for exam trends',
      'Blockchain certificates and secure verification',
      'National coverage mobile-friendly apps',
      'Inter-agency integration (CHED, DOH, DepEd)',
      'Continuous improvement and UX research'
    ],
    benefits: [
      'Sustainable and scalable PRC operations',
      'Better workforce planning alignment',
      'Reduced process times and inactive rates',
      'Enhanced professional utilization'
    ]
  }
];

export const kpiMetrics = [
  {
    metric: 'LET Result Release Time',
    baseline: '47 working days',
    target: '20-30 working days',
    improvement: '35-57%'
  },
  {
    metric: 'LET Pass Rate (Elementary)',
    baseline: '46.7%',
    target: '51-57%',
    improvement: '5-10 pts'
  },
  {
    metric: 'LET Pass Rate (Secondary)',
    baseline: '58.8%',
    target: '64-69%',
    improvement: '5-10 pts'
  },
  {
    metric: 'PLE Pass Rate',
    baseline: '49.7%',
    target: '60%+',
    improvement: '10+ pts'
  },
  {
    metric: 'Active Doctors Rate',
    baseline: '59.7%',
    target: '70%+',
    improvement: '10+ pts'
  },
  {
    metric: 'Active Nurses Rate',
    baseline: '53.6%',
    target: '65%+',
    improvement: '11+ pts'
  },
  {
    metric: 'Active Midwives Rate',
    baseline: '38.1%',
    target: '50%+',
    improvement: '12+ pts'
  },
  {
    metric: 'System Availability',
    baseline: 'Variable',
    target: '99%+ uptime',
    improvement: 'Consistent'
  }
];

export const risks = [
  {
    risk: 'Resistance to Change',
    impact: 'Delay adoption and continued manual workarounds',
    mitigation: 'Change management, training, stakeholder engagement, pilot programs'
  },
  {
    risk: 'Data Privacy/Security Breach',
    impact: 'Loss of public trust and legal penalties',
    mitigation: 'Strong security architecture, encryption, compliance audits'
  },
  {
    risk: 'Technology Failure During Peaks',
    impact: 'Service outages and public dissatisfaction',
    mitigation: 'Infrastructure scaling, cloud solutions, load testing, backup plans'
  },
  {
    risk: 'Unequal Access',
    impact: 'Remote regions disadvantaged',
    mitigation: 'Mobile service caravans, regional offices, low-bandwidth tools'
  },
  {
    risk: 'Budget Constraints',
    impact: 'Incomplete implementation and delays',
    mitigation: 'Phased investments, prioritization, external funding'
  }
];