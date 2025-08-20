/**
 * Analytics Dashboard Component Setup
 * Phase 7: Visual Performance Monitoring Interface
 * Goal: Real-time SEO performance visualization
 */

// React Dashboard Components Structure
export const dashboardComponents = {
  // Main Dashboard Layout
  layout: {
    header: "KPI Overview Cards",
    sidebar: "Navigation & Time Period Selectors", 
    mainContent: "Interactive Charts & Data Tables",
    footer: "Last Updated & Data Source Attribution"
  },

  // KPI Cards for Quick Overview
  kpiCards: [
    {
      title: "Organic Traffic",
      metric: "Monthly Sessions",
      value: "dynamicValue",
      change: "percentageChange",
      trend: "chartSparkline",
      goalProgress: "progressBar",
      icon: "TrendingUpIcon"
    },
    {
      title: "Keyword Rankings", 
      metric: "Average Position",
      value: "averageRanking",
      change: "positionMovement",
      trend: "rankingSparkline",
      goalProgress: "targetProgress",
      icon: "SearchIcon"
    },
    {
      title: "Conversion Rate",
      metric: "Consultation Requests",
      value: "conversionPercentage",
      change: "conversionTrend", 
      trend: "conversionSparkline",
      goalProgress: "conversionGoal",
      icon: "UserCheckIcon"
    },
    {
      title: "Local Visibility",
      metric: "Local Pack Rankings",
      value: "localRankingScore",
      change: "localVisibilityChange",
      trend: "localSparkline", 
      goalProgress: "localGoalProgress",
      icon: "MapPinIcon"
    }
  ]
};

// Chart Configurations for Data Visualization
export const chartConfigurations = {
  // Organic Traffic Trend Chart
  organicTrafficChart: {
    type: "line",
    dataPoints: ["date", "organicSessions", "previousPeriod"],
    timeframe: "last90days", 
    annotations: [
      "contentPublishDates",
      "technicalUpdates",
      "linkBuildingCampaigns"
    ],
    yAxis: "sessions",
    xAxis: "date",
    colors: ["#10B981", "#6B7280"],
    interactivity: "hoverDetails + clickDrillDown"
  },

  // Keyword Ranking Movement Heatmap
  keywordHeatmap: {
    type: "heatmap",
    dataStructure: {
      xAxis: "keywords",
      yAxis: "dates", 
      colorScale: "rankingPosition",
      cellValue: "position"
    },
    colorScheme: {
      position1to3: "#10B981", // Green
      position4to10: "#F59E0B", // Yellow
      position11to20: "#EF4444", // Red
      notRanking: "#6B7280" // Gray
    },
    interactions: "clickForKeywordDetails"
  },

  // Conversion Funnel Visualization
  conversionFunnel: {
    type: "funnel",
    stages: [
      {
        name: "Organic Visitors",
        value: "monthlyOrganicSessions",
        dropoffRate: "bounceRate"
      },
      {
        name: "Service Page Views", 
        value: "servicePageViews",
        dropoffRate: "servicePageBounceRate"
      },
      {
        name: "Contact Page Views",
        value: "contactPageViews", 
        dropoffRate: "contactPageBounceRate"
      },
      {
        name: "Form Submissions",
        value: "consultationRequests",
        dropoffRate: "formAbandonmentRate"
      },
      {
        name: "Scheduled Consultations",
        value: "scheduledConsultations",
        conversionRate: "finalConversionRate"
      }
    ],
    colorGradient: ["#3B82F6", "#10B981"]
  },

  // Local Search Performance Radar Chart
  localPerformanceRadar: {
    type: "radar",
    metrics: [
      {
        label: "Local Pack Rankings",
        value: "averageLocalPosition",
        maxValue: 10
      },
      {
        label: "GMB Engagement",
        value: "gmbEngagementScore", 
        maxValue: 100
      },
      {
        label: "Citation Consistency",
        value: "citationConsistencyScore",
        maxValue: 100
      },
      {
        label: "Review Rating",
        value: "averageReviewRating",
        maxValue: 5
      },
      {
        label: "Local Backlinks",
        value: "localBacklinkScore",
        maxValue: 100
      }
    ],
    fillColor: "rgba(59, 130, 246, 0.2)",
    borderColor: "#3B82F6"
  }
};

// Real-Time Data Integration Points
export const dataIntegrationEndpoints = {
  // Google Analytics 4 Integration
  ga4Integration: {
    apiEndpoint: "https://analyticsdata.googleapis.com/v1beta/properties/{propertyId}:runReport",
    authMethod: "OAuth2 + Service Account",
    dataRefreshRate: "every 15 minutes",
    cachedMetrics: [
      "activeUsers",
      "sessions", 
      "sessionDuration",
      "bounceRate",
      "conversions",
      "conversionRate"
    ],
    realTimeEndpoint: "https://analyticsdata.googleapis.com/v1beta/properties/{propertyId}:runRealtimeReport"
  },

  // Search Console Integration  
  searchConsoleIntegration: {
    apiEndpoint: "https://searchconsole.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query",
    authMethod: "OAuth2",
    dataRefreshRate: "daily (Google limitation)",
    metrics: [
      "impressions",
      "clicks", 
      "ctr",
      "position"
    ],
    dimensions: ["query", "page", "device", "country"]
  },

  // Local Ranking API Integration
  localRankingApi: {
    provider: "BrightLocal or LocalFalcon",
    apiEndpoint: "provider-specific",
    dataRefreshRate: "weekly",
    trackingGrid: [
      {
        location: "Annandale, VA",
        coordinates: "38.8303, -77.1963"
      },
      {
        location: "Arlington, VA", 
        coordinates: "38.8816, -77.0910"
      },
      {
        location: "Alexandria, VA",
        coordinates: "38.8048, -77.0469"
      }
    ]
  },

  // GMB Insights Integration
  gmbIntegration: {
    apiEndpoint: "https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/insights",
    authMethod: "OAuth2",
    dataRefreshRate: "daily",
    metrics: [
      "QUERIES_DIRECT",
      "QUERIES_INDIRECT", 
      "VIEWS_MAPS",
      "VIEWS_SEARCH",
      "ACTIONS_WEBSITE",
      "ACTIONS_PHONE",
      "ACTIONS_DRIVING_DIRECTIONS"
    ]
  }
};

// Alert System Configuration
export const alertSystemConfig = {
  // Critical Performance Alerts
  criticalAlerts: [
    {
      alertName: "Organic Traffic Drop",
      condition: "organicTraffic < (previous7DayAverage * 0.8)",
      severity: "high",
      notificationMethod: ["email", "SMS"],
      recipients: ["business-owner@inkmugi.com"],
      actionItems: [
        "Check Google Search Console for manual actions",
        "Verify website accessibility and loading speed",
        "Review recent content or technical changes"
      ]
    },
    {
      alertName: "Keyword Ranking Drop",
      condition: "primaryKeywordPosition > (previousPosition + 5)",
      severity: "medium",
      notificationMethod: ["email"],
      recipients: ["seo-team@inkmugi.com"],
      actionItems: [
        "Analyze competitor content changes",
        "Review on-page optimization",
        "Check backlink profile changes"
      ]
    },
    {
      alertName: "Conversion Rate Drop",
      condition: "conversionRate < (previous30DayAverage * 0.7)",
      severity: "high",
      notificationMethod: ["email", "SMS"],
      recipients: ["business-owner@inkmugi.com"],
      actionItems: [
        "Test contact form functionality",
        "Review user experience changes",
        "Analyze traffic quality and sources"
      ]
    }
  ],

  // Opportunity Alerts
  opportunityAlerts: [
    {
      alertName: "New Ranking Opportunity",
      condition: "keywordImpressions > 1000 AND averagePosition BETWEEN 11 AND 20",
      severity: "low",
      notificationMethod: ["email"],
      actionItems: [
        "Optimize content for identified keyword",
        "Build targeted backlinks for keyword",
        "Improve on-page SEO signals"
      ]
    },
    {
      alertName: "Featured Snippet Opportunity",
      condition: "keywordPosition BETWEEN 1 AND 5 AND noFeaturedSnippet = true",
      severity: "medium", 
      notificationMethod: ["email"],
      actionItems: [
        "Format content for featured snippet optimization",
        "Add structured data markup",
        "Create comprehensive answer content"
      ]
    }
  ]
};

// Dashboard Export & Sharing Options
export const dashboardSharing = {
  // Automated Report Generation
  reportGeneration: {
    executiveReport: {
      schedule: "monthly",
      format: "PDF",
      recipients: ["business-owner@inkmugi.com"],
      content: [
        "Executive summary with key metrics",
        "Goal progress visualization", 
        "ROI analysis and recommendations",
        "Competitive position assessment"
      ]
    },
    
    tacticalReport: {
      schedule: "weekly",
      format: "PDF + CSV data",
      recipients: ["marketing-team@inkmugi.com"],
      content: [
        "Detailed performance metrics",
        "Keyword ranking changes",
        "Content performance analysis",
        "Technical SEO health check"
      ]
    }
  },

  // Live Dashboard Sharing
  liveDashboardAccess: {
    publicDashboard: {
      url: "https://inkmugi.com/seo-dashboard",
      accessLevel: "view-only",
      metricsShown: [
        "organic traffic trends",
        "keyword ranking progress", 
        "local search visibility",
        "conversion performance"
      ],
      refreshRate: "hourly"
    },
    
    internalDashboard: {
      accessLevel: "full-access",
      features: [
        "real-time data updates",
        "custom date range selection",
        "data export capabilities",
        "alert configuration access"
      ]
    }
  }
};

export default {
  dashboardComponents,
  chartConfigurations, 
  dataIntegrationEndpoints,
  alertSystemConfig,
  dashboardSharing
};
