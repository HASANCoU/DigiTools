import React from 'react';

const WorkFlow = () => {
    return (
        <div className=' bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 py-4 md:py-30 text-white'>
            <div className='w-6/12 mx-auto text-center space-y-4'>
            <h1 className='font-extrabold text-4xl'>Ready to Transform Your Workflow?</h1>
            <p className='text-[16px] my-10'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex justify-center gap-4'>
                <button className='btn rounded-full bg-white text-purple-500'>Explore Products</button>
                <button className='btn rounded-full btn-outline text-white'>View Pricing</button>
            </div>
            <ul className='flex flex-col md:flex-row items-center justify-center md:list-disc space-x-8 text-[16px]'>
                <li className=' list-none'>14-day free trial</li>
                <li>No Credit Card Required</li>
                <li>Cancel Anytime</li>
            </ul>
        </div>
        </div>
    );
};

export default WorkFlow;