import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Head from 'next/head';

// Import all your data files - removed .js extensions
import { projects } from '../data/projects';
import { personalInfo, aboutMe } from '../data/personal';
import { socialLinks } from '../data/social';
import { techStack } from '../data/skills';
import { education, certifications } from '../data/education';
import { siteConfig, navigationItems, footerInfo } from '../data/config';

// Constants to avoid magic numbers
const MARQUEE_TECH_COUNT = 5;
const TECH_ICON_SIZE = 60;
const PROJECT_IMAGE_WIDTH = 320;
const PROJECT_IMAGE_HEIGHT = 180;

type TechCardProps = {
  img: string;
};

const TechCard = ({ img }: TechCardProps) => {
  return (
    <figure
      className={cn(
        "relative h-24 w-24 cursor-pointer overflow-hidden border p-4 rounded-lg transition-all duration-200",
        // light styles - more gray background
        "border-gray-300 bg-gray-100 hover:bg-gray-200 hover:shadow-md",
        // dark styles - more gray background
        "dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600",
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
        <Image 
          src={img} 
          alt="Technology logo" 
          width={TECH_ICON_SIZE} 
          height={TECH_ICON_SIZE}
          className="object-contain"
        />
      </div>
    </figure>
  );
};

// Dynamic ProjectCard component with better error handling
const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col bg-gray-50 dark:bg-gray-800">
      <div className="relative mb-4">
        <Image
          src={project.image}
          alt={`${project.title} Screenshot`}
          width={PROJECT_IMAGE_WIDTH}
          height={PROJECT_IMAGE_HEIGHT}
          className="rounded-lg object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABIAAIAAQIAAAAAAABAAEAAAIBAQEAAAABAQEAAEBAQEBAQEBAQ=="
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-left w-full">
          {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 w-full mb-2">
            {project.technologies?.map((tech) => (
              <span 
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300  mb-2 text-justify text-sm">
            {project.description}
          </p>
        </div>
        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={project.githubUrl}
            className="block w-[320px] truncate text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
          >
            {project.githubUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

// Dynamic Education Card component with fixed date logic
const EducationCard = ({ edu }) => {
  if (!edu) return null;
  
  const currentYear = new Date().getFullYear();
  const endYear = edu.endDate ? parseInt(edu.endDate) : null;
  const isOngoing = !endYear || endYear >= currentYear;
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
        {isOngoing && (
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
            Current
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div>
          {edu.img && (
            <Image
              src={edu.img}
              alt={`${edu.school} logo`}
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            {edu.school}
          </h4>
          
          <p className="text-gray-600 dark:text-gray-400">
            {edu.location}
          </p>
          
          <div className="flex items-center text-gray-500 dark:text-gray-500">
            <span>{edu.startDate} - {edu.endDate || "Present"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// Dynamic Certification Card component with better date handling
const CertificationCard = ({ cert } ) => {
  if (!cert) return null;
  
  const currentDate = new Date();
  const currentDateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  const isExpired = cert.expiryDate && cert.expiryDate < currentDateString;
  
  return (
    <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {cert.title}
        </h4>
        {!isExpired && cert.expiryDate && (
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
            Valid
          </span>
        )}
      </div>

      <div className="flex items-stretch gap-4">
        <div className="flex-shrink-0 w-28 flex items-center justify-center">
          {cert.img && (
            <Image
              src={cert.img}
              alt={`${cert.title} logo`}
              width={120}
              height={120}
              className="object-contain w-full h-full"
            />
          )}
        </div>

        <div className="flex flex-col justify-between flex-1">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">{cert.issuer}</p>
          <div className="text-gray-600 dark:text-gray-400">
            <p>Issued: {cert.date}</p>
            {cert.expiryDate && <p>Expires: {cert.expiryDate}</p>}
          </div>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View Credential →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ social }) => {
  if (!social) return null;
  
  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-500/10 dark:bg-blue-400/10 group-hover:bg-blue-500/20",
      gray: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-gray-500/10 dark:bg-gray-400/10 group-hover:bg-gray-500/20",
      pink: "text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 bg-gradient-to-r from-pink-500/10 to-purple-500/10 group-hover:from-pink-500/20 group-hover:to-purple-500/20"
    };
    return colorMap[color] || colorMap.gray;
  };

  return (
    <div className={`group relative overflow-hidden border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 ${social.gradient} p-6 transition-all duration-300 hover:shadow-lg`}>
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`p-3 rounded-full transition-colors ${getColorClasses(social.color)}`}>
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={24}
            height={24}
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{social.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {social.description}
          </p>
          <a
            href={social.url}
            className={`font-medium text-sm transition-colors ${getColorClasses(social.color)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.name} profile`}
          >
            {social.username}
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const marquee = techStack?.slice(0, MARQUEE_TECH_COUNT) || [];

  return (
    <>
      <Head>
        <title>{siteConfig?.title || "Portfolio"}</title>
        <meta name="description" content={siteConfig?.description || "Personal Portfolio"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* More gray background for the entire page */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Dynamic Navigation with better accessibility */}
        <nav 
          className="w-full flex items-center justify-between py-4 px-4 sm:px-8 bg-gray-200/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md fixed top-0 left-0 z-50"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-2">
            <Image 
              src={siteConfig?.logo || "/logo.png"} 
              alt="Logo" 
              width={40} 
              height={16} 
              className="dark:invert" 
            />
          </div>
          <ul className="flex gap-6 items-center" role="menubar">
            {navigationItems?.map((item) => (
              <li key={item.name} role="none">
                <a 
                  href={item.href} 
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                  role="menuitem"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content with proper spacing for fixed nav */}
        <main className="pt-40">
          {/* Dynamic Hero Section */}
          <div className="flex flex-col items-center text-center py-16 px-4 sm:px-8 lg:px-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello, I'm {personalInfo?.name || "Developer"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
              {personalInfo?.tagline || "Welcome to my portfolio"}
            </p>
            <a
              href="#contact"
              className="px-6 py-3 inline-block text-center border border-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Dynamic About Section */}
          <section id="about" className="flex flex-col items-center gap-8 py-16 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <div className="text-gray-600 dark:text-gray-400 max-w-5xl text-justify">
              <p className="mb-4">{aboutMe?.introduction || ""}</p>
              {aboutMe?.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mb-2">
                  - {paragraph}
                </p>
              )) || null}
            </div>

            {/* Dynamic Tech Stack Section */}
            <div className="relative flex w-full max-w-5xl flex-col sm:flex-row items-center justify-center overflow-hidden border border-gray-300 dark:border-gray-600 bg-gray-200/60 dark:bg-gray-800/60 shadow-md rounded-lg">
              <div className="flex flex-col w-full sm:w-1/4 flex-shrink-0 text-center p-6 border-b sm:border-b-0 sm:border-r border-gray-300 dark:border-gray-600">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h2>
                <p className="text-gray-600 dark:text-gray-400 pt-2">
                  Programming languages that I use
                </p>
              </div>

              <div className="relative w-full sm:w-3/4 overflow-hidden p-4">
                {marquee.length > 0 ? (
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {marquee.map((tech, index) => (
                      <TechCard key={`${tech.name}-${index}`} {...tech} />
                    ))}
                  </Marquee>
                ) : (
                  <p className="text-gray-500 text-center">No technologies to display</p>
                )}
              </div>
            </div>
          </section>

          {/* Dynamic Projects Section*/}
          <section id="projects" className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              Here are some of the projects I've worked on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
              {projects?.length > 0 ? projects.map((project, index) => (
                <ProjectCard key={`${project.id}-${index}`} project={project} />
              )) : (
                <p className="col-span-full text-gray-500 text-center">No projects to display</p>
              )}
            </div>
          </section>

          {/* Dynamic Education Section */}
          <section id="education" className="flex flex-col items-center gap-8 py-16 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              My academic background and learning journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
              {education?.length > 0 ? education.map((edu, index) => (
                <EducationCard key={`${edu.id}-${index}`} edu={edu} />
              )) : (
                <p className="col-span-full text-gray-500 text-center">No education information to display</p>
              )}
            </div>
            
            {/* Certifications Section */}
            {certifications && certifications.length > 0 && (
              <div className="w-full mt-8 max-w-5xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Certifications & Additional Training
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <CertificationCard key={`${cert.id}-${index}`} cert={cert} />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Dynamic Contact Section */}
          <section id="contact" className="flex flex-col items-center gap-8 py-16 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-5xl">
              <div className="flex flex-col md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Ready to build something amazing together? Drop me a line or connect with me on social media!
                </p>
                <img
                  src="/contact-illustration.svg"
                  alt="Contact illustration"
                  className="mt-8 w-full max-w-md h-60"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/2">
                {socialLinks?.length > 0 ? socialLinks.map((social, index) => (
                  <SocialCard key={`${social.id}-${index}`} social={social} />
                )) : (
                  <p className="col-span-full text-gray-500 text-center">No social links to display</p>
                )}
              </div>
            </div>
          </section>
        </main>
        
        {/* Dynamic Footer */}
        <footer className="flex flex-col items-center justify-center py-8 px-4 bg-gray-200 dark:bg-gray-800">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <span className="animate-pulse text-red-500">♥</span>
            <span>by {personalInfo?.name || "Developer"}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">© {footerInfo?.year || new Date().getFullYear()}</span>
          </div>
          {footerInfo?.repositoryText && footerInfo?.repositoryUrl && (
            <div className="mt-2 text-gray-400 dark:text-gray-500 italic text-sm text-center">
              {footerInfo.repositoryText} <a 
                href={footerInfo.repositoryUrl} 
                className="hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerInfo.repositoryUrl}
              </a>
            </div>
          )}
        </footer>
      </div>
    </>
  );
}