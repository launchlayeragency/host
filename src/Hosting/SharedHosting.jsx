import React from 'react'
import HeroSharedHosting from '../components/Hosting/SharedHosting/HeroSharedHosting'
import FeatureSharedHost from '../components/Hosting/SharedHosting/FeatureSharedHost'
import ReviewSharedHosting from '../components/Hosting/SharedHosting/ReviewSharedHosting'
import PricingSection from '../components/AboutUs/PricingSection'
import PartnersSection from '../components/Hosting/SharedHosting/PartnersSection'
import PaymentShared from '../components/Hosting/SharedHosting/PaymentShared'
import { LoadingWrapper } from '../components/Shared/LoadingWrapper'

export default function SharedHosting() {
  return (

    <LoadingWrapper>
      <div>
        <HeroSharedHosting />
        <PaymentShared />
        <FeatureSharedHost />
        <ReviewSharedHosting />
        <PartnersSection />
        <PricingSection scrollToId="sharedHosting" />
      </div>
    </LoadingWrapper>

  )
}
