import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink } from 'lucide-react';

const CodingProfiles: React.FC = () => {
    const { codingProfiles } = portfolioData;

    const getIconForPlatform = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'github':
                return <Github size={32} className="text-slate-800 dark:text-white" />;
            case 'leetcode':
                return <Code size={32} className="text-yellow-500" />;
            // case 'hackerrank':
            //     return <TerminalSquare size={32} className="text-green-500" />;
            default:
                return <Code size={32} className="text-primary-500" />;
        }
    };

    return (
        <SectionWrapper id="coding-profiles" className="bg-white dark:bg-slate-950 py-16 md:py-20 border-t border-slate-100 dark:border-slate-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
                    Coding <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600">Profiles</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {codingProfiles.map((profile, idx) => (
                        <motion.a
                            key={idx}
                            href={profile.url}
                            target="_blank"
                            rel="noreferrer"
                            className="card bg-slate-50 dark:bg-slate-900 group hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-between p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 group-hover:shadow-md transition-shadow">
                                    {getIconForPlatform(profile.platform)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {profile.platform}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {profile.stats}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink size={20} className="text-slate-300 dark:text-slate-700 group-hover:text-primary-500 transition-colors" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CodingProfiles;
