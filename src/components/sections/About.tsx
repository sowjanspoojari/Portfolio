import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import { Code2, Server, Lightbulb, Database } from 'lucide-react';

const About: React.FC = () => {
    const { about } = portfolioData;

    const interestsIcons = [
        <Code2 size={24} className="text-primary-500" />,
        <Lightbulb size={24} className="text-yellow-500" />,
        <Server size={24} className="text-green-500" />,
        <Database size={24} className="text-indigo-500" />,
    ];

    return (
        <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p>
                            {about.background}
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and always striving to learn more. The intersection
                            of intuitive frontend design and robust backend architecture is where I find my greatest passion.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Core Interests</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {about.interests.map((interest, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                        <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                                            {interestsIcons[index % interestsIcons.length]}
                                        </div>
                                        <span className="font-medium text-slate-800 dark:text-slate-200">{interest}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="card border-l-4 border-l-primary-500 relative z-10 transition-transform duration-300 hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Quick Facts</h3>

                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                                    <span className="text-slate-500">Degree</span>
                                    <span className="font-medium text-slate-900 dark:text-white">MCA Student</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                                    <span className="text-slate-500">Focus</span>
                                    <span className="font-medium text-slate-900 dark:text-white text-right">Full-Stack Development</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                                    <span className="text-slate-500">Location</span>
                                    <span className="font-medium text-slate-900 dark:text-white">{portfolioData.personal.location}</span>
                                </li>
                                <li className="flex justify-between items-center pt-1">
                                    <span className="text-slate-500">Availability</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                                        Open to opportunities
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute top-4 -right-4 w-full h-full border-2 border-primary-200 dark:border-primary-900 rounded-xl -z-10" />
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default About;
