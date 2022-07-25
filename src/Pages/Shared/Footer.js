import React from 'react';

const Footer = () => {
    return (
        <footer class="p-10 bg-neutral text-neutral-content">
            <div className='footer'>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Wood Tools</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                </div>
                <div>
                    <span class="footer-title">Social</span>
                    <div class="grid grid-flow-col gap-4">
                        <a target='_blank' className='link' href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>

            </div >
            <div className='text-center mt-10'>
                <p>Copyright ©{new Date().getUTCFullYear()} - All right reserved by STOOLS</p>
            </div>
        </footer >
    );
};

export default Footer;