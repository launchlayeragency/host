import React from 'react'
import HeroVPS from '../components/Hosting/vpsHosting/HeroVPS'
import PricingSection from '../components/AboutUs/PricingSection'
import TestimonialDomain from '../components/Domain/TestimonialDomain'
import Storage from '../components/Hosting/vpsHosting/Storage'
import FeatureVps from '../components/Hosting/vpsHosting/FeatureVps'
import VPSPlan from '../components/Hosting/vpsHosting/VPSPlan'

export default function VPSHosting() {
  return (
    <div>
    <HeroVPS/>
  <VPSPlan/>
    <Storage/>
    <FeatureVps/>
     <TestimonialDomain/>
          <PricingSection scrollToId="vpsHosting"/>
    </div>
  )
}
