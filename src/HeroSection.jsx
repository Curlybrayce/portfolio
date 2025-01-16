import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Footer from './Footer';


const MatrixRainText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        // Delay the start of animation
        setTimeout(() => {
            interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(prev => {
                        const scrambled = Array.from({ length: text.length - currentIndex }, () =>
                            characters[Math.floor(Math.random() * characters.length)]
                        ).join('');
                        return text.slice(0, currentIndex) + scrambled;
                    });
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
        }, delay);

        return () => clearInterval(interval);
    }, [text, delay]);

    return <span>{displayText}</span>;
};
const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);


    // Replace these with your actual image URLs
    const images = [
        "https://media.licdn.com/dms/image/v2/C5603AQEoskeU5Pg77Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660750662087?e=1742428800&v=beta&t=8T8cI0z8Ihp7Uu3jbl1hmPife0D1xwBgCqs_XIw-318",
        "https://media.licdn.com/dms/image/v2/C5603AQEoskeU5Pg77Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660750662087?e=1742428800&v=beta&t=8T8cI0z8Ihp7Uu3jbl1hmPife0D1xwBgCqs_XIw-318",
        "https://media.licdn.com/dms/image/v2/C5603AQEoskeU5Pg77Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660750662087?e=1742428800&v=beta&t=8T8cI0z8Ihp7Uu3jbl1hmPife0D1xwBgCqs_XIw-318"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.section
            className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            {/* Text Content */}
            <div>
                <h1 className="text-5xl font-bold mb-6">Mustapha O. Babalola </h1>
                <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
                    <MatrixRainText text="Full-Stack Software Engineer" delay="1000" />
                </h2>
                <p className="text-lg max-w-2xl mb-8">
                    I specialize in crafting robust and scalable applications using PHP, JavaScript (Node.js, React, TypeScript), Python (Django, Flask), and C# (.NET Core). With a strong focus on high-performance web applications, APIs, and user-centric solutions, I bring expertise in full-stack development, session management, and role-based authorization.
                    I’m passionate about solving complex problems, exploring emerging technologies like Web3 and blockchain, and creating innovative tools like text editors and event service apps. My work reflects a commitment to quality, adaptability, and delivering impactful software solutions.
                </p>
                <div className="flex gap-4">
                    <motion.a
                        href="https://github.com/curlybrayce"
                        className="p-2 hover:text-blue-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title='https://github.com/curlybrayce'
                        target='_blank'
                    >
                        <Github className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/mustapha-babalola"
                        title="linkedin.com/in/mustapha-babalola"
                        className="p-2 hover:text-blue-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target='_blank'
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
            </div>

            {/* Image Carousel */}
            <div className="relative group">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={`Profile ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                            onClick={previousImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </motion.button>
                        <motion.button
                            onClick={nextImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </motion.button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentImage === index
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </motion.section>
    );
};

export default HeroSection;