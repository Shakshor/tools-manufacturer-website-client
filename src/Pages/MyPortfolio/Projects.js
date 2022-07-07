import React from 'react';
import project2 from '../../assets/images/projects/s_photography.png';
import project3 from '../../assets/images/projects/product_analysis.png';

const Projects = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-2xl text-center mt-10 mb-5 font-bold text-primary uppercase'>Projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* --------- project-1 --------------- */}
                <div class="card  lg:max-w-xl  bg-base-100 shadow-xl image-full ">
                    <figure><img className='w-full ' src={project2} alt="" /></figure>
                    <div class="card-body flex justify-center items-center">
                        <div>
                            <h2 className='text-3xl font-medium mb-5'>STOOLS</h2>
                            <div className='text-center'>
                                <a className="btn btn-primary" target='_blank' href='https://tools-manufacturer-810ef.web.app/'>Live Website</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------- project-2 --------------- */}
                <div class="card  lg:max-w-xl  bg-base-100 shadow-xl image-full ">
                    <figure><img className='w-full' src={project2} alt="" /></figure>
                    <div class="card-body flex justify-center items-center">
                        <div>
                            <h2 className='text-3xl font-medium mb-5'>S-Photography</h2>
                            <div className='text-center'>
                                <a className="btn btn-primary" target='_blank' href='https://independent-sports-photography.web.app/'>Live Website</a>
                            </div> </div>
                    </div>
                </div>
                {/* --------- project-3 --------------- */}
                <div class="card  lg:max-w-xl  bg-base-100 shadow-xl image-full rounded-none">
                    <figure><img className='w-full' src={project3} alt="" /></figure>
                    <div class="card-body flex justify-center items-center">
                        <div>
                            <h2 className='text-3xl font-medium mb-5'>Product Analysis</h2>
                            <div className='text-center'>
                                <a className="btn btn-primary" target='_blank' href='https://product-analysis-website-shakshor.netlify.app/'>Live Website</a>
                            </div> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;