import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero: React.FC = () => {
    const { personal } = portfolioData;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-400/20 dark:bg-primary-900/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-900/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        className="flex-1 text-center md:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm border border-primary-200 dark:border-primary-800/50">
                            👋 Welcome to my portfolio
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                            Hi, I'm <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                                {personal.name}
                            </span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6">
                            {personal.title}
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            {personal.summary}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a href="#projects" className="btn-primary w-full sm:w-auto group">
                                View My Work
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">
                                <Download size={18} className="mr-2" />
                                View Resume
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center md:justify-start gap-6">
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Connect:</span>
                            <a href={personal.social.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href={personal.social.email} className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative aspect-square">
                            {/* Profile Image with modern styling */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-3xl transform rotate-6 opacity-20 dark:opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-primary-600 rounded-3xl transform -rotate-3 opacity-20 dark:opacity-40" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                {/* Fallback image if no real image provided */}
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-400 to-indigo-500 rounded-full flex items-center justify-center text-5xl text-white font-bold shadow-inner mb-4">
                                        {personal.name.charAt(0)}
                                    </div>
                                    <p className="font-medium text-slate-500 dark:text-slate-400">Profile Image Space</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-slate-400 hover:text-primary-500 transition-colors">
                    <div className="w-8 h-12 rounded-full border-2 border-current flex justify-center p-2">
                        <div className="w-1.5 h-3 bg-current rounded-full animate-pulse" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
