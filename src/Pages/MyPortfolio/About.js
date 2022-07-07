import React from 'react';

const About = () => {
    return (
        <div className='lg:flex justify-center'>

            <div class="card lg:max-w-xl lg:h-90 bg-base-100 shadow-xl my-10">

                <h2 className='text-2xl text-center font-bold text-primary uppercase'>About</h2>

                <div class="card-body pt-5">
                    <h2 class="card-title">Shakshor Sarker</h2>
                    <p class="text-lg"><span className='text-primary font-semibold'>Education:</span> BSc Eng. in CSE<br></br><span className='md:ml-20 lg:ml-20'>Sylhet Engineering College</span></p>
                    <p class="text-lg"><span className='text-primary font-semibold'>Email:</span> shakshor584@gmail.com</p>
                    <h2 class="card-title"><span className='text-primary'>Skills:</span></h2>
                    <ul className='list-disc list-inside lg:pb-5'>
                        <li><strong>Front End: </strong>
                            JavaScript,ES6,React,Bootstrap
                        </li>
                        <li><strong>Back End:</strong>
                            Express</li>
                        <li><strong>Database: </strong>
                            MongoDB</li>
                        <li><strong>Familiar With: </strong>Tailwind CSS, Firebase Auth, Heroku, Netlify, JWT</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;