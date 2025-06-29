import React from 'react'
import PricingSection from '../../components/AboutUs/PricingSection'
import SupportHero from '../../components/Support/SupportHero'

export default function SupportPage() {
  return (
    <div>
        <SupportHero/>
          <PricingSection scrollToId="vpsHosting"/>
    </div>
  )
}
