import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Github, ExternalLink, Mail, Linkedin, Terminal, Send, ArrowRight, X, ArrowUp } from 'lucide-react';
import HeroSection from './HeroSection';
import Footer from './Footer';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [activeSection, setActiveSection] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    // const [activeLetter, setActiveLetter] = useState(-1);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "POS Dashboard",
            description: "Full-stack dashboard with real-time analytics, sales tracking, and inventory management.",
            longDescription: "A comprehensive point-of-sale management system featuring real-time analytics, sales tracking, inventory management, and seamless multi-user support. Ideal for businesses looking to optimize their operations and gain actionable insights.",
            tags: ["Bootstrap", "PHP", "MySQL", "WebSocket"],
            link: "https://fb.freshbitepastries.com",
            github: "#",
            image: "freshbite.png",
            features: [
                "Real-time sales analytics",
                "Inventory management system",
                "Multi-user support",
                "Customizable dashboards",
                "WebSocket-based live updates"
            ],
            stats: {
                commits: 120,
                contributors: 1,
                stars: 30,
                forks: 10
            }
        },
        {
            title: "Online Digital Skill Acquisition Platform",
            description: "Web application for easy digital skill learning and skill acquisition.",
            longDescription: "A user-friendly platform for learning digital skills. Offers a wide range of courses, progress tracking, and interactive learning experiences, designed to empower individuals with practical knowledge.",
            tags: ["React", "NodeJs", "RESTApi"],
            link: "#",
            github: "https://tutourly.vercel.app/",
            image: "tutourly.png",
            features: [
                "Wide range of digital skill courses",
                "Progress tracking",
                "Interactive learning modules",
                "User-friendly interface",
                "REST API integration"
            ],
            stats: {
                commits: 40,
                contributors: 1,
                stars: 10,
                forks: 15
            }
        },
        {
            title: "Event Memory Collections Storage",
            description: "Reministr is a platform designed to preserve and organize cherished memories, events, and collaborations. Built with a NodeJs backend, it provides a seamless, social media-like workspace for teams and individuals to store and share meaningful moments.",
            longDescription: "An innovative platform for preserving and organizing cherished memories. Designed with a Notion-like interface, it supports collaboration, event management, and seamless storage for meaningful moments, powered by a robust Nodejs and Express Framework.",
            tags: ["React", "NodeJS", "Redux", "ContextAPI"],
            link: "https://reministr.com",
            github: "#",
            image: "reministr.png",
            features: [
                "Social media-like workspace",
                "Collaboration tools",
                "Event memory organization",
                "Context API for state management",
                "Robust NodeJS backend"
            ],
            stats: {
                commits: 150,
                contributors: 1,
                stars: 80,
                forks: 20
            }
        }
    ];

    const skills = {
        "Frontend": ["JavaScript/TypeScript", "React.js", "TailwindCSS/Bootstrap", "HTML/CSS"],
        "Backend": ["PHP", "Python", "C#", "Node.js"],
        "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
        "DevOps": ["AWS in view", "Docker in view", "CI/CD", "Git"],
        "Frameworks": [".NET Core", "Laravel", "FastAPI", "Express"],
        "Testing": ["PHPUnit", "Jest", "PyTest", "xUnit"]
    };

    const blogPosts = [
        {
            title: "Building Scalable APIs with FastAPI and Python",
            date: "2024-01-10",
            excerpt: "Learn how to create high-performance APIs using Python's FastAPI framework...",
            link: "#"
        },
        {
            title: "Modern Authentication Patterns in .NET Core",
            date: "2024-01-05",
            excerpt: "Implementing secure authentication using the latest .NET Core features...",
            link: "#"
        },
        {
            title: "PHP 8.3: What's New and Exciting",
            date: "2023-12-28",
            excerpt: "Exploring the latest features and improvements in PHP 8.3...",
            link: "#"
        }
    ];

    const ProjectModal = ({ project, onClose }) => (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ArrowRight className="h-4 w-4 text-blue-500" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Project Stats</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                                <div key={key} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                    <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                                        {key}
                                    </div>
                                    <div className="text-2xl font-bold">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <motion.a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github className="h-4 w-4" />
                        View Code
                    </motion.a>
                    <motion.a
                        href={project.link}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            setContactForm({ name: '', email: '', message: '' });
        }, 3000);
    };

    const pageTransition = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
            <nav className="fixed w-full backdrop-blur-sm bg-opacity-70 z-10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Terminal className="h-6 w-6" />
                        <div className="hidden md:flex gap-6">
                            {['home', 'projects', 'blog', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => { setActiveSection(section); console.log(section) }}
                                    className={`capitalize ${activeSection === section ? 'text-blue-500' : ''}`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence mode="wait">
                <motion.main
                    className="container mx-auto px-6 pt-24 pb-12"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageTransition}
                >
                    {/* Hero Section */}
                    {/* <motion.section
                        className="py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Mustapha O. Babalola</h1>
                        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Full-Stack Software Engineer</h2>
                        <p className="text-lg max-w-2xl mb-8">
                            I craft robust and scalable applications using PHP, JavaScript, Python and C#.
                            Specialized in building high-performance web applications and APIs.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/curlybrayce"
                                className="p-2 hover:text-blue-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                title='https://github.com/curlybrayce'
                            >
                                <Github className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/iamvirus/"
                                title="https://www.linkedin.com/in/iamvirus/"
                                className="p-2 hover:text-blue-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                title='tiivirus96@gmail.com'
                                href="mailto:tiivirus96@gmail.com"
                                className="p-2 hover:text-blue-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="h-6 w-6" />
                            </motion.a>
                        </div>
                    </motion.section> */}

                    <HeroSection />

                    {/* Skills Section */}
                    <motion.section
                        className="py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        id='skills'
                        name='skills'
                    >
                        <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(skills).map(([category, categorySkills]) => (
                                <div key={category} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    <h4 className="font-semibold mb-4">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Projects Section */}
                    <motion.section
                        className="py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        id='projects'
                        name='projects'
                    >
                        <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.title}
                                    className="group relative p-6 rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer"
                                    whileHover={{ y: -5 }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.github}
                                            className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <Github className="h-4 w-4" />
                                            <span>Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.link}
                                            className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span>Demo</span>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <AnimatePresence>
                        {selectedProject && (
                            <ProjectModal
                                project={selectedProject}
                                onClose={() => setSelectedProject(null)}
                            />
                        )}
                    </AnimatePresence>

                    {/* Blog Section */}
                    {/* <motion.section
                        className="py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        id='#blog'
                    >
                        <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {blogPosts.map((post) => (
                                <motion.article
                                    key={post.title}
                                    className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800"
                                    whileHover={{ y: -5 }}
                                >
                                    <time className="text-sm text-gray-600 dark:text-gray-400">{post.date}</time>
                                    <h4 className="text-xl font-semibold my-3">{post.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <motion.a
                                        href={post.link}
                                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.a>
                                </motion.article>
                            ))}
                        </div>
                    </motion.section> */}

                    {/* Contact Section */}
                    <motion.section
                        className="py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        id='#contact'
                    >
                        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                        <form onSubmit={handleSubmit} className="max-w-2xl">
                            <div className="mb-6">
                                <label className="block mb-2">Name</label>
                                <input
                                    type="text"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2">Message</label>
                                <textarea
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 min-h-[150px]"
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                                <Send className="h-4 w-4" />
                            </motion.button>

                            <AnimatePresence>
                                {showSuccessMessage && (
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 bg-green-500 text-white p-4 rounded-lg"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        Message sent successfully!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.section>
                </motion.main>
            </AnimatePresence>
            <Footer />
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </div >
    );
};

export default Portfolio;