export const getAboutText = () => `
🚀 I am a software developer currently studying Engineering at the University of Waterloo and passionate about exploring the world of tech and engineering. I am approaching 2 years of professional experience through internships working in industries such as fintech and physical security.

🏊‍♂️ Outside of school and work, I enjoy swimming as a part of the Waterloo varsity swim team as well as watching F1 and hockey.
`;

export const getSections = () => [
  "About Me",
  "Experience",
  "Projects",
  "Contact",
];

type Experience = {
  role: string;
  company: string;
  companyLink: string;
  date: string;
  icon: {
    src: string;
    alt: string;
    height: string;
    width: string;
    color: string;
  };
  description: string[];
  projectLinks?: { name: string; link: string }[];
};

export const getExperience = (): Experience[] => [
  {
    role: "Frontend Software Engineer Intern",
    company: "Verkada",
    date: "May 2024 – Current",
    icon: {
      src: process.env.PUBLIC_URL + "/verkada-logo.webp",
      alt: "Verkada Logo",
      height: "50px",
      width: "66px",
      color: "#222",
    },
    description: [
      "Developed a new intercom dashboard page to display and sort more than 100k weekly call and video events.",
      "Created new React components that utilize Redux for fetching and storing data; tested using RTL and Cypress.",
      "Developed custom hooks to process user, phone, and local SIP receiver IDs and return localized text.",
      "Built a virtualized table with smooth scrolling and dynamic row rendering, improving table load time by 200%.",
      "Integrated Highcharts library for data presentation, creating scalable code for future dashboards features.",
    ],
    companyLink: "https://www.verkada.com",
    projectLinks: [
      {
        name: "Intercom Dashboard",
        link: process.env.PUBLIC_URL + "/project-intercom-dashboard.pdf",
      },
      {
        name: "AI Events Search",
        link: process.env.PUBLIC_URL + "/project-intercom-ai-search.pdf",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Relay Financial",
    date: "Sep – Dec 2023",
    icon: {
      src: process.env.PUBLIC_URL + "/relay-logo.webp",
      alt: "Relay Logo",
      height: "30.6px",
      width: "60px",
      color: "#D7E288",
    },
    description: [
      "Developed an event handler using AWS and Node to parse and upload data from 1000+ daily emailed receipts.",
      "Created a message queue with SQS to process the emails, improving efficiency by 40% and enhancing reliability.",
      "Used Lambda to handle compute-intensive tasks such as OCR, and SES for return emails when errors occurred.",
      "Implemented Veryfi’s API to improve OCR, resulting in receipt to transaction matching accuracy of 98%.",
    ],
    companyLink: "https://www.relayfi.com",
    projectLinks: [
      {
        name: "Receipt Managment",
        link: "https://relayfi.com/receipt-management",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ATS Corporation",
    date: "Jan – Apr 2023",
    icon: {
      src: process.env.PUBLIC_URL + "/ats-logo.webp",
      alt: "ATS Logo",
      height: "11px",
      width: "60px",
      color: "#fff",
    },
    description: [
      "Prototyped a full stack React/Node app from scratch, to replace a third-party app with concurrent user issues.",
      "Developed a microservice with 15+ endpoints to fetch and aggregate PLC data via OPCUA, testing with Postman.",
      "Employed WebSockets to display real-time data from the PLC, decreasing data latency time by 4x.",
    ],
    companyLink: "https://www.atsautomation.com",
  },
  {
    role: "Internal Tools Software Engineer Intern",
    company: "Molex",
    date: "Sep – Dec 2022",
    icon: {
      src: process.env.PUBLIC_URL + "/molex-logo.png",
      alt: "Molex Logo",
      height: "60px",
      width: "60px",
      color: "#cbcbcb",
    },
    description: [
      "Developed a Python API with GUI to automate PLC, laser marker, and SQL Server comms, tripling PCB production.",
      "Leveraged Docker to containerize the executable and configured Jenkins CI/CD pipelines to automate the build, test, and deployment, reducing deployment time by 60%.",
    ],
    companyLink: "https://www.molex.com",
  },
];
