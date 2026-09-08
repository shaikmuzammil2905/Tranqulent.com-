export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  image: string;
  cardBgImage?: string;
  isFlagship?: boolean;
  services: string[];
  serviceDeliverables: string[];
  howWeHelp: string[];
  iconType: "chip" | "embedded" | "software" | "consulting";
}

export interface IndustryItem {
  id: string;
  title: string;
  tag: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  description: string;
  image: string;
  capabilities: string[];
}

export interface AdditionalIndustryItem {
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  fullOverview: string;
  capabilities: string[];
}

export interface FlowStepItem {
  label: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
}

export interface WhyPillarItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullOverview: string;
  keyStrengths: string[];
}

export interface AboutExpertiseItem {
  name: string;
  slug: string;
  desc: string;
  image: string;
  fullOverview: string;
  capabilities: string[];
}

export interface AboutApproachItem {
  title: string;
  desc: string;
  image: string;
  fullOverview: string;
  keyPrinciples: string[];
}

export const CAPABILITIES_DATA: ServiceItem[] = [
  {
    id: "semiconductor-engineering",
    slug: "semiconductor-engineering",
    number: "01",
    title: "Semiconductor Engineering",
    shortDescription: "Comprehensive silicon design, verification, and implementation solutions from architecture to tape-out.",
    fullOverview: "Tranquelent delivers end-to-end semiconductor design and engineering services across advanced technology nodes. Our engineering teams bring deep specialization in ASIC/SoC development, front-end design, advanced verification methodologies (UVM/SystemVerilog), and physical design closure.",
    image: "/images/service-semiconductor.jpg",
    cardBgImage: "/images/card-bg-semiconductor.jpg",
    isFlagship: true,
    iconType: "chip",
    services: [
      "VLSI Engineering",
      "ASIC / SoC Engineering",
      "RTL Design",
      "Functional Verification",
      "Design Verification",
      "Physical Design",
      "Semiconductor Design Support",
      "Silicon Engineering Support",
    ],
    serviceDeliverables: [
      "Full-flow RTL-to-GDSII physical implementation & STA closure",
      "Advanced UVM testbench architecture & constrained-random verification",
      "Low-power multi-voltage UPF design & sign-off analysis",
      "Post-silicon validation, lab bring-up & foundry PDK integration",
    ],
    howWeHelp: [
      "Proven domain experts in advanced UVM verification and formal proofs",
      "Comprehensive RTL design, synthesis, and STA timing closure",
      "Physical design and DFT implementation with leading foundry PDKs",
      "Seamless integration as an extension to your internal silicon engineering team",
    ],
  },
  {
    id: "embedded-hardware-engineering",
    slug: "embedded-hardware-engineering",
    number: "02",
    title: "Embedded & Hardware Engineering",
    shortDescription: "Full-lifecycle hardware and firmware engineering for intelligent, connected, and mission-critical devices.",
    fullOverview: "We bridge the gap between silicon and software by designing robust embedded architectures, custom board support packages, real-time firmware, and FPGA accelerators engineered for extreme reliability and high performance.",
    image: "/images/service-embedded.jpg",
    isFlagship: false,
    iconType: "embedded",
    services: [
      "Embedded Software",
      "Firmware",
      "RTOS",
      "FPGA Engineering",
      "Digital Hardware",
      "Electronics Engineering",
      "System Integration",
      "Device & Platform Engineering",
      "Connected/Intelligent Systems",
    ],
    serviceDeliverables: [
      "Custom BSP, device driver development & RTOS/Linux kernel optimization",
      "High-speed digital PCB architecture, schematics & signal integrity analysis",
      "FPGA synthesis, DSP acceleration pipelines & IP integration",
      "Secure boot, cryptographic key management & robust FOTA deployment",
    ],
    howWeHelp: [
      "Extensive RTOS (FreeRTOS, Zephyr, VxWorks) and Bare-Metal expertise",
      "High-speed digital PCB design, schematic capture, and signal integrity analysis",
      "FPGA synthesis, DSP implementation, and hardware acceleration pipelines",
      "Complete device driver development and Linux kernel customization",
    ],
  },
  {
    id: "software-digital-engineering",
    slug: "software-digital-engineering",
    number: "03",
    title: "Software & Digital Engineering",
    shortDescription: "Scalable cloud architectures, AI pipelines, modern applications, and digital platforms.",
    fullOverview: "Our software engineering discipline helps technology enterprises translate complex device and sensor data into intelligent cloud applications, automated pipelines, and responsive digital ecosystems.",
    image: "/images/service-software.jpg",
    cardBgImage: "/images/card-bg-software.jpg",
    isFlagship: false,
    iconType: "software",
    services: [
      "Software Engineering",
      "Application Development",
      "Cloud Engineering",
      "AI & Data Engineering",
      "DevOps & Automation",
      "Digital Engineering",
      "Platform Modernization",
      "System Integration",
    ],
    serviceDeliverables: [
      "Cloud-native microservices architecture on AWS, Azure & GCP",
      "Real-time streaming telemetry ingestion & distributed data engineering",
      "Enterprise AI/ML model deployment, inference optimization & MLOps",
      "End-to-end DevSecOps automation, CI/CD pipelines & IaC infrastructure",
    ],
    howWeHelp: [
      "Enterprise cloud architectures on AWS, Azure, and Google Cloud",
      "Real-time streaming data ingestion and distributed analytics",
      "Modern React/Next.js/TypeScript frontend and scalable API backends",
      "Automated infrastructure-as-code and container orchestration",
    ],
  },
  {
    id: "engineering-technology-consulting",
    slug: "engineering-technology-consulting",
    number: "04",
    title: "Engineering & Technology Consulting",
    shortDescription: "Strategic technical advisory, architecture modernization, and engineering transformation.",
    fullOverview: "Tranquelent partners with CTOs, VP of Engineering, and technical leaders to formulate actionable roadmaps, assess architectural feasibility, evaluate new technology stacks, and execute organizational transformation.",
    image: "/images/service-consulting.jpg",
    isFlagship: false,
    iconType: "consulting",
    services: [
      "Technology Strategy",
      "System Architecture",
      "Solution Architecture",
      "Engineering Advisory",
      "Technology Modernization",
      "Engineering Transformation",
      "Technical Assessment",
      "Technology Roadmaps",
    ],
    serviceDeliverables: [
      "Comprehensive architectural feasibility studies & technology roadmaps",
      "Hardware-software partitioning analysis for custom silicon vs. off-the-shelf",
      "Engineering velocity optimization & modern toolchain integration",
      "Technical risk due diligence, quality frameworks & IP governance",
    ],
    howWeHelp: [
      "Independent, rigorous architectural assessments and feasibility studies",
      "Pragmatic technology roadmaps backed by deep semiconductor & software expertise",
      "Engineering process modernization and quality framework implementation",
      "Executive advisory for silicon and hardware-software system roadmaps",
    ],
  },
];

