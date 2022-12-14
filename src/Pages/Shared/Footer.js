import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 bg-primary text-white w-full">
            <div className='footer'>
                <div>
                    <span className="font-bold text-xl">Services</span>
                    <a className="link link-hover">Wood Tools</a>
                </div>
                <div>
                    <span className="font-bold text-xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="font-bold text-xl">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' className='link' href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>

            </div >
            <div className='text-center mt-10'>
                <p>Copyright ©{new Date().getUTCFullYear()} - All right reserved by <span className=' text-orange-500 uppercase font-serif'>daily</span><span className=''>TOOLS</span></p>
            </div>
        </footer >
    );
};

export default Footer;