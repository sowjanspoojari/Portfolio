import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const { personal } = portfolioData;

    return (
        <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-900">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="section-title mb-4">
                    Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600">Touch</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Interested in working together or just want to say hi? I'd love to hear from you.
                    Drop me an email or connect with me from anywhere in the world.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                    className="card bg-white dark:bg-slate-950 flex flex-col items-center text-center p-8 md:p-10 hover:-translate-y-1 transition-transform"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
                    <a href={personal.social.email} className="break-all text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {personal.email}
                    </a>
                </motion.div>

                <motion.div
                    className="card bg-white dark:bg-slate-950 flex flex-col items-center text-center p-8 md:p-10 hover:-translate-y-1 transition-transform"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">{personal.location}</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Open to remote work globally</p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