export const WHO_WE_ARE_FLOW: FlowStepItem[] = [
  {
    label: "Silicon",
    slug: "silicon",
    title: "Silicon & Semiconductor Design",
    subtitle: "End-to-end ASIC, SoC, and VLSI engineering from specification to tape-out.",
    image: "/images/popup-silicon.jpg",
    description: "Our silicon engineering teams partner with leading semiconductor innovators to develop advanced node ASICs, custom SoCs, and FPGA accelerators. We excel at complex digital RTL design, analog mixed-signal integration, low-power optimization, and rigorous pre-silicon verification closure.",
    capabilities: [
      "Advanced node design at sub-5nm and 3nm",
      "Comprehensive UVM verification & formal proofs",
      "Full-flow RTL synthesis, STA timing & physical design",
      "DFT architecture, BIST & post-silicon bring-up",
    ],
    deliverables: [
      "Architecture specifications & microarchitecture partitioning",
      "Complete verified RTL suites & testbench environments",
      "Foundry-ready GDSII/OASIS clean tape-out delivery",
      "Post-silicon validation test vectors & lab diagnostics",
    ],
  },
  {
    label: "Systems",
    slug: "systems",
    title: "Systems & Hardware Platforms",
    subtitle: "High-performance board design, hardware-software co-design, and system integration.",
    image: "/images/popup-systems.jpg",
    description: "We bridge physical silicon with intelligent operations by designing deterministic hardware platforms, multi-gigabit backplanes, custom carrier boards, and mission-critical embedded systems engineered for extreme thermal, mechanical, and electrical environments.",
    capabilities: [
      "High-speed multi-layer PCB layout & signal integrity",
      "Hardware-software co-verification & platform bring-up",
      "Ruggedized industrial & automotive compute architectures",
      "Sensor fusion, power management & EMI/EMC compliance",
    ],
    deliverables: [
      "Schematics, BOM optimization & PCB manufacturing packages",
      "Hardware prototypes & environmental stress qualification",
      "Deterministic timing budgets & thermal dissipation models",
      "Turnkey hardware integration & regulatory certifications",
    ],
  },
  {
    label: "Software",
    slug: "software",
    title: "Software & Digital Intelligence",
    subtitle: "Low-level firmware, real-time operating systems, and intelligent digital platforms.",
    image: "/images/popup-software.jpg",
    description: "From bare-metal bootloaders and deterministic RTOS kernels to high-throughput cloud platforms and AI inference engines, our software engineering discipline crafts robust, secure, and maintainable software stacks that bring hardware to life.",
    capabilities: [
      "RTOS (FreeRTOS, Zephyr, VxWorks) & Linux kernel porting",
      "Edge AI deployment, computer vision & neural accelerators",
      "Cloud-native telemetry platforms & distributed microservices",
      "Robust cybersecurity, secure boot & FOTA pipelines",
    ],
    deliverables: [
      "Production-grade firmware, device drivers & BSPs",
      "Cloud ingestion engines & real-time analytics dashboards",
      "Optimized AI/ML models running on edge processors",
      "Comprehensive test automation & CI/CD software pipelines",
    ],
  },
  {
    label: "Strategy",
    slug: "strategy",
    title: "Technology Strategy & Advisory",
    subtitle: "Visionary engineering roadmaps, architecture trade-offs, and execution models.",
    image: "/images/popup-strategy.jpg",
    description: "We guide engineering leaders, CTOs, and product creators through high-stakes technology decisions. We evaluate architectural trade-offs, identify technology risks, design multi-year roadmaps, and structure scalable global engineering teams.",
    capabilities: [
      "Silicon vs. software system partitioning & feasibility",
      "Technology stack evaluations & modernization roadmaps",
      "Engineering organizational design & velocity acceleration",
      "IP protection strategies & compliance governance",
    ],
    deliverables: [
      "Actionable multi-phase technology architecture roadmaps",
      "Detailed trade-off analysis (PPA, BOM cost, time-to-market)",
      "Technical due diligence & risk mitigation reports",
      "Target operating model & dedicated delivery governance",
    ],
  },
];

