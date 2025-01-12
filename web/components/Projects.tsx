import React from 'react'

const projects = [
    {
        name: 'App',
    },
    {
        name: 'Website',
    },
    {
        name: 'Front end',
    },
];

const Projects = () => {
    return (
        <>
            <section className="section_container flex justify-center">
                <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center w-[30%]">
                    <div>
                        Projects
                    </div>
                </div>
            </section>
            <section id="project-section" className="section_container flex justify-center">
                <div className="flex justify-between w-full">
                    {projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-black">
                                    <div className="min-w-[316px] min-h-[220px]">
                                        placeholder
                                    </div>
                                </div>
                                <div className="flex justify-center pt-4">
                                    {project.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects