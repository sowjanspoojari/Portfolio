import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const { skills } = portfolioData;

    const skillCategories = [
        { title: 'Languages', data: skills.languages, color: 'bg-blue-500' },
        { title: 'Frontend', data: skills.frontend, color: 'bg-emerald-500' },
        { title: 'Backend & DB', data: [...skills.backend, ...skills.database], color: 'bg-purple-500' },
        { title: 'Tools & Others', data: skills.tools, color: 'bg-amber-500' },
    ];

    return (
        <SectionWrapper id="skills" className="bg-white dark:bg-slate-950">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="section-title mb-4">
                        Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600">Skills</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        A comprehensive overview of my technical expertise, languages, frameworks, and tools I use to build robust applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
                                <span className={`w-3 h-3 rounded-full mr-3 ${category.color}`}></span>
                                {category.title}
                            </h3>

                            <div className="space-y-5">
                                {category.data.map((skill, skillIdx) => (
                                    <div key={skillIdx}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                                            <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                            <motion.div
                                                className={`h-2.5 rounded-full ${category.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1) }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default Skills;