export const WHY_TRANQUELENT_PILLARS: WhyPillarItem[] = [
  {
    number: "01",
    title: "Engineering Expertise",
    description: "Deep technical knowledge across silicon, systems, software and digital.",
    icon: "expertise",
    image: "/images/popup-expertise.jpg",
    fullOverview: "Tranquelent brings together elite engineers with multi-decade experience in semiconductor design, embedded firmware, systems engineering, and modern cloud platforms. We work at the bleeding edge of sub-5nm silicon, high-speed mixed-signal boards, deterministic firmware, and scalable cloud architectures.",
    keyStrengths: [
      "Specialized teams in ASIC/SoC, FPGA, RTOS, and Cloud/AI engineering",
      "Rigorous adherence to premier engineering standards & methodologies",
      "Continuous mastery of leading-edge EDA tools, PDKs, and frameworks",
      "Direct technical leadership embedded within client problem statements",
    ],
  },
  {
    number: "02",
    title: "Industry Knowledge",
    description: "Domain-focused solutions for semiconductor and technology-driven industries.",
    icon: "industry",
    image: "/images/popup-industry.jpg",
    fullOverview: "We understand the unique regulatory, quality, and performance dynamics across semiconductor, automotive, industrial automation, telecommunications, and defense domains. Our solutions are purpose-built to navigate complex industry lifecycles and compliance frameworks.",
    keyStrengths: [
      "Deep understanding of ISO 26262, IEC 61508, and DO-254/DO-178 standards",
      "Extensive fabless semiconductor ecosystem relationships & foundry PDK know-how",
      "Industrial IoT, deterministic fieldbus, and robotics domain experience",
      "Next-generation 5G/6G wireless communication & networking protocol expertise",
    ],
  },
  {
    number: "03",
    title: "End-to-End Delivery",
    description: "From concept to scale, with seamless integration across the stack.",
    icon: "delivery",
    image: "/images/popup-delivery.jpg",
    fullOverview: "We eliminate the friction of multi-vendor handoffs by providing full-lifecycle engineering capabilities under one roof. From architecture definition and RTL design to board prototyping, firmware bring-up, cloud deployment, and production scaling.",
    keyStrengths: [
      "Holistic ownership across silicon, hardware, firmware, and cloud software",
      "Rapid prototyping with defined phase gates for tape-out and manufacturing",
      "Integrated quality assurance, automated CI/CD, and regression testing",
      "Smooth knowledge transfer and lifecycle support throughout deployment",
    ],
  },
  {
    number: "04",
    title: "Built for Scale",
    description: "Flexible teams and modern processes to support your growth.",
    icon: "scale",
    image: "/images/popup-scale.jpg",
    fullOverview: "Whether you need a dedicated pod of ASIC verification engineers or a full turnkey system development team, Tranquelent adapts quickly. Our flexible engagement models and mature governance allow you to scale engineering capacity on demand without compromising velocity or precision.",
    keyStrengths: [
      "Agile dedicated engineering teams customized to your project cadence",
      "Global delivery footprint providing follow-the-sun engineering support",
      "Strict IP security, zero-leakage development environments & NDA governance",
      "Transparent project management, milestone tracking & KPI visibility",
    ],
  },
];

