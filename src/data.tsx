import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

export const getAboutText = () => `
I am a student currently studying Engineering at the University of Waterloo and passionate about exploring the world of tech and engineering. I am approaching 2 years of professional experience through internships working in industries such as fintech and physical security.

Outside of school and work, I enjoy swimming as a part of the Waterloo varsity swim team as well as watching F1 and hockey.
`;

export const getAboutLinks = () => [
  {
    name: "Resume",
    link: process.env.PUBLIC_URL + "/christian-florea-resume.pdf",
    logo: <ArticleIcon />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/christianflorea/",
    logo: <LinkedInIcon />,
  },
  {
    name: "GitHub",
    link: "https://github.com/christianflorea",
    logo: <GitHubIcon />,
  },
  {
    name: "Email",
    link: "mailto:cflorea@uwaterloo.ca",
    logo: <EmailIcon />,
  },
];

export const getSections = () => [
  "About Me",
  "Contact",
  "Experience",
  "Projects",
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
  description: {
    img: string;
    title: string;
    text: string[];
    link?: {
      link: string;
      text: string;
    };
  }[];
  extraLinks?: { name: string; link: string }[];
};

export const getExperience = (): Experience[] => [
  {
    role: "Frontend Software Engineer Intern",
    company: "Verkada",
    date: "May 2024 – August 2024",
    icon: {
      src: process.env.PUBLIC_URL + "/verkada-logo.webp",
      alt: "Verkada Logo",
      height: "50px",
      width: "66px",
      color: "#222222",
    },
    description: [
      {
        img: process.env.PUBLIC_URL + "/dashboard-img.png",
        title: "Intercom Dashboard",
        text: [
          "Developed a new intercom dashboard page to display and sort more than 100k weekly call and video events.",
          "Created new React components that utilize Redux for fetching and storing data; tested using RTL and Cypress.",
          "Developed custom hooks to process user, phone, and local SIP receiver IDs and return localized text.",
          "Integrated Highcharts library for data presentation, creating scalable code for future dashboards features.",
        ],
        link: {
          link: process.env.PUBLIC_URL + "/project-intercom-dashboard.pdf",
          text: "Dashboard Deep Dive",
        },
      },
      {
        img: process.env.PUBLIC_URL + "/ai-search-img.png",
        title: "AI Transcription Search",
        text: [
          "Developed new loading skeleton for the events page to account for unpredictable load times.",
          "Utilized React Query to fetch and cache data, reducing the number of API calls by 50%.",
          "Built a virtualized table with smooth scrolling and dynamic row rendering, improving table load time by 200%.",
        ],
        link: {
          link: process.env.PUBLIC_URL + "/project-intercom-ai-search.pdf",
          text: "AI Search Deep Dive",
        },
      },
      {
        img: process.env.PUBLIC_URL + "/verkada-dashboard.png",
        title: "Concurrent Call Handling",
        text: [
          "Buildt on top of call modal to handle concurrent calls, allowing users to switch between calls and put calls on hold.",
          "Implemented a call queue to manage incoming calls, allowing users to answer or reject calls.",
          "Added visual queues to show the status of calls, such as ringing, on hold, or connected.",
        ],
      },
    ],
    companyLink: "https://www.verkada.com",
    extraLinks: [
      {
        name: "My Features Released",
        link: "https://www.verkada.com/blog/enhancing-enterprise-scalability-with-new-intercom-software-features/",
      },
      {
        name: "Verkada Website",
        link: "https://www.verkada.com",
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
      {
        img: process.env.PUBLIC_URL + "/verkada-dashboard.png",
        title: "Receipt Capture",
        text: [
          "Developed an event handler using AWS and Node to parse and upload data from 1000+ daily emailed receipts.",
          "Built an receipt upload drawer with drag-and-drop functionality and file type/size validation.",
          "Created a message queue with SQS to process the emails, improving efficiency by 40% and enhancing reliability.",
          "Used Lambda to handle compute-intensive tasks such as OCR, and SES for return emails when errors occurred.",
          "Implemented Veryfi’s API to improve OCR, resulting in receipt to transaction matching accuracy of 98%.",
        ],
        link: {
          link: "https://relayfi.com/receipt-management",
          text: "Receipt Capture Released",
        },
      },
      {
        img: process.env.PUBLIC_URL + "/verkada-dashboard.png",
        title: "Forwared Email Receipt OCR Auto-matching",
        text: [
          "Created a message queue with SQS to process the emails, improving efficiency by 40% and enhancing reliability.",
          "Used Lambda to handle compute-intensive tasks such as OCR, and SES for return emails when errors occurred.",
          "Implemented Veryfi’s API to improve OCR, resulting in receipt to transaction matching accuracy of 98%.",
        ],
      },
    ],
    companyLink: "https://www.relayfi.com",
    extraLinks: [
      {
        name: "Relay Website",
        link: "https://www.relayfi.com",
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
      height: "15px",
      width: "80px",
      color: "#ffffff",
    },
    description: [
      {
        img: process.env.PUBLIC_URL + "/verkada-dashboard.png",
        title: "Full Stack App developed from Scratch",
        text: [
          "Prototyped a full stack React/Node app from scratch, to replace a third-party app with concurrent user issues.",
          "Developed a microservice with 15+ endpoints to fetch and aggregate PLC data via OPCUA, testing with Postman.",
        ],
      },
      {
        img: process.env.PUBLIC_URL + "/verkada-dashboard.png",
        title: "Websockets for Real-time Data",
        text: [
          "Employed WebSockets to display real-time data from the PLC, decreasing data latency time by 4x.",
          "Built a custom WebSocket server with Node.js to allow the client to subscribe to real-time data updates.",
        ],
      },
    ],
    companyLink: "https://www.atsautomation.com",
    extraLinks: [
      {
        name: "ATS Website",
        link: "https://www.atsautomation.com",
      },
    ],
  },
  // {
  //   role: "Infrastructue Engineer Intern",
  //   company: "Molex",
  //   date: "Sep – Dec 2022",
  //   icon: {
  //     src: process.env.PUBLIC_URL + "/molex-logo.png",
  //     alt: "Molex Logo",
  //     height: "60px",
  //     width: "60px",
  //     color: "#dfdfdf",
  //   },
  //   description: [
  //     "Developed a Python API with GUI to automate PLC, laser marker, and SQL Server comms, tripling PCB production.",
  //     "Leveraged Docker to containerize the executable and configured Jenkins CI/CD pipelines to automate the \nbuild, test, and deployment, reducing deployment time by 60%.",
  //   ],
  //   companyLink: "https://www.molex.com",
  //   extraLinks: [
  //     {
  //       name: "Molex Website",
  //       link: "https://www.molex.com",
  //     },
  //   ],
  // },
];
