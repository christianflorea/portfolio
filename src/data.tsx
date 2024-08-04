export const getAboutText = () => `
🚀 I am a software developer currently studying Engineering at the University of Waterloo and passionate about exploring the world of tech and engineering. I am approaching 2 years of professional experience through internships working in industries such as fintech and physical security.

🏊‍♂️ Outside of school and work, I enjoy swimming as a part of the Waterloo varsity swim team as well as watching F1 and hockey.
`;

export const getSections = () => [
  "Intro",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

type Experience = {
  role: string;
  company: string;
  date: string;
  icon: {
    src: string;
    alt: string;
    height: string;
    width: string;
  };
  description: string[];
  link: string;
};

export const getExperience = (): Experience[] => [
  {
    role: "Frontend Software Engineer Intern",
    company: "Verkada",
    date: "May 2024 – Current",
    icon: {
      src: "/verkada-logo.webp",
      alt: "Verkada Logo",
      height: "50px",
      width: "66px",
    },
    description: [
      "Developed a new intercom dashboard page to display and sort more than 100k weekly call and video events.",
      "Created new React components that utilize Redux for fetching and storing data; tested using RTL and Cypress.",
      "Developed custom hooks to process user, phone, and local SIP receiver IDs and return localized text.",
      "Built a virtualized table with smooth scrolling and dynamic row rendering, improving table load time by 200%.",
      "Integrated Highcharts library for data presentation, creating scalable code for future dashboards features.",
    ],
    link: "https://www.verkada.com",
  },
  {
    role: "Software Engineer Intern",
    company: "Relay Financial",
    date: "Sep – Dec 2023",
    icon: {
      src: "/relay-logo.webp",
      alt: "Relay Logo",
      height: "30.6px",
      width: "60px",
    },
    description: [
      "Developed an event handler using AWS and Node to parse and upload data from 1000+ daily emailed receipts.",
      "Created a message queue with SQS to process the emails, improving efficiency by 40% and enhancing reliability.",
      "Used Lambda to handle compute-intensive tasks such as OCR, and SES for return emails when errors occurred.",
      "Implemented Veryfi’s API to improve OCR, resulting in receipt to transaction matching accuracy of 98%.",
    ],
    link: "https://www.relayfi.com",
  },
  {
    role: "Software Engineer Intern",
    company: "ATS Corporation",
    date: "Jan – Apr 2023",
    icon: {
      src: "/ats-logo.webp",
      alt: "ATS Logo",
      height: "11px",
      width: "60px",
    },
    description: [
      "Prototyped a full stack React/Node app from scratch, to replace a third-party app with concurrent user issues.",
      "Developed a microservice with 15+ endpoints to fetch and aggregate PLC data via OPCUA, testing with Postman.",
      "Employed WebSockets to display real-time data from the PLC, decreasing data latency time by 4x.",
    ],
    link: "https://www.atsautomation.com",
  },
  {
    role: "Internal Tools Software Engineer Intern",
    company: "Molex",
    date: "Sep – Dec 2022",
    icon: {
      src: "/molex-logo.png",
      alt: "Molex Logo",
      height: "60px",
      width: "60px",
    },
    description: [
      "Developed a Python API with GUI to automate PLC, laser marker, and SQL Server comms, tripling PCB production.",
      "Leveraged Docker to containerize the executable and configured Jenkins CI/CD pipelines to automate the build, test, and deployment, reducing deployment time by 60%.",
    ],
    link: "https://www.molex.com",
  },
];
