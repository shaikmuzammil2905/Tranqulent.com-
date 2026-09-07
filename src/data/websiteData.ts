export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  isFlagship?: boolean;
  services: string[];
  keyChallenges: string[];
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

export const CAPABILITIES_DATA: ServiceItem[] = [
  {
    id: "semiconductor-engineering",
    slug: "semiconductor-engineering",
    number: "01",
    title: "Semiconductor Engineering",
    shortDescription: "Comprehensive silicon design, verification, and implementation solutions from architecture to tape-out.",
    fullOverview: "Tranquelent delivers end-to-end semiconductor design and engineering services across advanced technology nodes. Our engineering teams bring deep specialization in ASIC/SoC development, front-end design, advanced verification methodologies (UVM/SystemVerilog), and physical design closure.",
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
    keyChallenges: [
      "Escalating design complexity at sub-5nm and 3nm process nodes",
      "Strict power, performance, and area (PPA) constraints for AI and edge silicon",
      "First-pass silicon success and rigorous verification coverage closure",
      "Time-to-market pressures in multi-die and chiplet architectures",
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
    keyChallenges: [
      "Ultra-low latency firmware execution and real-time determinism",
      "Complex hardware-software co-verification and board bring-up",
      "Thermal management and power optimization in compact edge devices",
      "Stringent security and safety compliance standards",
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
    keyChallenges: [
      "Ingesting and processing high-throughput telemetry from edge devices",
      "Modernizing legacy architectures into cloud-native microservices",
      "Deploying scalable AI/ML inference pipelines at scale",
      "Continuous integration, automated testing, and security (DevSecOps)",
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
    keyChallenges: [
      "Navigating architectural trade-offs between custom silicon vs. off-the-shelf platforms",
      "Accelerating engineering velocity across distributed multi-disciplinary teams",
      "Mitigating technical debt in mission-critical deployed systems",
      "Formulating multi-year technology roadmaps aligned with business milestones",
    ],
    howWeHelp: [
      "Independent, rigorous architectural assessments and feasibility studies",
      "Pragmatic technology roadmaps backed by deep semiconductor & software expertise",
      "Engineering process modernization and quality framework implementation",
      "Executive advisory for silicon and hardware-software system roadmaps",
    ],
  },
];

export const WHY_TRANQUELENT_PILLARS = [
  {
    number: "01",
    title: "Engineering Expertise",
    description: "Deep technical knowledge across silicon, systems, software and digital.",
    icon: "expertise",
  },
  {
    number: "02",
    title: "Industry Knowledge",
    description: "Domain-focused solutions for semiconductor and technology-driven industries.",
    icon: "industry",
  },
  {
    number: "03",
    title: "End-to-End Delivery",
    description: "From concept to scale, with seamless integration across the stack.",
    icon: "delivery",
  },
  {
    number: "04",
    title: "Built for Scale",
    description: "Flexible teams and modern processes to support your growth.",
    icon: "scale",
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
    tag: "Our Core Strength",
    isPrimary: true,
    description: "Empowering fabless semiconductor companies, IDMs, and systems OEMs with world-class silicon design, verification, and validation services.",
    image: "/images/ind-semiconductor-bg.jpg",
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
    tag: "Our Secondary Focus",
    isSecondary: true,
    description: "Accelerating modern digital platforms, cloud infrastructure, AI engineering, and intelligent system software.",
    image: "/images/ind-digital-bg.jpg",
    capabilities: [
      "Cloud-Native Infrastructure & APIs",
      "Edge-to-Cloud Telemetry & Analytics",
      "Enterprise Platform Modernization",
      "Intelligent Data & AI Solutions",
    ],
  },
];

export const ADDITIONAL_INDUSTRIES = [
  { name: "Automotive & Mobility", icon: "car", description: "ADAS, EV powertrain platforms, automotive Ethernet & in-vehicle infotainment" },
  { name: "Industrial Technology", icon: "factory", description: "Smart factory automation, robotics, deterministic control & ruggedized sensors" },
  { name: "Telecom & Networking", icon: "network", description: "5G/6G baseband, optical networking, high-speed routing & packet acceleration" },
  { name: "Other Technology-Driven Industries", icon: "tech", description: "Aerospace, medical devices, defense electronics & IoT ecosystems" },
];

export const COMPANY_INFO = {
  name: "TRANQUELENT PRIVATE LIMITED",
  brand: "TRANQUELENT",
  tagline: "ENGINEERING WHAT'S NEXT",
  story: ["Silicon", "Systems", "Software", "Strategy"],
  addresses: {
    usa: {
      label: "USA (Headquarters)",
      line1: "5900 Balcones Drive STE 100",
      line2: "Austin, TX 78731",
    },
    india: {
      label: "India",
      line1: "Bangalore, Karnataka, India",
    },
  },
};
