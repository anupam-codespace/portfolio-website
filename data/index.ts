/** Main nav links; used by FloatingNav for #about, #projects, #testimonials, #contact. */
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

/** Bento grid cells: layout (className), title, optional img/spareImg, used by Grid + BentoGridItem. */
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently engineering modern mobile apps & intuitive UI systems",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

/** Recent projects for RecentProjects section: title, description, cover img, tech icons, link. */
export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/anupam-codespace",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/anupam-codespace",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/anupam-codespace",
  },
  {
    id: 4,
    title: "Animated Apple iPhone 3D Showcase",
    des: "Recreated the Apple iPhone 15 Pro experience, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/anupam-codespace",
  },
];

/** Client quotes for InfiniteMovingCards in Clients section. */
export const testimonials = [
  {
    quote:
      "Collaborating with Anupam was an absolute pleasure. His professionalism, attention to detail, and expertise in crafting smooth, responsive mobile app interfaces were evident throughout our project. If you're seeking to elevate your mobile presence, Anupam is the ideal engineer.",
    name: "Alex Turner",
    title: "Product Lead at Horizon Apps",
  },
  {
    quote:
      "Anupam transformed our design prototypes into a flawless mobile experience. His depth of knowledge in mobile UI and frontend architecture delivered performance improvements right away. Highly recommended!",
    name: "Sarah Jenkins",
    title: "CTO at NexaFlow",
  },
  {
    quote:
      "Working with Anupam Saha made all the difference on our cross-platform project. Fast communication, clean code, and great initiative in solving complex UI challenges.",
    name: "David Chen",
    title: "Founder of Streamline Media",
  },
  {
    quote:
      "Anupam's dedication to building intuitive app interfaces and pixel-perfect layouts brought our vision to life. He consistently delivers on time and exceeds expectations.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Anupam is a remarkably skilled developer who takes pride in every facet of development. From mobile app UI to responsive web integration, he delivers top-tier results.",
    name: "Priya Sharma",
    title: "Head of Design at InnovateTech",
  },
];

/** Company logos row in Clients section (logo + name image). */
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

/** Work history cards for Experience section (title, description, thumbnail). */
export const workExperience = [
  {
    id: 1,
    title: "Mobile & Frontend Engineer Intern",
    desc: "Assisted in engineering intuitive user interfaces and optimizing performance across web and mobile platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    desc: "Designed and developed cross-platform mobile apps for iOS & Android, focusing on fluid app UI and state management.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Developer",
    desc: "Led end-to-end mobile app development for clients, from initial wireframes to production deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack App Developer",
    desc: "Architected and maintained user-facing features, integrating robust APIs with high-performance interactive interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

/** Footer social icons with verified profile links. */
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anupam-codespace",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AnupamSaha070",
    name: "X (Twitter)",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anupam-saha-3a997321b/",
    name: "LinkedIn",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://instagram.com/anuragsaha02",
    name: "Instagram",
  },
];
