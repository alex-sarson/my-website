type ResumeEntry = {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills?: string[];
};

export const ResumeSummary: string = `Senior Web Developer with 5+ years of experience specializing in React, TypeScript, and modern Front-End architectures. I am a highly motivated self-starter who transitioned into software engineering by teaching myself to code in HTML, CSS, JavaScript, and PHP. Known as a proactive "doer," I am always eager to learn new technologies and am quick to jump on any task, particularly when it comes to identifying and resolving bugs to drive platform performance. Expert in leading full-stack re-developments using Gatsby and React, with a focus on technical debt reduction, Core Web Vitals, and enhancing the overall User Experience.`;

export const ResumeContent: ResumeEntry[] = [
  {
    title: "Senior Web Developer",
    company: "Magdalen Medical Publishing",
    duration: "August 2024 - Present",
    responsibilities: [
      "Led the full-stack re-development of the company website using React and GatsbyJS, delivering a UI refresh that significantly reduced bounce rates and increased supporter engagement.",
      "Converted GraphQL queries to MySQL queries to improve search indexer microservice performance from 20 minutes to 2 minutes, allowing for more frequent index refreshes and improved user retention.",
      "Developed platform authentication systems using React and Vite, securing and standardizing user data collection via microservices.",
      "Introduced Infrastructure-as-Code (IaC) using Terraform and Bash scripts to automate cloud management and enhance disaster recovery procedures.",
      "Provided WordPress & Payload CMS training for internal staff to ensure content management efficiency.",
      "Line managed and mentored a Junior Developer, overseeing technical growth and maintaining high standards for team code quality.",
      "Continue to perform the role of Release Manager, taking full ownership of production environments.",
      "Delivered 5 more high-performance brochure websites built with the Gatsby framework and React.",
      "Developed a manual build trigger from WordPress to Netlify using webhooks, for content management teams to use to reduce overall credit expenditure by 90% following a change in Netlify’s billing plan.",
    ],
    skills: [
      "React",
      "GatsbyJS",
      "TypeScript",
      "JavaScript",
      "SASS/SCSS",
      "Docker",
      "Git",
      "AWS",
      "Terraform",
      "REST APIs",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Web Developer",
    company: "Magdalen Medical Publishing",
    duration: "August 2023 - August 2024",
    responsibilities: [
      "Successfully delivered 7 high-performance, SEO-optimized brochure websites utilizing the Gatsby framework and React.",
      "Acted as the primary technical point of contact for departmental heads, translating complex business requirements into actionable front-end feature requests and UI enhancements.",
      "Spearheaded the role of Release Manager, implementing Gitflow methodologies to standardize version control, which directly reduced deployment errors and accelerated the release cycle.",
      "Modernized the deployment pipeline by containerizing 6 major journal sites using Docker, enabling consistent multi-site environments across AWS ECS instances.",
    ],
    skills: [
      "React",
      "GatsbyJS",
      "JavaScript",
      "SASS/SCSS",
      "Docker",
      "Git",
      "AWS",
      "PHP",
      "MySQL",
      "GraphQL",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Magdalen Medical Publishing",
    duration: "June 2022 - August 2023",
    responsibilities: [
      "Maintained and optimized 6 core WordPress websites on a LAMP stack, ensuring 100% uptime and business continuity for legacy systems.",
      "Collaborated within cross-functional teams to design and deploy new front-end features, focusing on improving the user experience for medical researchers.",
      "Utilized Git for rigorous version control, ensuring a transparent and collaborative coding environment during the transition to more modern frameworks.",
    ],
    skills: [
      "React",
      "GatsbyJS",
      "JavaScript",
      "Git",
      "PHP",
      "MySQL",
      "GraphQL",
      "WordPress",
      "SASS/SCSS",
    ],
  },
  {
    title: "Web Development Manager",
    company: "LEAD IT Services",
    duration: "January 2022 - June 2022",
    responsibilities: [
      "Independently managed and maintained a portfolio of 20+ school websites, utilizing a core stack of HTML, PHP, JavaScript, and CSS to ensure high availability and performance.",
      "Architected and deployed an automated marketing lead orchestration system using Microsoft Power Automate, converting inbound contact form emails into actionable leads within the Cubo marketing platform.",
      'Spearheaded emergency disaster recovery efforts for an external Academy Trust following a widespread "anonymousfox" security breach; successfully remediated multiple defaced websites by patching critical Joomla exploits.',
      "Provided high-touch technical consultancy and on-site support for educational institutions, ensuring seamless operation of digital assets and infrastructure.",
    ],
    skills: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
  },
  {
    title: "IT Support Technician",
    company: "LEAD IT Services",
    duration: "August 2019 - January 2022",
    responsibilities: [
      "Transitioned from an architecture background to a technical role, providing user assistance while teaching myself to code HTML, CSS, JavaScript, and PHP to enhance school websites.",
    ],
  },
];
