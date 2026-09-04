import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import portfolioData from '../../data/portfolio_data.json';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <SectionWrapper id="projects" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="section-title mb-4">
                    Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-600">Projects</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    A showcase of my recent work, demonstrating my problem-solving skills and ability to build full-stack applications.
                </p>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id || idx}
                        className="group card overflow-hidden flex flex-col p-0 border-0 shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300"
                        variants={cardVariants}
                    >
                        <div className="relative overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />

                            {/* Optional role badge floating on image */}
                            <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-sm">
                                {project.role}
                            </div>
                        </div>

                        <div className="p-6 md:p-8 flex-1 flex flex-col bg-white dark:bg-slate-950">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <Github size={18} className="mr-2" />
                                        Source Code
                                    </a>
                                )}

                                {project.liveUrl && project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-auto"
                                    >
                                        <ExternalLink size={18} className="mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
