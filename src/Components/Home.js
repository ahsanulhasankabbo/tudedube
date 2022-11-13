import React from 'react';
import friends from './images/Vector.png';
import purchase from './images/Vector (1).png';
import doller from './images/₹.png';
import get from './images/Vector (2).png';
import transfer from './images/Vector (3).png';

const Home = () => {
    return (
        <div className='mx-10 md:mx-40'>
            <p>UI/UX {'>'} Refer & Earn </p>
            <div className='lg:flex justify-between mt-10'>
                <div className='p-4 rounded-2xl border border-gray-200 shadow-xl'>
                    <div className='flex'>
                        <div>
                            <p className='text-[#800080]'>Referral Earning</p>
                            <h1 className='text-2xl font-semibold'>₹ 2,500</h1>
                        </div>
                        <div className='lg:mx-16'>
                            <p className='text-[#800080]'>Total Referrals</p>
                            <h1 className='text-2xl font-semibold'>7</h1>
                        </div>
                        <div>
                            <p className='text-[#800080]'>Wallet Balance</p>
                            <h1 className='text-2xl font-semibold'>₹ 500</h1>
                        </div>
                    </div>
                    <button className='bg-[#800080] text-white px-4 mt-6 py-1 rounded-2xl mx-auto'>Withdraw Balance</button>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-[#800080]'>Your Referral Code </h1>
                    <p className='tracking-[30px] text-[#800080] mt-4 border px-3 py-2 rounded-lg'>EDCH54</p>
                </div>
            </div>
            <div>
                <h1 className='text-2xl text-[#800080] font-semibold mt-7'>How does it work ?</h1>
                <div className='lg:flex my-5'>
                    <div className='flex items-center lg:mr-20'>
                        <p className='bg-gray-200 p-3 rounded-full mr-3'><img className='w-5 h-5' src={friends} alt="" /></p>
                        <div>
                            <p className='font-semibold'>Invite your Friends</p>
                            <p>Share the link tutedude.com <br /> with your friends</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='bg-gray-200 p-3 rounded-full mr-3'><img className='w-5 h-5' src={purchase} alt="" /></p>
                        <div>
                            <p className='font-semibold'>Friend purchases any course</p>
                            <p>Using your REFERRAL CODE in <br /> the payments page</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='flex items-center lg:mr-14'>
                        <p className='bg-gray-200 p-3 rounded-full mr-3'><img className='w-5 h-5' src={doller} alt="" /></p>
                        <div>
                            <p className='font-semibold'>You get ₹ 200 as referral money</p>
                            <p>On total purchase the friend <br /> makes, into your wallet</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='bg-gray-200 p-3 rounded-full mr-3'><img className='w-5 h-5' src={get} alt="" /></p>
                        <div>
                            <p className='font-semibold'>Your Friend gets ₹ 200 Off </p>
                            <p>On his overall fee on successful <br /> purchase using your referral code </p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex items-center mt-5'>
                    <p className='bg-gray-200 p-3 rounded-full mr-3'><img className='w-5 h-5' src={transfer} alt="" /></p>
                    <div>
                        <p className='font-semibold'>Transfer money from wallet</p>
                        <p>When the wallet balance reaches <br /> ₹200 or more, you can withdraw it</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='mt-10 font-semibold text-[#800080]'>Friends Who Enrolled</p>
            </div>
            <div>
                <p className='my-5 font-semibold text-[#800080]'>Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Home;