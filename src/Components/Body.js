import React from 'react';

const Body = () => {
    return (
        <div className='mx-10 md:mx-40'>
            <p className='font-semibold'>UI/UX {'>'} Refer & Earn {'>'} Friends Referred </p>
            <div className='flex justify-between mt-8'>
                <div>
                    <p className='text-[#800080]'>Your Referral Code </p>
                    <p className='tracking-[10px] border px-3 py-2 rounded-lg'>EDCH54</p>
                </div>
                <div className='px-3 pt-2 rounded-lg border border-gray-200 shadow-md'>
                    <p className='text-[#800080]'>Wallet Balance</p>
                    <p>₹ 500</p>
                </div>
            </div>
            <div className='mt-12'>
                <p className='font-semibold text-xl text-[#800080] mb-3'>Friends who enrolled<span className='text-gray-400'>(3)</span> </p>
                <div className='lg:flex justify-between'>
                    <div className='bg-gradient-to-r from-[#ff864c] to-[#800080] rounded-2xl p-4 text-white my-2'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-xl lg:mr-24'>Dhiraj Saxsena</p>
                            <p>14 Sep, 2022</p>
                        </div>
                        <p>Courses Enrolled(6)</p>
                        <div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>UI/UX</p>
                                <p className='border rounded-lg px-2 m-1'>Photoshop</p>
                                <p className='border rounded-lg px-2 m-1'>Illustrator</p>
                            </div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>Python</p>
                                <p className='border rounded-lg px-2 m-1'>MERN</p>
                                <p className='border rounded-lg px-2 m-1'>Java</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p>Referral Amount </p>
                            <p className='text-2xl ml-3'>₹185</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#ff864c] to-[#800080] rounded-2xl p-4 text-white my-2'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-xl  lg:mr-20'>Subhash Mishra</p>
                            <p>15 Sep, 2022</p>
                        </div>
                        <p>Courses Enrolled(23)</p>
                        <div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>UI/UX</p>
                                <p className='border rounded-lg px-2 m-1'>Photoshop</p>
                                <p className='border rounded-lg px-2 m-1'>Illustrator</p>
                            </div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>Python</p>
                                <p className='border rounded-lg px-2 m-1'>MERN</p>
                                <p className='border rounded-lg px-2 m-1'>Java</p>
                                <p className='border rounded-lg px-2 m-1'>C++</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p>Referral Amount </p>
                            <p className='text-2xl ml-3'>₹185</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#ff864c] to-[#800080] rounded-2xl p-4 text-white my-2'>
                    <p className='font-semibold text-xl'>Prafull Kumar</p>
                        <p>Courses Enrolled(23)</p>
                        <div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>UI/UX</p>
                                <p className='border rounded-lg px-2 m-1'>Photoshop</p>
                                <p className='border rounded-lg px-2 m-1'>Illustrator</p>
                            </div>
                            <div className='flex'>
                                <p className='border rounded-lg px-2 m-1'>Python</p>
                                <p className='border rounded-lg px-2 m-1'>MERN</p>
                                <p className='border rounded-lg px-2 m-1'>Java</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p>Referral Amount </p>
                            <p className='text-2xl ml-3'>₹485</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='mt-12 font-semibold text-[#800080]'>Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Body;