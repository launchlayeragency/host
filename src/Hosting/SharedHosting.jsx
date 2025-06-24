import React from 'react'
import HeroSharedHosting from '../components/Hosting/SharedHosting/HeroSharedHosting'
import FeatureSharedHost from '../components/Hosting/SharedHosting/FeatureSharedHost'
import ReviewSharedHosting from '../components/Hosting/SharedHosting/ReviewSharedHosting'
import PricingSection from '../components/AboutUs/PricingSection'
import PartnersSection from '../components/Hosting/SharedHosting/PartnersSection'

export default function SharedHosting() {
  return (
    <div>
        <HeroSharedHosting/>
          <FeatureSharedHost/>
    <ReviewSharedHosting/>
      <PartnersSection/>
    <PricingSection scrollToId="sharedHosting" />
    </div>
  )
}
