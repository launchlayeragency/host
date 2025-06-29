import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { FaCloud, FaHdd, FaMemory } from 'react-icons/fa';
import TabButton from '../ResellerHosting/TabButton';
import PlanCardVPS from './PlanCardVPS';


export default function VPSPlan() {
    const [vpsPlanType, setVpsPlanType] = useState('ssd');
    const [isLoading, setIsLoading] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const handleTabChange = (type) => {
        setIsLoading(true);
        setShowContent(false);
        setVpsPlanType(type);
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

    const vpsPlans = {
        ssd: [
            {
                name: 'VPS SSD 1',
                price: '1.99',
                period: 'Mo',
                specs: ['OpenStack KVM', '1 vCore(s)', 'From 2 GHz', '2 GB RAM', '20 GB SSD']
            },
            {
                name: 'VPS SSD 2',
                price: '2.99',
                period: 'Mo',
                specs: ['OpenStack KVM', '1 vCore(s)', 'From 2 GHz', '2 GB RAM', '20 GB SSD'],
                featured: true
            },
            {
                name: 'VPS SSD 3',
                price: '7.99',
                period: 'Mo',
                specs: ['OpenStack KVM', '1 vCore(s)', 'From 2 GHz', '2 GB RAM', '20 GB SSD']
            }
        ],
        cloud: [
            {
                name: 'VPS Cloud 1',
                price: '2.49',
                period: 'Mo',
                specs: ['Cloud Infrastructure', '2 vCore(s)', 'From 2.5 GHz', '4 GB RAM', '40 GB SSD']
            },
            {
                name: 'VPS Cloud 2',
                price: '4.99',
                period: 'Mo',
                specs: ['Cloud Infrastructure', '2 vCore(s)', 'From 2.5 GHz', '4 GB RAM', '40 GB SSD'],
                featured: true
            },
            {
                name: 'VPS Cloud 3',
                price: '9.99',
                period: 'Mo',
                specs: ['Cloud Infrastructure', '2 vCore(s)', 'From 2.5 GHz', '4 GB RAM', '40 GB SSD']
            }
        ],
        ram: [
            {
                name: 'VPS RAM 1',
                price: '3.99',
                period: 'Mo',
                specs: ['High Memory', '1 vCore(s)', 'From 3 GHz', '8 GB RAM', '30 GB SSD']
            },
            {
                name: 'VPS RAM 2',
                price: '6.99',
                period: 'Mo',
                specs: ['High Memory', '1 vCore(s)', 'From 3 GHz', '8 GB RAM', '30 GB SSD'],
                featured: true
            },
            {
                name: 'VPS RAM 3',
                price: '12.99',
                period: 'Mo',
                specs: ['High Memory', '1 vCore(s)', 'From 3 GHz', '8 GB RAM', '30 GB SSD']
            }
        ]
    };

    return (
        <section className="py-24 bg-white" id="vpsHosting">
            <div className="w-[85%] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        High Performance VPS Hosting
                    </h2>
                    <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%] mx-auto">
                        ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
                    </p>
                </div>

                <div className="flex justify-center mb-20">
                    <div className="flex bg-slate-200  rounded-lg ">
                        <TabButton active={vpsPlanType === 'ssd'} onClick={() => handleTabChange('ssd')}>
                           
                            VPS SSD
                        </TabButton>
                        <TabButton active={vpsPlanType === 'cloud'} onClick={() => handleTabChange('cloud')}>
                            
                            VPS Cloud
                        </TabButton>
                        <TabButton active={vpsPlanType === 'ram'} onClick={() => handleTabChange('ram')}>
                           
                            VPS RAM
                        </TabButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 min-h-[300px]">
                    {isLoading ? (
                        <div className="col-span-full flex justify-center items-center">
                            <BounceLoader
                                color="#0d9488"
                                height={15}
                                width={5}
                                radius={2}
                                margin={2}
                            />
                        </div>
                    ) : showContent ? (
                        vpsPlans[vpsPlanType].map((plan, index) => (
                            <PlanCardVPS key={index} plan={plan} />
                        ))
                    ) : null}
                </div>
            </div>
        </section>
    );
}