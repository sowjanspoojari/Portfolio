import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import portfolioData from '../../data/portfolio_data.json';

const Footer: React.FC = () => {
    const { personal } = portfolioData;

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 mb-2">
                            {personal.name}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md">
                            {personal.title}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={personal.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personal.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={personal.social.email}
                            className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center">
                        Made with <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
