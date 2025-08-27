import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Visualizer AI",
    "one_liner": "Transform smart contracts into intuitive visual diagrams to enhance understanding and security.",
    "why_now": "With blockchain adoption surging, accessibility of smart contracts to non-technical users is crucial.",
    "novel_mechanism": "Utilizing AI-driven graph theory to present complex contract logic visually.",
    "ai_stack": [
      "GPT",
      "Embeddings",
      "Vision"
    ],
    "edge_use_cases": [
      "Training new developers",
      "Investor education",
      "Compliance visualization"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic diagram generation",
        "User input for contracts",
        "Export options to standard formats"
      ],
      "tools": [
        "React",
        "Firebase",
        "Chart.js"
      ],
      "data_bootstrap": [
        "public dataset with sample contracts",
        "synthetic visual outputs via LLM"
      ],
      "risk": [
        "Understanding complexity might yield incorrect visualizations",
        "User misinterpretation of diagrams"
      ],
      "mitigation": [
        "Implement expert review for initial outputs",
        "Incorporate user feedback loops to refine accuracy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Visual demos of contract simplification",
        "Comparative complexity before/after"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic visualizations",
        "pro": "$29/month for advanced features",
        "business": "$199/month for team access and custom integrations"
      }
    },
    "moat": [
      "User-friendly interface locks in educational institutions",
      "Unique visualization engine attracts compliance demand"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "Addresses gaps in user comprehension and engagement, unlike existing text-based tools."
  },
  {
    "title": "Decentralized Audit Feedback Loop",
    "one_liner": "Crowdsourced vulnerability tracking for smart contracts integrated with an AI assistant.",
    "why_now": "Growing need for transparent and real-time updates on smart contract security threats.",
    "novel_mechanism": "Leverages decentralized technology to gamify user contributions and enhance vulnerability databases.",
    "ai_stack": [
      "Agents",
      "RAG"
    ],
    "edge_use_cases": [
      "Real-time alerts for high-risk contracts",
      "Community ranking of contracts by safety metrics"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic community input system",
        "AI-driven alert mechanism",
        "Feedback analytics dashboard"
      ],
      "tools": [
        "Node.js",
        "IPFS",
        "Discord"
      ],
      "data_bootstrap": [
        "Leverage existing community-driven forums for initial data",
        "Incorporate simulation of threat models"
      ],
      "risk": [
        "Potential for misinformation from users",
        "Scalability of user input"
      ],
      "mitigation": [
        "Establish verification processes for input",
        "Use reputation scoring to elevate trustworthy contributors"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo of alerts in response to recent breaches",
        "Community gamification showcase"
      ],
      "channels": [
        "Telegram",
        "Discord",
        "Medium"
      ],
      "pricing": {
        "free": "Access to basic community features",
        "pro": "$49/month for premium alerts and customization",
        "business": "$299/month with extended team access and reporting tools"
      }
    },
    "moat": [
      "Community-driven validation ensures continuous growth",
      "Possible integration with existing digital wallets"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 31,
    "reasoning": "Combines the strengths of community engagement and real-time AI analytics for unprecedented security insights."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}