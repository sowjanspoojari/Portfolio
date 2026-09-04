import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
    const { education, certifications } = portfolioData;

    return (
        <SectionWrapper id="education" className="bg-white dark:bg-slate-950">
            <div className="grid lg:grid-cols-2 gap-16">

                {/* Education Timeline */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white flex items-center">
                        <GraduationCap className="mr-3 text-primary-500" size={32} />
                        Education
                    </h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2">
                                    <div className="w-2.5 h-2.5 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                                </div>

                                {/* Timeline content */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] card hover:-translate-y-1 transition-transform cursor-default ml-10 md:ml-0 bg-slate-50 dark:bg-slate-900 shadow-sm border-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1">{item.degree}</h3>
                                        <div className="flex items-center text-xs font-medium text-slate-500 bg-slate-200/50 dark:bg-slate-800 px-2.5 py-1 rounded-md shrink-0">
                                            <Calendar size={12} className="mr-1" />
                                            {item.year}
                                        </div>
                                    </div>
                                    <div className="text-primary-600 dark:text-primary-400 font-medium mb-3 flex items-center text-sm">
                                        <MapPin size={14} className="mr-1" />
                                        {item.institution}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                                        {item.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.coursework.map((course, cIdx) => (
                                            <span key={cIdx} className="px-2 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications List */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white flex items-center">
                        <Award className="mr-3 text-indigo-500" size={32} />
                        Certifications
                    </h2>

                    <div className="grid gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="card flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-l-4 border-l-indigo-500 hover:border-l-indigo-400 transition-colors"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                            >
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{cert.title}</h3>
                                    <div className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center gap-3">
                                        <span className="flex items-center">
                                            <Award size={14} className="mr-1 text-slate-400" />
                                            {cert.issuer}
                                        </span>
                                        <span className="flex items-center text-xs">
                                            <Calendar size={12} className="mr-1 text-slate-400" />
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>

                                {cert.link && cert.link !== "#" && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="shrink-0 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg transition-colors"
                                    >
                                        View Credential
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </SectionWrapper>
    );
};

export default Education;
