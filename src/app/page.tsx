import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const techStack = [
  {
    name: "Python",
    img: "/python-logo.png",
  },
  {
    name: "JavaScript",
    img: "/javascript-logo.svg",
  },
  {
    name: "HTML",
    img: "/html-logo.svg",
  },
  {
    name: "CSS",
    img: "/css-logo.svg",
  },
  {
    name: "Laravel",
    img: "/laravel-logo.png",
  },
  {
    name: "Node.js",
    img: "/images/nodejs-logo.svg",
  },
  {
    name: "Next.js",
    img: "/next.svg",
  },
  {
    name: "TypeScript",
    img: "/images/typescript-logo.svg",
  },
  {
    name: "Go",
    img: "/images/go-logo.svg",
  },
  {
    name: "Java",
    img: "/java-logo.png",
  },
];

// Split into smaller groups - 3 items per row
const firstRow = techStack.slice(0, 3);
const secondRow = techStack.slice(3, 6);
const thirdRow = techStack.slice(6, 9);

const TechCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
        <Image src={img} alt="Tech logo" width={60} height={60} />
      </div>
    </figure>
  );
};

export default function Home() {
  return (
    <>
      <nav className="w-full flex items-center justify-between py-4 px-8 bg-white/80 dark:bg-gray-900/80 shadow-md fixed top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={40} height={16} className="dark:invert" />
        </div>
        <ul className="flex gap-6 items-center">
          <li>
            <a href="" className="text-gray-700 dark:text-gray-200 hover:underline">Home</a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:underline">About</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:underline">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-[-40px]">
          <Image
            className="dark:invert rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
            src="/Profile.JPG"
            alt="My Profile Picture"
            width={360}
            height={360}
            priority
          />
          <ul className="font-mono list-inside list-disc text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Piresabil Panji Wistyorafi.
            </li>
            <li className="tracking-[-.01em]">
              Informatics Engineering Student at Politeknik Harapan Bersama.
            </li>
          </ul>

          <div className="relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden border rounded-xl border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 shadow-md">

            <h2 className="text-2xl font-bold mt-4 mb-4 dark:text-white">My Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Here are some of the technologies I work with:
            </p>

            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
              {thirdRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>

          <div id="about" className="flex flex-col items-center gap-4 mt-8">
            <h2 className="text-2xl font-bold dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-5xl text-justify">
              I am a passionate software developer with a keen interest in building innovative solutions. I enjoy working with various technologies and continuously learning new skills.
              My journey in tech began with curiosity and a desire to solve real-world problems through code. Over the years, I have explored a wide range of programming languages and frameworks, from Python and JavaScript to Go and TypeScript. Each project I undertake is an opportunity to push my boundaries, experiment with new tools, and collaborate with talented individuals.
              I thrive in environments where creativity meets logic, and I believe that technology can empower people to achieve more. Whether it's developing web applications, automating workflows, or contributing to open-source projects, I am always eager to take on new challenges.
              Outside of coding, I enjoy reading about emerging tech trends, participating in hackathons, and sharing knowledge with the community. My goal is to make a positive impact through technology and inspire others to embark on their own coding adventures.
            </p>
          </div>

          <div id="projects" className="flex flex-col items-center gap-4 mt-8 max-w-5xl">
            <h2 className="text-2xl font-bold dark:text-white">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Here are some of the projects I've worked on:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="border rounded-xl p-4 shadow-md hover:shadow-lg flex flex-col items-center">
                <Image
                  src="/images/project1.png"
                  alt="Project 1 Screenshot"
                  width={320}
                  height={180}
                  className="rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold dark:text-white mb-2 text-left w-full">Daring Membaca</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-justify">
                  A simple and intuitive java based library app for those who want to read books.
                </p>
                <div className="flex justify-start gap-2 w-full mt-auto mb-2 sticky bottom-0 bg-white dark:bg-gray-900 z-10">
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Java</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Swing</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">MySQL</span>
                </div>
              </div>
              {/* Project 2 */}
              <div className="border rounded-xl p-4 shadow-md hover:shadow-lg flex flex-col items-center">
                <Image
                  src="/images/project2.png"
                  alt="Project 2 Screenshot"
                  width={320}
                  height={180}
                  className="rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold dark:text-white mb-2 text-left w-full">EN-ID Translator</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-justify">
                  AI powered English to Indonesian translator using Dataset from SEACROWD and Helsinki model for training.
                </p>
                <div className="flex justify-start gap-2 w-full mt-auto mb-2 sticky bottom-0 bg-white dark:bg-gray-900 z-10">
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">PyTorch</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Transformers</span>
                </div>
              </div>
              {/* Project 3 */}
              <div className="border rounded-xl p-4 shadow-md hover:shadow-lg flex flex-col items-center">
                <Image
                  src="/images/project3.png"
                  alt="Project 3 Screenshot"
                  width={320}
                  height={180}
                  className="rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold dark:text-white mb-2 text-left w-full">KueQ</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-justify">
                  E-commerce for selling electronic products with a user-friendly interface and secure payment options.
                </p>
                <div className="flex justify-start gap-2 w-full mt-auto mb-2 sticky bottom-0 bg-white dark:bg-gray-900 z-10">
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Laravel</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">PHP</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">MySQL</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="w-full flex flex-col items-center gap-6 mt-8 max-w-5xl">
            <h2 className="text-3xl font-bold dark:text-white">Let's Connect!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2 text-center">
              Ready to build something amazing together? Drop me a line or connect with me on social media!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-blue-500/10 dark:bg-blue-400/10 group-hover:bg-blue-500/20 transition-colors">
                    <Image
                      src="/email.svg"
                      alt="Email icon"
                      width={24}
                      height={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email Me</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Let's discuss your next project
                    </p>
                    <a
                      href="panjirafi96@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                      panjirafi96@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-gray-500/10 dark:bg-gray-400/10 group-hover:bg-gray-500/20 transition-colors">
                    <Image
                      src="/github.svg"
                      alt="GitHub icon"
                      width={24}
                      height={24}
                      className="text-gray-700 dark:text-gray-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">GitHub</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Check out my code & projects
                    </p>
                    <a
                      href="https://github.com/FUBARwithall"
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @FUBARwithall
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-blue-600/10 dark:bg-blue-400/10 group-hover:bg-blue-600/20 transition-colors">
                    <Image
                      src="/linkedin.png"
                      alt="LinkedIn icon"
                      width={24}
                      height={24}
                      className="text-blue-700 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">LinkedIn</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Let's network professionally
                    </p>
                    <a
                      href="https://linkedin.com/in/piresabil-panji-wistyorafi-187791315/"
                      className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /in/Piresabil Panji Wistyorafi
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-800/20 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all">
                    <Image
                      src="/instagram.png"
                      alt="Instagram icon"
                      width={24}
                      height={24}
                      className="text-pink-600 dark:text-pink-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Instagram</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Follow my creative journey
                    </p>
                    <a
                      href="https://instagram.com/justparadisffs"
                      className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @justparadisffs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/50 text-center">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                🚀 Open to freelance opportunities and exciting collaborations!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Let's turn your ideas into reality
              </p>
            </div>
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mmb-4">
        <div className="flex flex-col items-center w-full bg-white/80 dark:bg-gray-900/80 py-2">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>Made with</span>
              <span className="animate-pulse text-red-500">♥</span>
              <span>by Piresabil Panji Wistyorafi</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
            </div>
            <div className="mt-1 text-xs text-gray-400 dark:text-gray-600 italic">
              Built with Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </>
  );
}