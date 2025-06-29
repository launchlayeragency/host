import React, { useState, useEffect } from 'react'
import TabButton from './TabButton';
import ResellerPlanCard from './ResellerPlanCard';
import img1 from "../../../assets/hplan_icon01.png"
import img2 from "../../../assets/hplan_icon02.png"
import img3 from "../../../assets/hplan_icon03.png"
import { FaLinux, FaWindows } from 'react-icons/fa';
import { BounceLoader } from 'react-spinners';

export default function ResellerPlan() {
    const [resellerPlanType, setResellerPlanType] = useState('linux');
    const [isLoading, setIsLoading] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const handleTabChange = (type) => {
        setIsLoading(true);
        setShowContent(false);
        setResellerPlanType(type);
    };

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                setShowContent(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const resellerPlans = {
        linux: [
            {
                name: 'Shared',
                price: '1.99',
                period: 'Mo',
                totalPrice: 'Total $109.99 every two years',
                discount: 'Save 30%',
                img: img1
            },
            {
                name: 'Dedicated',
                price: '2.99',
                period: 'Mo',
                totalPrice: 'Total $299.99 every two years',
                discount: 'Save 20%',
                img: img2
            },
            {
                name: 'VPN',
                price: '3.99',
                period: 'Mo',
                totalPrice: 'Total $399.99 every two years',
                discount: 'Save 10%',
                img: img3
            }
        ],
        windows: [
            {
                name: 'Shared',
                price: '1.99',
                period: 'Mo',
                totalPrice: 'Total $109.99 every two years',
                discount: 'Save 30%',
                img: img1
            },
            {
                name: 'Dedicated',
                price: '2.99',
                period: 'Mo',
                totalPrice: 'Total $299.99 every two years',
                discount: 'Save 20%',
                img: img2
            },
            {
                name: 'VPN',
                price: '3.99',
                period: 'Mo',
                totalPrice: 'Total $399.99 every two years',
                discount: 'Save 10%',
                img: img3
            }
        ]
    };

    return (
        <section className="py-24 bg-white">
            <div className="w-[85%] mx-auto">
                {/* Section Header............... */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        High Performance Reseller Hosting
                    </h2>
                    <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
                        ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
                    </p>
                </div>
                <div className=''>
                    <div className="flex justify-center mb-16">
                        <div className="flex bg-gray-100 rounded">
                            <TabButton
                                active={resellerPlanType === 'linux'}
                                onClick={() => handleTabChange('linux')}
                            >
                                <FaLinux className="w-4 h-4 inline mr-2" />
                                Linux Plans
                            </TabButton>
                            <TabButton
                                active={resellerPlanType === 'windows'}
                                onClick={() => handleTabChange('windows')}
                            >
                                <FaWindows className="w-4 h-4 inline mr-2" />
                                Windows Plans
                            </TabButton>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
                        {isLoading ? (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center">
                                <BounceLoader
                                    color="#0d9488"  
                                    height={15}
                                    width={5}
                                    radius={2}
                                    margin={2}
                                />
                            </div>
                        ) : showContent ? (
                            resellerPlans[resellerPlanType].map((plan, index) => (
                                <ResellerPlanCard key={index} plan={plan} index={index} />
                            ))
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}