export const HOW_WE_WORK_MODELS = [
  {
    number: "01",
    title: "Dedicated Engineering Teams",
    description: "Skilled, domain-focused teams aligned to your goals.",
    icon: "team",
  },
  {
    number: "02",
    title: "Project-Based Delivery",
    description: "Clear scope, defined outcomes and measurable progress.",
    icon: "project",
  },
  {
    number: "03",
    title: "Technology Consulting",
    description: "Strategic guidance for long-term success.",
    icon: "consulting",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "semiconductor-electronics",
    title: "Semiconductor & Electronics",
    tag: "Core Strength",
    isPrimary: true,
    description: "Empowering fabless semiconductor companies, IDMs, and systems OEMs with world-class silicon design, verification, and validation services.",
    image: "/images/ind-semiconductor-soc.jpg",
    capabilities: [
      "Advanced Node ASIC/SoC Engineering",
      "Silicon Verification & Emulation",
      "Pre-Silicon & Post-Silicon Validation",
      "Custom Microarchitecture Design",
    ],
  },
  {
    id: "technology-digital",
    title: "Technology & Digital Engineering",
    tag: "Digital Core",
    isSecondary: false,
    description: "Accelerating modern digital platforms, cloud infrastructure, AI engineering, and intelligent system software.",
    image: "/images/ind-digital-robotics.jpg",
    capabilities: [
      "Cloud-Native Infrastructure & APIs",
      "Edge-to-Cloud Telemetry & Analytics",
      "Enterprise Platform Modernization",
      "Intelligent Data & Real-Time Streaming",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Intelligent Systems",
    tag: "Next-Gen Innovation",
    isPrimary: false,
    description: "Developing transformative artificial intelligence architectures, neural accelerators, computer vision systems, and automated machine learning pipelines.",
    image: "/images/ind-ai-solutions.jpg",
    capabilities: [
      "Edge AI Inference & NPU Accelerator Optimization",
      "Computer Vision & Multi-Modal Sensor Fusion",
      "Enterprise LLM Integration & Retrieval-Augmented Generation",
      "Scalable MLOps Pipelines & Continuous Model Monitoring",
    ],
  },
];

export const ADDITIONAL_INDUSTRIES: AdditionalIndustryItem[] = [
  {
    name: "Automotive & Mobility",
    slug: "automotive",
    icon: "car",
    image: "/images/popup-automotive.jpg",
    description: "ADAS, EV powertrain platforms, automotive Ethernet & in-vehicle infotainment",
    fullOverview: "Tranquelent delivers safety-critical engineering services for automotive OEMs and Tier-1 suppliers. We design high-performance compute architectures for autonomous driving, EV battery management systems (BMS), deterministic AUTOSAR software stacks, and next-generation in-vehicle infotainment (IVI).",
    capabilities: [
      "ADAS Perception & Sensor Processing Pipelines",
      "EV Powertrain & Battery Management Systems (BMS)",
      "AUTOSAR Classic & Adaptive Architecture Implementation",
      "ISO 26262 ASIL-D Functional Safety Compliance",
    ],
  },
  {
    name: "Industrial Technology",
    slug: "industrial",
    icon: "factory",
    image: "/images/popup-industrial.jpg",
    description: "Smart factory automation, robotics, deterministic control & ruggedized sensors",
    fullOverview: "We engineer resilient industrial electronics, deterministic motor control, robotics algorithms, and edge telemetry gateways built for demanding factory and infrastructure environments, enabling Industry 4.0 transformation.",
    capabilities: [
      "Smart Factory Robotics & Deterministic Motion Control",
      "Ruggedized Industrial Edge Gateways & Sensor Hubs",
      "Time-Sensitive Networking (TSN) & Industrial Fieldbuses",
      "Predictive Maintenance & Machine Telemetry Analytics",
    ],
  },
  {
    name: "Telecom & Networking",
    slug: "telecom",
    icon: "network",
    image: "/images/popup-telecom.jpg",
    description: "5G/6G baseband, optical networking, high-speed routing & packet acceleration",
    fullOverview: "Our communications engineering discipline specializes in high-throughput network processing, baseband DSP development, optical routing platforms, and software-defined networking (SDN) for carrier-grade and enterprise telecom infrastructure.",
    capabilities: [
      "5G/6G Baseband Processing & O-RAN Architecture",
      "High-Speed Packet Acceleration (DPDK, eBPF, P4)",
      "Carrier-Grade Optical & Ethernet Switching Fabrics",
      "RF Front-End Interface Integration & Mixed-Signal PHY",
    ],
  },
  {
    name: "Aerospace & Defense Systems",
    slug: "aerospace",
    icon: "tech",
    image: "/images/popup-aerospace.jpg",
    description: "Avionics, mission-critical compute, radar telemetry & satellite communications",
    fullOverview: "We partner with aerospace and defense technology organizations to deliver ultra-reliable embedded electronics, DO-254/DO-178 compliant systems, satellite communications meshes, and high-frequency radar signal processing architectures.",
    capabilities: [
      "DO-254 / DO-178C Safety-Critical Avionics Certification",
      "Satellite Telemetry, Tracking & Command (TT&C) Payloads",
      "Radar Signal Processing & High-Frequency RF Electronics",
      "Radiation-Tolerant & Harsh-Environment System Packaging",
    ],
  },
];

export const ABOUT_EXPERTISE: AboutExpertiseItem[] = [
  {
    name: "Semiconductor Engineering",
    slug: "semiconductor",
    desc: "VLSI, ASIC/SoC, RTL Design, UVM Verification, Physical Design",
    image: "/images/about-semiconductor.jpg",
    fullOverview: "Delivering world-class digital design, advanced UVM verification, physical design closure, and silicon bring-up across leading foundry technology nodes.",
    capabilities: [
      "ASIC / SoC Architecture & Partitioning",
      "Advanced UVM & Formal Verification",
      "RTL-to-GDSII Physical Implementation & STA",
      "Post-Silicon Bring-up & Validation Support",
    ],
  },
  {
    name: "Embedded & Hardware Engineering",
    slug: "embedded",
    desc: "Firmware, RTOS, FPGA, Board Bring-Up, Connected Devices",
    image: "/images/about-embedded.jpg",
    fullOverview: "Designing deterministic firmware, custom board support packages, high-speed PCB layouts, and FPGA hardware accelerators for mission-critical applications.",
    capabilities: [
      "RTOS Kernel Optimization (FreeRTOS, Zephyr, VxWorks)",
      "High-Speed Digital PCB Layout & Signal Integrity",
      "FPGA Synthesis & Hardware Acceleration",
      "Secure Boot, Cryptography & Hardware Root-of-Trust",
    ],
  },
  {
    name: "Software & Digital Engineering",
    slug: "software",
    desc: "Cloud Architecture, AI & Data Engineering, Platforms",
    image: "/images/about-software.jpg",
    fullOverview: "Architecting cloud-native microservices, automated CI/CD pipelines, high-throughput data streaming platforms, and edge-to-cloud IoT ecosystems.",
    capabilities: [
      "Enterprise Cloud Architecture (AWS, Azure, GCP)",
      "Real-Time Telemetry & Distributed Streaming Pipelines",
      "AI/ML Inference Deployment & MLOps Pipelines",
      "Modern Web Applications & Microservices Architectures",
    ],
  },
  {
    name: "Engineering & Technology Consulting",
    slug: "consulting",
    desc: "System Architecture, Roadmaps, Technical Advisory",
    image: "/images/about-consulting.jpg",
    fullOverview: "Collaborating with technology leaders on architectural feasibility studies, technology roadmaps, system trade-offs, and engineering transformation.",
    capabilities: [
      "Comprehensive Architectural Trade-Off Studies",
      "Multi-Year Technology Roadmaps & Tech Stack Strategy",
      "Engineering Velocity & Delivery Governance",
      "Technical Due Diligence & Architecture Audits",
    ],
  },
];

export const ABOUT_APPROACH: AboutApproachItem[] = [
  {
    title: "Engineering Excellence",
    desc: "Rigorous technical methodologies and specialized domain depth.",
    image: "/images/about-excellence.jpg",
    fullOverview: "We uphold uncompromising engineering standards across every project. From zero-defect RTL verification to mission-critical hardware design, we apply best-in-class methodologies to engineer systems that perform under the most stringent demands.",
    keyPrinciples: [
      "Comprehensive verification closure and rigorous test coverage",
      "Adherence to industry functional safety & quality standards",
      "Continuous peer reviews, static analysis, and code auditing",
      "Root-cause analysis and proactive risk mitigation",
    ],
  },
  {
    title: "Collaboration",
    desc: "Working as a seamless extension of your engineering leadership and teams.",
    image: "/images/about-collaboration.jpg",
    fullOverview: "We integrate deeply with your in-house teams, aligning with your internal toolchains, communication channels, and engineering cadences. We operate with radical transparency, providing real-time visibility into technical progress.",
    keyPrinciples: [
      "Embedded engineering teams with shared sprint cycles and standups",
      "Transparent reporting, milestone metrics, and artifact sharing",
      "Active knowledge transfer and comprehensive documentation",
      "Flexible engagement models that scale seamlessly with your needs",
    ],
  },
  {
    title: "Innovation",
    desc: "Translating cutting-edge silicon and software concepts into robust systems.",
    image: "/images/about-innovation.jpg",
    fullOverview: "We turn ambitious ideas into functional, production-ready systems. By combining cutting-edge semiconductor techniques with modern software architectures and AI acceleration, we help our clients stay ahead of the technology curve.",
    keyPrinciples: [
      "Rapid exploration of novel microarchitectures and platforms",
      "Integration of AI accelerators and intelligent algorithms",
      "Continuous experimentation with next-gen tools and methodologies",
      "Pragmatic innovation balanced with production reliability",
    ],
  },
  {
    title: "Scalable Delivery",
    desc: "Flexible engagement models designed to adapt from concept to scale.",
    image: "/images/about-delivery.jpg",
    fullOverview: "From initial concept feasibility to full-scale multi-disciplinary delivery, our global operations ensure you have the specialized technical capacity when and where you need it, with uncompromised quality.",
    keyPrinciples: [
      "Global engineering centers for round-the-clock progress",
      "Elastic team scaling to meet critical project milestones",
      "Robust IP security, VPN tunnels, and clean-room environments",
      "Turnkey delivery models with clear SLA commitments",
    ],
  },
];

export const COMPANY_INFO = {
  name: "TRANQUELENT PRIVATE LIMITED",
  brand: "TRANQUELENT",
  tagline: "ENGINEERING WHAT'S NEXT",
  email: "contact@tranquelent.com",
  story: ["Silicon", "Systems", "Software", "Strategy"],
  addresses: {
    usa: {
      label: "USA",
      line1: "5900 Balcones Drive STE 100",
      line2: "Austin, TX 78731",
    },
    india: {
      label: "India",
      line1: "Bangalore, Karnataka, India",
    },
  },
};
