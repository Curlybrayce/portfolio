import React from 'react'
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span>Built with</span>
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>using React & Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="http://mob.freshbitepastries.com" target='_blank' title='No SSL' className="hover:text-blue-500 transition-colors">Source</a>
                        <a href="tel:+2348164969155" className="hover:text-blue-500 transition-colors">Contact</a>
                        <a href="Mustapha Resume.pdf" download={true} className="hover:text-blue-500 transition-colors">Resume</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer