import React from 'react'
import PricingSection from '../../components/AboutUs/PricingSection'
import SupportHero from '../../components/Support/SupportHero'
import SupportFeatures from '../../components/Support/SupportFeatures'
import SupportCards from '../../components/Support/SupportCards'

export default function SupportPage() {
  return (
    <div>
        <SupportHero/>
        <SupportCards/>
        <SupportFeatures/>
          <PricingSection scrollToId="vpsHosting"/>
    </div>
  )
}
