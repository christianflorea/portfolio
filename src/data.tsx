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
    link: process.env.PUBLIC_URL + "/documents/resume.pdf",
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
  location: string;
  date: string;
  color: string;
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
    text: string;
    link?: {
      link: string;
      text: string;
    };
  }[];
  extraLinks?: { name: string; link: string }[];
};

export const getExperience = (): Experience[] => [
  {
    role: "Incoming Software Engineer Intern",
    company: "Uber",
    location: "San Fransisco, CA",
    date: "Fall 2025",
    color:
      "linear-gradient(90deg, rgb(164, 164, 164) 0%, rgb(196, 196, 196) 50%, rgb(163, 162, 162) 100%)",
    icon: {
      src: process.env.PUBLIC_URL + "/logos/uber-logo.png",
      alt: "Uber Logo",
      height: "300px",
      width: "828px",
      color: "#000",
    },
    description: [],
    companyLink: "https://www.uber.com/",
    extraLinks: [
      {
        name: "Uber Website",
        link: "https://www.uber.com/",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Verkada",
    location: "San Mateo, CA",
    date: "Summer 2025",
    color:
      "linear-gradient(90deg, hsla(203, 80%, 98%, 1) 0%, hsla(198, 76%, 90%, 1) 50%, hsla(203, 80%, 98%, 1) 100%)",
    icon: {
      src: process.env.PUBLIC_URL + "/logos/verkada-full-logo.png",
      alt: "Verkada Logo",
      height: "50px",
      width: "85px",
      color: "#000",
    },
    description: [
      {
        img: process.env.PUBLIC_URL + "/thumbnails/verkada-async-events.png",
        title: "Sync to Async Export Pipeline",
        text: "Designed and implemented a robust asynchronous export pipeline: on user request, the service validates input, enqueues an export job to Kafka, and records in-progress status in Redis. A Kubernetes consumer reads the job, queries Postgres for event data, generates the CSV, uploads it to S3, and triggers an SES email with the download link—decoupling heavy workloads from the user-facing service, boosting reliability, and minimizing response latency.",
      },
      {
        img: process.env.PUBLIC_URL + "/thumbnails/verkada-elasticsearch.jpg",
        title: "Elasticsearch Migration",
        text: "Led migration of event search functionality to Elasticsearch, improving query performance and reliability for high-volume door event data.",
      },
    ],
    companyLink: "https://www.verkada.com",
    extraLinks: [
      {
        name: "Verkada Website",
        link: "https://www.verkada.com",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Magi Inc",
    location: "New York, NY",
    date: "Winter 2025",
    color:
      "linear-gradient(90deg, rgb(70, 70, 70) 0%, rgb(74, 30, 111) 50%, rgb(64, 67, 68) 100%)",
    icon: {
      src: process.env.PUBLIC_URL + "/logos/magi-logo.webp",
      alt: "Magi Logo",
      height: "60px",
      width: "250px",
      color: "#fff",
    },
    description: [
      {
        img: process.env.PUBLIC_URL + "/thumbnails/magi-rag-engine.png",
        title: "Vector-based Recommendation Engine",
        text: "Built a recommendation engine from scratch to deliver personalized fashion suggestions, leveraging vector embeddings for 700k+ images.",
      },
      {
        img: process.env.PUBLIC_URL + "/thumbnails/magi-rag-algorithm.png",
        title: "RAG-based Re-ranking Algorithm",
        text: "Executed a RAG-based post-ranking step that boosted outbound click-through rates by 68% through improved result relevance.",
      },
      {
        img: process.env.PUBLIC_URL + "/thumbnails/magi-ingestion.png",
        title: "Image Ingestion Queue",
        text: "Designed and implemented a scalable processing queue for image description, embedding, and storage, handling high-throughput pipelines.",
      },
    ],
    companyLink: "https://magi.inc/",
    extraLinks: [],
  },
  {
    role: "Software Engineer Intern",
    company: "Verkada",
    location: "San Mateo, CA",
    date: "Summer 2024",
    color:
      "linear-gradient(90deg, hsla(203, 80%, 98%, 1) 0%, hsla(198, 76%, 90%, 1) 50%, hsla(203, 80%, 98%, 1) 100%)",
    icon: {
      src: process.env.PUBLIC_URL + "/logos/verkada-full-logo.png",
      alt: "Verkada Logo",
      height: "50px",
      width: "85px",
      color: "#000",
    },
    description: [
      {
        img:
          process.env.PUBLIC_URL +
          "/thumbnails/intercom-dashboard-thumbnail.png",
        title: "Intercom Dashboard",
        text: "At Verkada, I worked on developing a new intercom dashboard page to display and sort more than 100k weekly call and video events. The dashboard was built using tools such as React, Redux, React Query, localized text, and Highcharts. This new tool will not only help organizations ensure that intercoms are answered in a timely manner, but also provide more information on when intercoms are in heavy use to make better staffing decisions.",
        link: {
          link: "https://www.verkada.com/blog/enhancing-enterprise-scalability-with-new-intercom-software-features/",
          text: "Read More",
        },
      },
      {
        img: process.env.PUBLIC_URL + "/thumbnails/ai-search-thumbnail.png",
        title: "AI Transcription Search",
        text: "I also worked on a new AI Transcript search feature to allow users to more easily search for their interocm events. I developed new loading skeletons for unpredictable load times and utilized React Query to fetch and cache data, reducing the number of API calls by 50%. Each event is accompanied by a synopsis which summarizes the transcript and explains why the result is relevant.",
        link: {
          link:
            process.env.PUBLIC_URL +
            "/documents/project-intercom-ai-search.pdf",
          text: "AI Search Deep Dive",
        },
      },
      {
        img:
          process.env.PUBLIC_URL + "/thumbnails/concurrent-calls-thumbnail.png",
        title: "Concurrent Call Handling",
        text: "Finally, I built a new call modal to handle concurrent calls, allowing users to switch between calls and put others on hold. This was done by implementing a call queue to manage incoming calls, allowing users to answer or reject calls. I also added new animations to show the status of calls, such as ringing, on hold, or connected.",
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
    location: "Toronto, ON",
    date: "Fall 2023",
    color:
      "linear-gradient(90deg, hsla(71, 68%, 95%, 1) 0%, hsla(68, 65%, 80%, 1) 50%, hsla(71, 68%, 95%, 1) 100%)",
    icon: {
      src: process.env.PUBLIC_URL + "/logos/relay-logo.webp",
      alt: "Relay Logo",
      height: "30.6px",
      width: "60px",
      color: "#000",
    },
    description: [
      {
        img: process.env.PUBLIC_URL + "/thumbnails/relay-rc-thumbnail.png",
        title: "Receipt Capture",
        text: "I developed an automated system using AWS and Node that manages over 1,000 daily emailed receipts. This new feature incuded a drag-and-drop interface for easy upload and file validation, and was integrated with a centralized platform for expense tracking.",
        link: {
          link: "https://relayfi.com/receipt-management",
          text: "Read More",
        },
      },
      {
        img:
          process.env.PUBLIC_URL + "/thumbnails/relay-auto-match-thumbnail.png",
        title: "Forwared Email Receipt OCR Auto-matching",
        text: "To enhance accuracy, I implemented Veryfi's API for OCR, achieving 98% accuracy in automatically matching receipts to transactions, significantly improving data reliability and reducing manual entry.",
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
  // {
  //   role: "Software Engineer Intern",
  //   company: "ATS Corporation",
  //   date: "January – April 2023",
  //   color:
  //     "linear-gradient(90deg, hsla(222, 92%, 95%, 1) 0%, hsla(220, 92%, 85%, 1) 50%, hsla(222, 92%, 95%, 1) 100%)",
  //   icon: {
  //     src: process.env.PUBLIC_URL + "/logos/ats-logo.webp",
  //     alt: "ATS Logo",
  //     height: "20px",
  //     width: "100px",
  //     color:
  //       "linear-gradient(90deg, hsla(222, 92%, 95%, 1) 0%, hsla(220, 92%, 85%, 1) 50%, hsla(222, 92%, 95%, 1) 100%)",
  //   },
  //   description: [
  //     {
  //       img: process.env.PUBLIC_URL + "/thumbnails/ats-web-app.png",
  //       title: "Full Stack App developed from Scratch",
  //       text: "I prototyped a full stack React/Node app from scratch to replace a third-party app that had issues with concurrent users. The app includes a microservice with over 15 endpoints to fetch and aggregate PLC data via OPCUA, thoroughly tested using Postman.",
  //     },
  //     {
  //       img: process.env.PUBLIC_URL + "/thumbnails/ats-websocket-thumbnail.png",
  //       title: "Websockets for Real-time Data",
  //       text: "To enable real-time data display from the PLC, I employed WebSockets, reducing data latency by 4x. I built a custom WebSocket server in Node.js, allowing clients to subscribe to real-time data updates seamlessly.",
  //     },
  //   ],
  //   companyLink: "https://www.atsautomation.com",
  //   extraLinks: [
  //     {
  //       name: "ATS Website",
  //       link: "https://www.atsautomation.com",
  //     },
  //   ],
  // },
  // {
  //   role: "Infrastructue Engineer Intern",
  //   company: "Molex",
  //   date: "Sep – Dec 2022",
  //   icon: {
  //     src: process.env.PUBLIC_URL + "/logos/molex-logo.png",
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

type Project = {
  name: string;
  description: string;
  skills: string[];
  img: string;
  link?: string; // no link -> in progress
};

export const getProjects = (): Project[] => [
  {
    name: "Camera Vision Ball Balancing Platform",
    description:
      "Camera vision analysis tracks a ball on a platform and integrates with a PID controller to adjust the platform’s tilt for ball balancing.",
    skills: ["OpenCV", "Python", "PID Control", "I2C Communcation"],
    img: process.env.PUBLIC_URL + "/projects/mte380.png",
    link: "https://github.com/christianflorea/stewart-platform-cv",
  },
  {
    name: "Swim Meet Results Analizer",
    description:
      "A tool built in Python to scrape swim meet results and plot using MatPlotlib",
    skills: ["Python", "MatPlotlib", "Web Scraping"],
    img: process.env.PUBLIC_URL + "/projects/swim-meet.png",
    link: "https://github.com/christianflorea/swim-meet-analysis",
  },
  {
    name: "Blockchain Storage Employee Management",
    description:
      "A blockchain storage app that uses Jackal Protocol to store and manage employee data. Won 1st place at the BC OlympiHacks 2023 hackathon",
    skills: ["Javascript", "Jackal Protocol", "Blockchain"],
    img: process.env.PUBLIC_URL + "/projects/jackal.png",
    link: "https://github.com/christianflorea/OlympiHacks-BC",
  },
  {
    name: "Personal Website",
    description: "This Website",
    skills: ["React", "TypeScript", "Styled Components", "Custom Hooks"],
    img: process.env.PUBLIC_URL + "/projects/portfolio.png",
    link: "https://github.com/christianflorea/portfolio",
  },
  {
    name: "C++ Terminal Video Game",
    description:
      "Video game created with BearLibTerminal with varying levels and power-ups",
    skills: ["C++", "BearLibTerminal"],
    img: process.env.PUBLIC_URL + "/projects/terminal-game.png",
    link: "https://github.com/christianflorea/terminal-video-game",
  },
  {
    name: "Fluid Dynamics Pipe Drainage Simulation",
    description:
      "Modeling water draining through pipes using a differential equation solver in Python.",
    skills: ["Numerical Methods", "Python", "Math", "Simulation"],
    img: process.env.PUBLIC_URL + "/projects/tank-drain.png",
    link: "https://github.com/christianflorea/fluid-dynamics-tank-drainage-model",
  },
  {
    name: "Tennis Instructor Mock Website",
    description:
      "A mock website built for a tennis instructor to showcase their services and schedule",
    skills: ["Javascript", "CSS"],
    img: process.env.PUBLIC_URL + "/projects/tennis-web.png",
    link: "https://github.com/christianflorea/tennis-instructor-website",
  },
  {
    name: "Round Robin OS Scheduler",
    description:
      "A round robin OS scheduler built in C that schedules threads on a STM32 board",
    skills: ["C", "STM32", "Threading", "Operating Systems"],
    img: process.env.PUBLIC_URL + "/projects/os-scheduler.png",
  },
];
