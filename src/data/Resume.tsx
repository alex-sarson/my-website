type ResumeEntry = {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export const ResumeContent: ResumeEntry[] = [
  {
    title: 'Senior Web Developer',
    company: 'Magdalen Medical Publishing',
    duration: 'August 2024 - Present',
    responsibilities: [
      'Developed platform authentication (React/Vite), securing and standardizing user data collection via micro-services.',
      'Line Managed and mentored one Junior Developer, overseeing their technical growth and performance, and ensuring high standards for team code quality.',
      'Managed and executed a full website re-development (React/GatsbyJS), delivering a complete UI refresh that increased supporter engagement and reduced bounce rate.',
      'Enhanced Disaster Recovery Planning (DRP) by implementing Terraform scripts for infrastructure-as-code, mitigating business risk by reducing potential recovery time.'
    ]
  },
  {
    title: 'Web Developer',
    company : 'Magdalen Medical Publishing',
    duration: 'August 2023 - August 2024',
    responsibilities: [
      'Delivered 7 high-performance brochure websites (React/GatsbyJS) under strict deadlines, directly contributing to increased event registrations and successful supporter campaigns.',
      'Acted as Release Manager , standardizing version control via Gitflow methodologies which reduced release cycle time and deployment errors.',
      'Containerised 6 journal sites using Docker, standardizing the multi-site deployment process and improving local development environment setup.'
    ]
  },
  {
    title: 'Junior Web Developer',
    company : 'Magdalen Medical Publishing',
    duration: 'June 2022 - August 2023',
    responsibilities: [
      'Collaborated with cross-functional teams to implement new website features on LAMP stack websites.',
      'Handled bug fixes and issue resolution, improving website performance and user experience.',
      'Key achievement was learning and utilizing GatsbyJS and ReactJS as part of a significant iw website redevelopment project, enhancing professional skills.'
    ]
  },
  {
    title: 'Web Development Manager',
    company: 'LEAD IT Services',
    duration: 'January 2022 - June 2022',
    responsibilities: [
      'Managed and developed websites for the L.E.A.D. Academy Trust schools, external schools, and cubowork.com',
      'Developed custom plugins for the WordPress CMS admin panel to increase efficiency.',
      'Plugin development skills utilized PHP, HTML, CSS, and JavaScript, focusing on custom post types to create simple admin forms and render frontend elements like buttons with modals or accordions.',
      'Developed a specific vacancy plugin that displayed posts chronologically, automatically changing the post status from \'published\' to \'draft\' (removing it from the frontend) once a pre-set \'end date\' was reached.'
    ]
  }
]