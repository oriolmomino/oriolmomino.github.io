import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {
  EnvelopeIcon,
} from '@heroicons/react/24/solid';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import WhatsAppIcon from '../components/Icon/WhatsAppIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import testimonialImage1 from '../images/testimonial/testimonial-1.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Oriol's resume",
  description: "Personal website to share my work experience and skills",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello there! I'm Oriol.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">Full Stack Software Engineer</strong> with 10 years of experience, skilled in multiple programming languages and technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I excel in <strong className="text-stone-100">adapting to diverse projects and environments</strong> and my versatile background enables me to <strong className="text-stone-100">tackle complex challenges successfully</strong>, ensuring effective solutions across various platforms and industries.
      </p>
    </>
  ),
  actions: [
    {
      href: '/files/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      download: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a technology and sports enthusiast who thrives on ambitious challenges, both professionally and personally.
  Passionate about programming, I enjoy working on everything from simple web pages to complex devices.
  I value organization and effective methodologies to streamline my work.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, Spain', Icon: MapIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Study', text: 'Universitat Politècnica de Catalunya', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'OCR, traveling, video games', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'API Rest',
        level: 9,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Catalan',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ArenaGG',
    description: 'Web application for managing amateur eSports competitions',
    url: 'https://www.arenagg.com/',
    image: porfolioImage1,
  },
  {
    title: 'UVE Street',
    description: 'Mobile application for managing orders from bar and restaurant distributors',
    url: 'https://uvesolutions.com/solutions/uve-street-sales-force-automation/',
    image: porfolioImage2,
  },
  {
    title: 'Haunt Keeper',
    description: 'Physical device for securing remote work environments',
    url: 'https://www.wisesecurity.com/',
    image: porfolioImage3,
  },
  {
    title: "Ral d'Avinyó",
    description: 'Website of a pork products company',
    url: 'https://www.raldavinyo.com/',
    image: porfolioImage4,
  },
  {
    title: 'ESI Funds for Health',
    description: 'Website for the European Structural and Investment Funds for Health project',
    url: 'https://health.ec.europa.eu/',
    image: porfolioImage5,
  },
  {
    title: 'Socialists & Democrats',
    description: 'Website for the S&D group of the European Parliament',
    url: 'https://www.socialistsanddemocrats.eu/',
    image: porfolioImage6,
  },
  {
    title: 'Laboratorios Ordesa',
    description: 'Corporate and brand websites of a nutritional products laboratory for children and adults',
    url: 'https://www.ordesalab.com/',
    image: porfolioImage7,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'In progress',
    location: 'EAE Business School, Barcelona',
    title: 'Master of Project Management',
  },
  {
    date: '2019',
    location: 'Universitat Politècnica de Catalunya, Barcelona',
    title: 'Master of Cybesercurity Management',
  },
  {
    date: '2016',
    location: 'Universitat Politècnica de Catalunya, Barcelona',
    title: 'Bachelor of Computer Science (Software Engineering)',
  },
  {
    date: '2022',
    location: 'Universitat Oberta de Catalunya, Barcelona',
    title: 'Front End Web Developer',
  },
  {
    date: '2019',
    location: "Escola Oficial d'Idiomes, Manresa",
    title: 'English C1 (Advanced)',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - present',
    location: 'LVP - Liga de Videojuegos Profesional',
    title: 'Senior Backend Developer',
    content: (
      <p>
        Development and maintenance of an application to manage eSports competitions.
      </p>
    ),
  },
  {
    date: 'May 2021 - May 2022',
    location: 'UVE Solutions',
    title: 'Full Stack Developer',
    content: (
      <p>
        Development of an application for Android and iOS for suppliers in the hospitality industry to manage stock orders.
      </p>
    ),
  },
  {
    date: 'December 2018 - May 2021',
    location: 'Wise Security Global',
    title: 'Cybersecurity Analyst',
    content: (
      <p>
        Security review of mobile applications and development of internal tools for cybersecurity management.
      </p>
    ),
  },
  {
    date: 'April 2015 - December 2018',
    location: 'KingEclient',
    title: 'Technology Consultant',
    content: (
      <p>
        Development of web applications in digital transformation projects and member of the company's international team.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Santiago Mesa',
      text: "Oriol demonstrates expertise in JS, PHP, data structure design, and cybersecurity, making him vital for early-stage projects. He's highly communicative, sharing his expertise to assist with tasks, clarify customer doubts, and design solutions. Working with him daily is a great experience.",
      image: testimonialImage1,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Feel free to reach out with any questions, project ideas, or collaboration opportunities. I'm always open to connecting and exploring new possibilities. Let's create something amazing together!",
  items: [
    {
      type: ContactType.Email,
      text: 'momino.oriol@gmail.com',
      href: 'mailto:momino.oriol@gmail.com',
    },
    {
      type: ContactType.WhatsApp,
      text: '(+34) 627 761 613',
      href: 'https://wa.me/34627761613',
    },
    {
      type: ContactType.LinkedIn,
      text: 'oriolmomino',
      href: 'https://www.linkedin.com/in/oriolmomino/',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://www.google.com/maps/search/?api=1&query=Barcelona',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:momino.oriol@gmail.com'},
  {label: 'WhatsApp', Icon: WhatsAppIcon, href: 'https://wa.me/34627761613', target:'_blank'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/oriolmomino/', target: '_blank'},
];
