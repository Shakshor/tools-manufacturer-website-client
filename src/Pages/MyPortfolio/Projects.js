import React from 'react';
import project1 from '../../assets/images/projects/s_tools.png';
import project2 from '../../assets/images/projects/s_photography.png';
import project3 from '../../assets/images/projects/fruits_warehouse.png';

const Projects = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-2xl text-center mt-10 mb-5 font-bold text-primary uppercase'>Projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* ---------- project-1 ----------- */}
                <div className="hero h-80 shadow-xl" style={{ backgroundImage: `url(${project1})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">DAILY TOOLS</h1>
                            <a className="btn btn-primary" target='_blank' href='https://tools-manufacturer-810ef.web.app/'>Live Website</a>
                        </div>
                    </div>
                </div>
                {/* ---------- project-2 ----------- */}
                <div className="hero h-80 shadow-xl" style={{ backgroundImage: `url(${project2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">S-PHOTOGRAPHY</h1>
                            <a className="btn btn-primary" target='_blank' href='https://independent-sports-photography.web.app/'>Live Website</a>
                        </div>
                    </div>
                </div>
                {/* ---------- project-3 ----------- */}
                <div className="hero h-80 shadow-xl" style={{ backgroundImage: `url(${project3})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">FRUITS-WAREHOUSE</h1>
                            <a className="btn btn-primary" target='_blank' href='https://fruits-management-system.web.app/manage'>Live Website</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;