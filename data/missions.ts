export interface Mission {
    id: string;
    slug: string;

    title: string;
    subtitle: string;
    category: string;

    status: "ONLINE" | "SUCCESS" | "DEPLOYED";

    accent: string;

    year: string;

    featured: boolean;

    description: string;

    technologies: string[];

    highlights: string[];

    metrics: {
        label: string;
        value: string;
    }[];

    thumbnail: string;
    coverImage: string;

    live: string;
    github: string;
}

const missions: Mission[] = [
    {
        id: "MISSION-001",
        slug: "docusphere",

        title: "DocuSphere",

        subtitle: "AI Document Intelligence Hub",

        category: "AI Platform",

        status: "ONLINE",

        accent: "#06B6D4",

        year: "2026",

        featured: true,

        description:
            "AI-powered multilingual document intelligence platform built for Kochi Metro Rail Ltd. using Gemini, Pinecone and FastAPI.",

        technologies: [
            "Next.js",
            "FastAPI",
            "Gemini",
            "Pinecone",
            "PostgreSQL",
            "Supabase",
        ],

        highlights: [
            "Built for Kochi Metro Rail Ltd.",
            "Multilingual RAG",
            "OCR Pipeline",
            "Role Based Access",
            "Document Intelligence",
        ],

        metrics: [
            {
                label: "REST APIs",
                value: "10+",
            },
            {
                label: "Roles",
                value: "5+",
            },
            {
                label: "Languages",
                value: "Multi",
            },
            {
                label: "Client",
                value: "KMRL",
            },
        ],

        thumbnail: "/projects/docusphere/thumb.png",

        coverImage: "/projects/docusphere/cover.png",

        live: "https://kochi-metro-document.vercel.app/",

        github: "https://github.com/Tanmay24-ya/Kochi-Metro",

    },

    {
        id: "MISSION-002",

        slug: "purplle-store-intelligence",

        title: "Purplle Store Intelligence",

        subtitle: "Retail Analytics Engine",

        category: "Computer Vision",

        status: "SUCCESS",

        accent: "#A855F7",

        year: "2026",

        featured: true,

        description:
            "Computer vision retail analytics platform using YOLOv8 and ByteTrack for customer movement, heatmaps and intelligent insights.",

        technologies: [
            "YOLOv8",
            "ByteTrack",
            "FastAPI",
            "MongoDB",
            "Docker",
        ],

        highlights: [
            "Retail Heatmaps",
            "Customer Tracking",
            "Entry Exit Analytics",
            "Zone Analytics",
            "AI Recommendations",
        ],

        metrics: [
            {
                label: "FPS",
                value: "28",
            },
            {
                label: "Accuracy",
                value: "94%",
            },
            {
                label: "Streams",
                value: "3",
            },
            {
                label: "Events",
                value: "18K+",
            },
        ],

        thumbnail: "/projects/purplle/thumb.png",

        coverImage: "/projects/purplle/cover.png",

        live: "https://store-intelligence-ta.streamlit.app/",

        github: "https://github.com/Tanmay24-ya/Store-Intelligence",


    },

    {
        id: "MISSION-003",

        slug: "jobconnect",

        title: "JobConnect",

        subtitle: "AI Interview Assistant",

        category: "AI SaaS",

        status: "ONLINE",

        accent: "#3B82F6",

        year: "2026",

        featured: false,

        description:
            "AI-powered interview preparation platform featuring Resume–JD matching, voice interviews and personalized interview generation.",

        technologies: [
            "Next.js",
            "Firebase",
            "Gemini",
            "Vapi",
            "TypeScript",
        ],

        highlights: [
            "Resume Matcher",
            "Voice AI",
            "Interview Generator",
            "Realtime Chat",
            "Student Platform",
        ],

        metrics: [
            {
                label: "Voice AI",
                value: "Live",
            },
            {
                label: "Resume Match",
                value: "AI",
            },
            {
                label: "Deploy",
                value: "Vercel",
            },
            {
                label: "Realtime",
                value: "Yes",
            },
        ],

        thumbnail: "/projects/jobconnect/thumb.png",

        coverImage: "/projects/jobconnect/cover.png",

        live: "https://job-connect-roan.vercel.app/",

        github: "https://github.com/Tanmay24-ya/JobConnect",


    },

    {
        id: "MISSION-004",

        slug: "verifact",

        title: "VeriFact",

        subtitle: "AI Misinformation Detector",

        category: "AI Research",

        status: "SUCCESS",

        accent: "#10B981",

        year: "2025",

        featured: false,

        description:
            "AI-driven misinformation detection platform verifying text, images, videos and URLs using LangChain and Google Cloud.",

        technologies: [
            "LangChain",
            "FastAPI",
            "Gemini",
            "Docker",
            "Google Cloud",
        ],

        highlights: [
            "Top 15 / 72K Teams",
            "Fact Checking",
            "Chatbot",
            "Credibility Score",
            "Cloud Run",
        ],

        metrics: [
            {
                label: "Hackathon",
                value: "Top 15",
            },
            {
                label: "Teams",
                value: "72K+",
            },
            {
                label: "Score",
                value: "0-100",
            },
            {
                label: "Cloud",
                value: "GCP",
            },
        ],

        thumbnail: "/projects/verifact/thumb.png",

        coverImage: "/projects/verifact/cover.png",

        live: "https://veri-fact-five.vercel.app/",

        github: "https://github.com/Tanmay24-ya/VeriFact",

    },

    {
        id: "MISSION-005",

        slug: "findash",

        title: "FinDash",

        subtitle: "Financial Dashboard",

        category: "FinTech",

        status: "DEPLOYED",

        accent: "#F59E0B",

        year: "2026",

        featured: false,

        description:
            "Modern financial dashboard for transaction management, budgeting and analytics using Prisma and PostgreSQL.",

        technologies: [
            "Node.js",
            "Prisma",
            "PostgreSQL",
            "JWT",
            "Tailwind",
        ],

        highlights: [
            "Transaction Tracking",
            "Budget Planning",
            "JWT Auth",
            "Analytics",
            "Responsive UI",
        ],

        metrics: [
            {
                label: "Database",
                value: "Postgres",
            },
            {
                label: "Auth",
                value: "JWT",
            },
            {
                label: "Charts",
                value: "Live",
            },
            {
                label: "Analytics",
                value: "Realtime",
            },
        ],

        thumbnail: "/projects/findash/thumb.png",

        coverImage: "/projects/findash/cover.png",

        live: "https://fin-dash-black-chi.vercel.app/",

        github: "https://github.com/Tanmay24-ya/FinDash",

    },

    {
        id: "MISSION-006",

        slug: "identity-reconciliation",

        title: "Identity Reconciliation",

        subtitle: "Backend Engineering",

        category: "Backend System",

        status: "ONLINE",

        accent: "#22C55E",

        year: "2026",

        featured: false,

        description:
            "Production-ready identity reconciliation backend built using Express, Prisma, Neon PostgreSQL and Docker.",

        technologies: [
            "Node.js",
            "Express",
            "Prisma",
            "Neon",
            "Docker",
        ],

        highlights: [
            "Dockerized",
            "REST APIs",
            "Prisma ORM",
            "Neon PostgreSQL",
            "Production Deployment",
        ],

        metrics: [
            {
                label: "API",
                value: "REST",
            },
            {
                label: "ORM",
                value: "Prisma",
            },
            {
                label: "Deploy",
                value: "Render",
            },
            {
                label: "Database",
                value: "Neon",
            },
        ],

        thumbnail: "/projects/identity/thumb.png",

        coverImage: "/projects/identity/cover.png",

        live: "https://identity-reconciliation-v663.onrender.com",

        github: "https://github.com/Tanmay24-ya/identity-reconciliation",


    },

    {
        id: "MISSION-007",

        slug: "queue-flow",

        title: "QueueFlow",

        subtitle: "Queue Management System",

        category: "Real-Time System",

        status: "ONLINE",

        accent: "#EF4444",

        year: "2026",

        featured: false,

        description:
            "Modern queue management platform with authentication, live queue updates and analytics dashboard.",

        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Socket.io",
            "JWT",
        ],

        highlights: [
            "Realtime Queue",
            "Analytics Dashboard",
            "Authentication",
            "Role Based Access",
            "Live Updates",
        ],

        metrics: [
            {
                label: "Realtime",
                value: "Socket.io",
            },
            {
                label: "Auth",
                value: "JWT",
            },
            {
                label: "Dashboard",
                value: "Yes",
            },
            {
                label: "Deploy",
                value: "Vercel",
            },
        ],

        thumbnail: "/projects/queueflow/thumb.png",

        coverImage: "/projects/queueflow/cover.png",

        live: "https://queue-flow-eta.vercel.app/",

        github: "https://github.com/Tanmay24-ya/Queue_Flow",


    },
];

export default missions;