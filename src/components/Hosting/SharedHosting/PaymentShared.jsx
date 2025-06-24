import React, { useState } from 'react'
import SharedPlanCard from './SharedPlanCard';
import ToggleSwitch from './ToggleSwitch';

export default function PaymentShared() {
  const [sharedPlanType, setSharedPlanType] = useState('monthly');

  const sharedPlans = {
    monthly: [
      {
        name: 'Starter',
        price: '2.59',
        period: 'Mo',
        totalPrice: 'Total $109.99 every years',
        discount: 'Save 30%',
        websites: '1',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed']
      },
      {
        name: 'Popular',
        price: '5.99',
        period: 'Mo',
        totalPrice: 'Total $166.99 every years',
        discount: 'Save 20%',
        websites: '1',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed'],
        popular: true
      },
      {
        name: 'Unlimited',
        price: '7.99',
        period: 'Mo',
        totalPrice: 'Total $399.99 every years',
        discount: 'Save 10%',
        websites: '1',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed']
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: '9.99',
        period: 'Yr',
        totalPrice: 'Total $199.99 every years',
        discount: 'Save 40%',
        websites: '2',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed']
      },
      {
        name: 'Popular',
        price: '59.99',
        period: 'Yr',
        totalPrice: 'Total $399.99 every years',
        discount: 'Save 40%',
        websites: '3',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed'],
        popular: true
      },
      {
        name: 'Unlimited',
        price: '99.99',
        period: 'Yr',
        totalPrice: 'Total $999.99 every years',
        discount: 'Save 50%',
        websites: '5',
        features: ['Free Domain included', 'Unlimited Traffic', 'WordPress Pre-installed']
      }
    ]
  };
  return (
    <section className="py-24 bg-white">
      <div className="w-[85%] mx-auto">
        {/* Section Header............... */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Shared Hosting plans
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>
        <div className=''>
          <ToggleSwitch
            leftLabel="Monthly Plans"
            rightLabel="Yearly Plans"
            isRight={sharedPlanType === 'yearly'}
            onChange={(isYearly) => setSharedPlanType(isYearly ? 'yearly' : 'monthly')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {sharedPlans[sharedPlanType].map((plan, index) => (
              <SharedPlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
