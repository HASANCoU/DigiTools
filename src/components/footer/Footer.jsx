import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#101727] px-50 pt-30 pb-8'>
            <div className='text-white grid grid-cols-5 gap-12'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>DigiTools</h1>
                    <p className='leading-6 text-xs'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-xl'>Products</h2>
                    <ul className='text-xs space-y-4'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li href="#"><a>Templates</a></li>
                        <li href="#"><a>Integrations</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-xl'>Company</h2>
                    <ul className='text-xs space-y-4'>
                        <li><a href=""></a>About</li>
                        <li><a href=""></a>Blog</li>
                        <li><a href=""></a>Careers</li>
                        <li><a href=""></a>Press</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-xl'>Resources</h2>
                    <ul className='text-xs space-y-4'>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-xl'>Social links</h2>
                    <ul className='flex gap-7'>
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                    </ul>
                </div>
            </div>


                 <hr className='text-gray-500 mt-20 mb-6'></hr>


            <div className=' grid grid-cols-2 text-[#fafafa] leading-6 text-[16px]'>
                <div><p>© 2026 Digitools. All rights reserved.</p></div>

                <div>
                    <ul className='flex justify-end gap-6 items-center'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Services</a></li>
                        <li><a href="#">Cookies</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;